'use client'

import { Inter } from 'next/font/google'

import { AuthProvider } from 'app/firebase'
import { Header } from 'app/components/Header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <>
                    <Header />
                    {children}
                    </>
                    </AuthProvider>
            </body>
        </html>
    )
}
