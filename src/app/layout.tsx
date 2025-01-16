// src/app/layout.tsx
import './globals.css'
import {Navigation} from '@/components/Navigation'
import {Work_Sans} from 'next/font/google'
import {Footer} from '@/components/Footer'
import {Inter} from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({subsets: ['latin'], variable: '--font-inter'})

const workSans = Work_Sans({
    variable: '--font-work-sans',
    subsets: ['latin'],
})

const sono = localFont({
    src: '../fonts/Sono-Regular.ttf',
    variable: '--font-sono'
})

export const metadata = {
    title: 'NUU Cognition',
    description: 'Cognitive enhancement and learning acceleration',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="en" className={`${inter.variable} ${sono.variable} ${workSans.variable}`}>
        <body suppressHydrationWarning className="min-h-screen flex flex-col">
        <Navigation/>
        <main className="flex-grow">
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    )
}