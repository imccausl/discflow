import { Form, Link } from '@remix-run/react'
import { createUserSession } from 'app/firebase/session.server'
import { authenticate } from 'app/firebase/auth.server'
import type { ActionFunctionArgs } from '@remix-run/node'

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

    const { user } = await authenticate(email, password)
    const token = await user.getIdToken()

    return createUserSession(token, '/home')
}

export default function Login() {
    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold">Login</h1>

            <Form method="post">
                <label htmlFor="email-field" className="mt-4 block">
                    Email
                </label>
                <input
                    type="email"
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
                <button
                    type="submit"
                    className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
                >
                    Log In
                </button>
            </Form>
            <Link to="/register" className="mt-4 block">
                Don't have an account? Register
            </Link>
        </div>
    )
}
