'use client'

import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'
import {useState, useRef, useEffect} from 'react'
import {Menu, X, ChevronDown} from 'lucide-react'
import {ExternalLink} from 'lucide-react';

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const pathname = usePathname()
    const dropdownRef = useRef<HTMLDivElement>(null)

    const isHomePage = pathname === '/'

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

    // Close both menus when route changes
    useEffect(() => {
        setIsMenuOpen(false)
        setIsDropdownOpen(false)
    }, [pathname])

    const dropdownLinks = [
        {href: 'https://library.nuucognition.com', label: 'library', external: true},
        {href: '/learn', label: 'learn', external: false},
        {href: '/tools', label: 'tools', external: false},
        {href: '/blog', label: 'blog', external: false},
    ]

    const handleDropdownItemClick = () => {
        setIsDropdownOpen(false)
        setIsMenuOpen(false)
    }

    return (
        <nav className="border-b bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        {isHomePage ? (
                            <>
                                <Image src="/logo.svg" alt="NUU Cognition Logo" width={32} height={32}/>
                            </>
                        ) : (
                            <span className="font-mono text-xl">nuu cognition</span>
                        )}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4 items-center">
                        <Link href="/" className="px-4 py-2 text-lg text-gray-600 hover:text-black">
                            home
                        </Link>
                        <Link href="/about" className="px-4 py-2 text-lg text-gray-600 hover:text-black">
                            about
                        </Link>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="px-4 py-2 text-lg text-gray-600 hover:text-black flex items-center gap-1"
                            >
                                explore
                                <ChevronDown
                                    size={16}
                                    className={`transform transition-transform ${
                                        isDropdownOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {isDropdownOpen && (
                                <div
                                    className="absolute top-full right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                                    {dropdownLinks.map(({href, label, external}) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 flex items-center gap-2"
                                            target={external ? '_blank' : undefined}
                                            rel={external ? 'noopener noreferrer' : undefined}
                                            onClick={handleDropdownItemClick}
                                        >
                                            {label}
                                            {external && <ExternalLink size={14} className="text-gray-400"/>}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t">
                    <div className="flex flex-col items-center py-4">
                        <Link
                            href="/"
                            className="px-4 py-2 text-lg text-gray-600 hover:text-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            home
                        </Link>
                        <Link
                            href="/about"
                            className="px-4 py-2 text-lg text-gray-600 hover:text-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            about
                        </Link>
                        {dropdownLinks.map(({href, label, external}) => (
                            <Link
                                key={href}
                                href={href}
                                className="block px-4 py-2 text-lg text-gray-600 hover:text-black flex items-center gap-2"
                                target={external ? '_blank' : undefined}
                                rel={external ? 'noopener noreferrer' : undefined}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {label}
                                {external && <ExternalLink size={14} className="text-gray-400"/>}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}