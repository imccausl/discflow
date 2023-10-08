import { type ActionFunctionArgs, json } from '@remix-run/node'
import { Form, Link, useActionData } from '@remix-run/react'
import { register } from 'app/firebase/auth.server'
import { createUserSession } from 'app/firebase/session.server'
import { z } from 'zod'
import { Input } from 'app/components/Input'

const registerSchema = z.object({
    email: z
        .string()
        .email('Enter a valid email adress (eg. email@example.com)'),
    password: z
        .string()
        .min(6, { message: 'Enter a password of at least 6 characters' }),
})

export const action = async ({ request }: ActionFunctionArgs) => {
    const formPayload = Object.fromEntries(await request.formData())

    const result = registerSchema.safeParse(formPayload)

    if (!result.success) {
        return json(result.error.flatten(), { status: 400 })
    }

    const { email, password } = result.data
    const { user } = await register(email, password)
    const token = await user.getIdToken()

    return createUserSession(token, '/home')
}

export default function Register() {
    const data = useActionData<typeof action>()

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold">Register</h1>

            <Form method="post">
                <label htmlFor="email-field" className="mt-4 block">
                    Email
                </label>
                <Input
                    type="text"
                    aria-describedby="email-error"
                    aria-invalid={data?.fieldErrors.email ? 'true' : 'false'}
                    id="email-field"
                    name="email"
                />
                {data?.fieldErrors.email ? (
                    <p id="email-error" className="text-red-500">
                        {data.fieldErrors.email.join('')}
                    </p>
                ) : null}
                <label htmlFor="password-field" className="mt-4 block">
                    Password
                </label>
                <Input
                    type="password"
                    aria-describedby="password-error"
                    aria-invalid={data?.fieldErrors.password ? 'true' : 'false'}
                    id="password-field"
                    name="password"
                />
                {data?.fieldErrors.password ? (
                    <p id="password-error" className="text-red-500">
                        {data.fieldErrors.password.join('')}
                    </p>
                ) : null}
                <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white">
                    Register
                </button>
            </Form>
            <Link to="/login" className="mt-4 block">
                Already have an account? Login
            </Link>
        </div>
    )
}
