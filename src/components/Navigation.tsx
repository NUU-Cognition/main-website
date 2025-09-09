'use client'

import * as React from "react"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ExternalLink } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function NavigationMinimal() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    // { href: '/ecosystem', label: 'Ecosystem' },
    { href: '/tools', label: 'Tools' },
    { href: 'https://library.nuucognition.com', label: 'Docs', external: true },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all",
        !scrolled
          ? "bg-transparent border-transparent"
          : "bg-background/80 border-b border-border/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-[0_1px_0_rgba(0,0,0,0.06),0_8px_20px_-12px_rgba(15,23,42,0.18)]"
      )}
    >

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/nuu.png"
              alt="NUU"
              width={28}
              height={28}
              priority
              className="h-7 w-7 transition-transform group-hover:scale-110"
            />
            <span className="font-semibold text-sm hidden sm:inline-block">
              NUU Cognition
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.external ? (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-muted-foreground hover:text-foreground"
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    {item.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              ) : (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className={cn(
                    pathname === item.href
                      ? "text-foreground bg-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden h-9 w-9"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors",
                    pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}