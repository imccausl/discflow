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
