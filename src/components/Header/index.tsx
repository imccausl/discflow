import { useUser } from 'app/firebase'

const SignOutButton: React.FC = () => {
    return <button>Sign Out</button>
}

export const Header: React.FC = () => {
    const { user, loading } = useUser()
    if (!loading && !user) {
        return <SignOutButton />
    }
    return null
}
