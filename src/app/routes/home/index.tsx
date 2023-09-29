import { Form } from '@remix-run/react'
import { signOut } from 'app/firebase/session.server'

export const action = async ({ request }) => {
    return signOut(request)
}

export default function Home() {
    return (
        <main className="p-5">
            <h1>Home</h1>
            <Form method="post">
                <button
                    type="submit"
                    className="mt-4 rounded-md bg-red-500 px-4 py-2 text-white"
                >
                    Sign Out
                </button>
            </Form>
        </main>
    )
}
