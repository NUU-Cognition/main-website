import { Button } from '@/components/ui/button'
import { Mail, Twitter, Linkedin, Github } from 'lucide-react'

export function FooterMinimal() {
    return (
        <footer className="mt-auto border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand column */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold text-lg mb-2">NUU Cognition</h3>
                        <p className="text-sm text-muted-foreground max-w-sm">
                            Building tools to augment human thinking through markdown-first, 
                            local-first, AI-ready software.
                        </p>
                    </div>
                    
                    {/* Quick links */}
                    <div>
                        <h4 className="font-medium text-sm mb-3">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Button variant="link" asChild className="h-auto p-0 text-muted-foreground hover:text-foreground">
                                    <a href="/tools">Tools</a>
                                </Button>
                            </li>
                            <li>
                                <Button variant="link" asChild className="h-auto p-0 text-muted-foreground hover:text-foreground">
                                    <a href="/ecosystem">Ecosystem</a>
                                </Button>
                            </li>
                            <li>
                                <Button variant="link" asChild className="h-auto p-0 text-muted-foreground hover:text-foreground">
                                    <a href="/about">About</a>
                                </Button>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Connect */}
                    <div>
                        <h4 className="font-medium text-sm mb-3">Connect</h4>
                        <div className="flex gap-3">
                            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
                                <a 
                                    href="mailto:hello@nuucognition.com" 
                                    aria-label="Email"
                                >
                                    <Mail className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
                                <a 
                                    href="https://x.com/nuucognition" 
                                    aria-label="X (Twitter)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Twitter className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
                                <a 
                                    href="https://github.com/nuucognition" 
                                    aria-label="GitHub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
                                <a 
                                    href="https://linkedin.com/company/nuucognition" 
                                    aria-label="LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
                
                {/* Bottom bar */}
                <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © 2025 NUU Cognition. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs">
                        <Button variant="link" asChild className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground">
                            <a href="/privacy">Privacy</a>
                        </Button>
                        <Button variant="link" asChild className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground">
                            <a href="/terms">Terms</a>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}