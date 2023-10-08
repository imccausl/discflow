import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
    return [
        { title: 'New Remix App' },
        { name: 'description', content: 'Welcome to Remix!' },
    ]
}

export default function Index() {
    return (
        <div>
            <h1 className="sr-only">Home</h1>
            <div className="bg-white py-2">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Simple no-tricks pricing
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Distinctio et nulla eum soluta et neque labore
                            quibusdam. Saepe et quasi iusto modi velit ut non
                            voluptas in. Explicabo id ut laborum.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                                Lifetime membership
                            </h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Lorem ipsum dolor sit amet consect etur
                                adipisicing elit. Itaque amet indis perferendis
                                blanditiis repellendus etur quidem assumenda.
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                                    What’s included
                                </h4>
                                <div className="h-px flex-auto bg-gray-100"></div>
                            </div>
                            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-indigo-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Private forum access
                                </li>
                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-indigo-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Member resources
                                </li>
                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-indigo-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Entry to annual conference
                                </li>
                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-indigo-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Official member t-shirt
                                </li>
                            </ul>
                        </div>
                        <div className="-mt-2 p-2">
                            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5">
                                <div className="mx-auto max-w-xs px-8">
                                    <Link
                                        to="/register"
                                        className="block w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
