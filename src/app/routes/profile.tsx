import { json } from '@remix-run/node'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { Form, Link, useActionData, useLoaderData } from '@remix-run/react'
import { register } from 'app/firebase/auth.client'
import { requireUserSession } from 'app/firebase/session.server'
import { z } from 'zod'
import { Input } from 'app/components/Input'
import type { User } from 'firebase/auth'

const registerSchema = z.object({
    email: z
        .string()
        .email('Enter a valid email adress (eg. email@example.com)'),
    password: z
        .string()
        .min(6, { message: 'Enter a password of at least 6 characters' }),
})

export const action: ActionFunction = async ({ request }) => {
    const formPayload = Object.fromEntries(await request.formData())

    const result = registerSchema.safeParse(formPayload)

    if (!result.success) {
        return json(result.error.flatten(), { status: 400 })
    }

    const { email, password } = result.data
    const { user } = await register(email, password)
    const token = await user.getIdToken()

    return //createUserSession(token, '/home')
}

export const loader: LoaderFunction = async ({ request }) => {
    const session = await requireUserSession(request)

    return json(session)
}

export default function Profile() {
    const data = useActionData<typeof action>()
    const user = useLoaderData<typeof loader>() as User
    console.log({ user })

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Profile
                </h2>
            </div>

            <Form method="post">
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Personal Information
                        </h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="full-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <Input
                                        type="text"
                                        name="full-name"
                                        id="first-name"
                                        autoComplete="full-name"
                                        placeholder="Example McExampleson"
                                        defaultValue={user?.name ?? ''}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="my@example.email"
                                        defaultValue={user?.email ?? ''}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Country
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="street-address"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <Input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label
                                    htmlFor="city"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    City
                                </label>
                                <div className="mt-2">
                                    <Input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="region"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    State / Province
                                </label>
                                <div className="mt-2">
                                    <Input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="postal-code"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <Input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </Form>
        </div>
    )
}
