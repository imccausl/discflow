import { createCookieSessionStorage, redirect } from '@remix-run/node'

import { adminAuth } from 'app/firebase/internals.server'
import { signOutFirebase } from 'app/firebase/auth.server'

const sessionSecret = process.env.SESSION_SECRET

if (!sessionSecret) throw new Error('Missing SESSION_SECRET')

const storage = createCookieSessionStorage({
    cookie: {
        name: '__session',
        secure: process.env.NODE_ENV === 'production',
        secrets: [sessionSecret],
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        httpOnly: true,
    },
})

export const createUserSession = async (
    idToken: string,
    redirectTo: string,
) => {
    const token = await getSessionToken(idToken)
    const session = await storage.getSession()

    session.set('token', token)

    return redirect(redirectTo, {
        headers: {
            'Set-Cookie': await storage.commitSession(session),
        },
    })
}

export const getSessionToken = async (idToken: string) => {
    const decodedToken = await adminAuth.verifyIdToken(idToken)
    if (new Date().getTime() / 1000 - decodedToken.auth_time > 5 * 60) {
        throw new Error('Recent sign in required')
    }
    const twoWeeks = 60 * 60 * 24 * 14 * 1000
    return adminAuth.createSessionCookie(idToken, { expiresIn: twoWeeks })
}

export const getUserSession = async (request: Request) => {
    const cookieSession = await storage.getSession(
        request.headers.get('Cookie'),
    )
    const token = cookieSession.get('token')
    if (!token) return null

    try {
        const tokenUser = await adminAuth.verifySessionCookie(token, true)
        return tokenUser
    } catch (error) {
        console.error(error)
        return null
    }
}

async function destroySession(request: Request) {
    const session = await storage.getSession(request.headers.get('Cookie'))
    const newCookie = await storage.destroySession(session)

    return redirect('/login', { headers: { 'Set-Cookie': newCookie } })
}

export async function signOut(request: Request) {
    await signOutFirebase()
    return await destroySession(request)
}
