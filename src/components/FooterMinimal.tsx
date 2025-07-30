export function FooterMinimal() {
    return (
        <footer className="px-6 py-8 mt-auto border-t border-border/20">
            <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
                <p className="text-foreground/50">© 2025 NUU Cognition</p>
                <div className="flex gap-6">
                    <a 
                        href="mailto:hello@nuucognition.com" 
                        className="text-foreground/50 hover:text-foreground transition-colors duration-200"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}