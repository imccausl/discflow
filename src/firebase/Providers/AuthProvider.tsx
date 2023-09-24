import { type User, onAuthStateChanged } from 'firebase/auth'
import { auth } from 'app/firebase'
import { useEffect, useState, createContext, useContext } from 'react'

export const AuthContext = createContext<null | { user: null | User, loading: boolean }>(null)

export const useUser = () => {
  const userContext = useContext(AuthContext)

  if (!userContext) {
    throw new Error('useUser must be used within an AuthProvider')
  }

  return userContext
}

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

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
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
