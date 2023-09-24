'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { register } from 'app/firebase'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)

    const router = useRouter()

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
        const { result, error } = await register(email, password)

        if (error) {
            console.log(error)
            setError(error?.message as string)
            return
        }

        console.log(result)
        router.push('/home')
    }

    return (
        <main className="wrapper">
            <h1 className="mt-60 mb-30">Register</h1>
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
                <button type="submit">Sign Up</button>
            </form>
        </main>
    )
}
