import { Form, Link, useFetcher } from '@remix-run/react'
import { createUserSession, getUserSession } from 'app/firebase/session.server'
import { signInWithGooglePopup, authenticate } from 'app/firebase/auth.client'
import {
    type LoaderFunction,
    type ActionFunction,
    redirect,
} from '@remix-run/node'
import { Input } from 'app/components/Input'

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const googleSignIn = formData.get('google-sign-in')

    if (googleSignIn) {
        return createUserSession(formData.get('token'), '/home')
    }

    const { user } = await authenticate(email, password)
    const token = await user.getIdToken()

    return createUserSession(token, '/home')
}

// export const loader: LoaderFunction = async ({ request }) => {
//     const session = getUserSession(request)

//     if (session) {
//         return redirect('/home')
//     }
// }

export default function Login() {
    const fetcher = useFetcher()

    const handleGoogleSignIn = async () => {
        const { token } = await signInWithGooglePopup()
        fetcher.submit({ token, 'google-sign-in': 'true' }, { method: 'post' })
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <Form className="space-y-6" method="post">
                    <div>
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
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="text-sm">
                                <Link
                                    to="/recover-password"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign In
                        </button>
                    </div>
                </Form>
                <div className="relative mt-6">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center"
                    >
                        <div className="z-0 w-full border-t-[1px] border-solid border-gray-300"></div>
                    </div>
                    <div className="flex justify-center text-sm font-medium">
                        <span className="z-10 bg-white/100 px-6">
                            Or continue with
                        </span>
                    </div>
                </div>
                <div className="align-center mt-6 flex justify-center">
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="align-center flex w-full justify-center rounded-lg border-[1px] border-solid border-gray-300 px-10 py-1 font-medium"
                    >
                        <div aria-hidden="true">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                                <path d="M1 1h22v22H1z" fill="none" />
                            </svg>
                        </div>
                        <div className="mx-2">Google</div>
                    </button>
                </div>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link
                        to="/register"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Sign up for a free account
                    </Link>
                </p>
            </div>
        </div>
    )
}
