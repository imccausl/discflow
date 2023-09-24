import { ProtectedRoute } from 'app/components/ProtectedRoute'

export default function Home() {
    return (
        <ProtectedRoute>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <p>Authenticated</p>
            </main>
        </ProtectedRoute>
    )
}
