import { RequireAuth } from 'app/components/RequireAuth'

export default function Home() {
    return (
        <RequireAuth>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <p>Authenticated</p>
            </main>
        </RequireAuth>
    )
}
