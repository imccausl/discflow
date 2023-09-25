import { useUser } from 'app/firebase'

const SignOutButton: React.FC = () => {
    const { signOut } = useUser()
    const handleClick = async () => {
        await signOut()
    }

    return <button onClick={handleClick}>Sign Out</button>
}

export const Header: React.FC = () => {
    const { user, loading } = useUser()
    if (!loading && user) {
        return <SignOutButton />
    }
    return null
}
