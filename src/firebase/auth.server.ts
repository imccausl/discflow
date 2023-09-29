import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'

import { auth } from './internals.server'

export const authenticate = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const register = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const signOutFirebase = async () => {
    return signOut(auth)
}
