import type { LoaderFunction } from '@remix-run/node'
import { signOut, requireUserSession } from 'app/firebase/session.server'
import { redirect } from '@remix-run/node'
export const loader: LoaderFunction = async ({ request }) => {
    await requireUserSession(request)
    return signOut(request)
}

export default function Logout() {
    return null
}
