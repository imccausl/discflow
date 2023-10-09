import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'

import { auth } from './internals'

export const signInWithGooglePopup = async () => {
    if (typeof document !== 'undefined') {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)

        return { token: await result.user.getIdToken(), user: result.user }
    }
}

export const authenticate = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const register = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const signOutFirebase = async () => {
    return signOut(auth)
}
