// src/app/layout.tsx
import './globals.css'
import {NavigationMinimal} from '@/components/NavigationMinimal'
import {FooterMinimal} from '@/components/FooterMinimal'

export const metadata = {
    title: 'nuu cognition',
    description: 'An independent practice exploring software, cognition, and human development.',
    icons: {
        icon: [
            {url: '/favicon.ico', sizes: 'any'},
        ],
    },
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="en">
        <body suppressHydrationWarning className="min-h-screen flex flex-col font-sans antialiased">
        <NavigationMinimal/>
        <main className="flex-grow">
            {children}
        </main>
        <FooterMinimal/>
        </body>
        </html>
    )
}