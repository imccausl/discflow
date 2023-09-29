import type { ActionFunctionArgs } from '@remix-run/node'
import { Form, Link } from '@remix-run/react'
import { register } from 'app/firebase/auth.server'
import { createUserSession } from 'app/firebase/session.server'

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

    if (!email || !password) throw new Error('Missing email or password')

    const { user } = await register(email, password)
    const token = await user.getIdToken()

    return createUserSession(token, '/home')
}

export default function Register() {
    return (
        <main className="p-5">
            <h1 className="text-3xl font-bold">Register</h1>

            <Form method="post">
                <label htmlFor="email-field" className="mt-4 block">
                    Email
                </label>
                <input
                    type="text"
                    id="email-field"
                    name="email"
                    className="w-full rounded-md border border-gray-300 p-2"
                />
                <label htmlFor="password-field" className="mt-4 block">
                    Password
                </label>
                <input
                    type="password"
                    id="password-field"
                    name="password"
                    className="w-full rounded-md border border-gray-300 p-2"
                />
                <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white">
                    Register
                </button>
            </Form>
            <Link to="/login" className="mt-4 block">
                Already have an account? Login
            </Link>
        </main>
    )
}
