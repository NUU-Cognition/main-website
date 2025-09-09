// src/app/layout.tsx
import "./globals.css"
import { NavigationMinimal } from "@/components/Navigation"
import { FooterMinimal } from "@/components/FooterMinimal"
import { Geist, Geist_Mono } from "next/font/google"

export const metadata = {
  title: "NUU Cognition",
  description: "Software to augment your mind.",
  icons: {
    icon: [{ url: "/nuu.png?v=2", sizes: "any" }],
  },
}

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans antialiased`}
      >
        <NavigationMinimal />
        <main className="flex-grow">{children}</main>
        <FooterMinimal />
      </body>
    </html>
  )
}