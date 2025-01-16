// src/components/Navigation.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image' // added
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import {Menu, X} from 'lucide-react'

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path

    const NavLink = ({href, children}: { href: string; children: React.ReactNode }) => (
        <Link
            href={href}
            className={`px-4 py-2 text-lg ${
                isActive(href) ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'
            }`}
            onClick={() => setIsMenuOpen(false)}
        >
            {children}
        </Link>
    )

    return (
        <nav className="border-b bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Left: Logo + Brand Name */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/logo.svg"
                            alt="NUU Cognition Logo"
                            width={32} // or any size
                            height={32}
                        />
                        {/*<span className="font-mono text-xl">nuu</span>*/}
                        {/* This is your special usage of Sono Mono */}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4">
                        <NavLink href="/">home</NavLink>
                        <NavLink href="/about">about</NavLink>
                        <NavLink href="/library">library</NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t">
                    <div className="flex flex-col items-center py-4">
                        <NavLink href="/">home</NavLink>
                        <NavLink href="/about">about</NavLink>
                        <NavLink href="/library">library</NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}
