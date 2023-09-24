'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { authenticate, useUser } from 'app/firebase'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const { user, loading } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!loading && user) {
            router.push('/home')
        }
    })

    const handleChangePassword = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setPassword(event.target.value)
    }

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { result, error } = await authenticate(email, password)
        if (error) {
            console.log(error)
            setError(error?.message)
            return
        }

        console.log(result)
    }

    if (loading && !user) {
        return <p>Loading...</p>
    }

    return (
        <main className="wrapper">
            <h1 className="mt-60 mb-30">Login</h1>
            {error && <p>{error}</p>}
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    onChange={handleChangeEmail}
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    autoComplete="email"
                />
                <label htmlFor="password">Password</label>
                <input
                    onChange={handleChangePassword}
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder="Password"
                    autoComplete="current-password"
                />
                <button type="submit">Login</button>
            </form>
        </main>
    )
}
