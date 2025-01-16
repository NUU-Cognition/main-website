export function Footer() {
    return (
        <footer className="border-t">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <p className="text-center text-gray-600">
                    © {new Date().getFullYear()} NUU Cognition. All rights reserved.
                </p>
            </div>
        </footer>
    )
}