'use client'

import * as React from "react"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ExternalLink } from 'lucide-react'
import { cn } from "@/lib/utils"

export function NavigationMinimal() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    const navItems = [
        { href: '/', label: 'home' },
        { href: '/about', label: 'about' },
        { href: '/ecosystem', label: 'ecosystem' },
        { href: '/tools', label: 'tools' },
        { href: 'https://library.nuucognition.com', label: 'docs', external: true },
    ]

    return (
        <nav className="absolute top-0 left-0 right-0 z-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image 
                            src="/logo.svg" 
                            alt="NUU Cognition Logo" 
                            width={30} 
                            height={30}
                            className="h-6 w-6"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            item.external ? (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-foreground/50 hover:text-foreground transition-all duration-200 flex items-center gap-1"
                                >
                                    {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                                    <ExternalLink size={12} />
                                </a>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium transition-all duration-200",
                                        pathname === item.href 
                                            ? "text-foreground" 
                                            : "text-foreground/50 hover:text-foreground"
                                    )}
                                >
                                    {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 -mr-2 opacity-60 hover:opacity-100 transition-opacity"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm">
                    <div className="px-6 py-4 space-y-3">
                        {navItems.map((item) => (
                            item.external ? (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm font-medium text-foreground/50 transition-all duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                                    <ExternalLink size={12} />
                                </a>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "block text-sm font-medium transition-all duration-200",
                                        pathname === item.href 
                                            ? "text-foreground" 
                                            : "text-foreground/50"
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}