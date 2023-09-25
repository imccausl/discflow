import { type User, onAuthStateChanged, signOut } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'

import { auth } from 'app/firebase'

export const AuthContext = createContext<null | {
    user: null | User
    loading: boolean
    signOut: () => ReturnType<typeof signOut>
}>(null)

export const useUser = () => {
    const userContext = useContext(AuthContext)

    if (!userContext) {
        throw new Error('useUser must be used within an AuthProvider')
    }

    return userContext
}

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const signOutUser = async () => {
        return signOut(auth)
    }

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }

            setLoading(false)
        })
    }, [])

    return (
        <AuthContext.Provider value={{ user, signOut: signOutUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
