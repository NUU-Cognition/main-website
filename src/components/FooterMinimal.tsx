import { Mail, Twitter, Linkedin } from 'lucide-react';

export function FooterMinimal() {
    return (
        <footer className="px-6 py-8 mt-auto border-t border-border/20">
            <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
                <p className="text-foreground/50">© 2025 NUU Cognition</p>
                <div className="flex gap-6 items-center">
                    <a 
                        href="mailto:hello@nuucognition.com" 
                        className="text-foreground/50 hover:text-foreground transition-colors duration-200"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                    <a 
                        href="https://x.com/nuucognition" 
                        className="text-foreground/50 hover:text-foreground transition-colors duration-200"
                        aria-label="X (Twitter)"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                        href="https://linkedin.com/company/nuucognition" 
                        className="text-foreground/50 hover:text-foreground transition-colors duration-200"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}