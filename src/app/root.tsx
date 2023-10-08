import {
    type LinksFunction,
    type LoaderFunctionArgs,
    json,
} from '@remix-run/node'
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useRouteError,
    Link,
    isRouteErrorResponse,
} from '@remix-run/react'

import stylesheet from '~/tailwind.css'
import { Header } from 'app/components/Header'
import { getUserSession } from 'app/firebase/session.server'
export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: stylesheet },
]

export const loader = async ({ request }: LoaderFunctionArgs) => {
    return json(await getUserSession(request))
}

export default function App() {
    const data = useLoaderData<typeof loader>()

    return (
        <html lang="en" className="h-full bg-gray-100">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body className="h-full">
                <Header user={data} />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export function ErrorBoundary() {
    const error = useRouteError()
    console.log(error)
    return (
        <html lang="en" className="h-full bg-gray-100">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body className="h-full">
                <>
                    <Header user={null} />
                    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                        {
                            isRouteErrorResponse(error) &&
                            error.status === 404 ? (
                                <div className="text-center">
                                    <p className="text-base font-semibold text-indigo-600">
                                        404
                                    </p>
                                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                        Page not found
                                    </h1>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        Sorry, we couldn’t find the page you’re
                                        looking for.
                                    </p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <Link
                                            to="/"
                                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Go back home
                                        </Link>
                                        <Link
                                            to="/support"
                                            className="text-sm font-semibold text-gray-900"
                                        >
                                            Contact support{' '}
                                            <span aria-hidden="true">
                                                &rarr;
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ) : null /* TODO: handle other errors if necessary in the global error boundary */
                        }
                    </main>
                </>
            </body>
        </html>
    )
}
