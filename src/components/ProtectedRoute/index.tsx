import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useUser } from 'app/firebase'

type ProtectedRouteProps = React.PropsWithChildren<{
    redirectTo?: string
}>

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    redirectTo = '/login',
}) => {
    const { user, loading } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push(redirectTo)
        }
    }, [loading, user, router, redirectTo])

    if (loading && !user) {
        return <p>Loading...</p>
    }

    if (!loading && !user) {
        return null
    }

    return <div>{children}</div>
}
