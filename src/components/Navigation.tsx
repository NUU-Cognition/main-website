'use client'

import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'
import {useState, useRef, useEffect} from 'react'
import {Menu, X, ChevronDown} from 'lucide-react'

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const pathname = usePathname()
    const dropdownRef = useRef<HTMLDivElement>(null)

    const isActive = (path: string) => pathname === path
    const isHome = pathname === '/'

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const NavLink = ({href, children}: { href: string; children: React.ReactNode }) => (
        <Link
            href={href}
            className={`px-4 py-2 text-lg ${
                isActive(href) ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'
            }`}
            onClick={() => {
                setIsMenuOpen(false)
                setIsDropdownOpen(false)
            }}
        >
            {children}
        </Link>
    )

    const dropdownLinks = [
        {href: '/tools', label: 'tools'},
        {href: '/library', label: 'library'},
        {href: '/learn', label: 'learn'},
        {href: '/blog', label: 'blog'},
    ]

    return (
        <nav className="border-b bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo or Text based on route */}
                    <Link href="/" className="flex items-center space-x-2">
                        {isHome ? (
                            <Image
                                src="/logo.svg"
                                alt="NUU Cognition Logo"
                                width={32}
                                height={32}
                            />
                        ) : (
                            <span className="font-mono text-xl">nuu cognition</span>
                        )}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4 items-center">
                        <NavLink href="/">home</NavLink>
                        <NavLink href="/about">about</NavLink>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="px-4 py-2 text-lg text-gray-600 hover:text-black flex items-center gap-1"
                            >
                                explore
                                <ChevronDown size={16}
                                             className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}/>
                            </button>
                            {isDropdownOpen && (
                                <div
                                    className="absolute top-full right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                                    {dropdownLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`block px-4 py-2 text-sm ${
                                                isActive(link.href) ? 'text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'
                                            }`}
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
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
                        {dropdownLinks.map((link) => (
                            <NavLink key={link.href} href={link.href}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}