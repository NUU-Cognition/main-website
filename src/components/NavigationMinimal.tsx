'use client'

import * as React from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
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
        { href: '/tools', label: 'tools' },
        { href: '/blog', label: 'blog' },
    ]

    return (
        <nav className="absolute top-0 left-0 right-0 z-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-base font-medium">
                        NUU
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
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
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}