export default function Home() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="font-mono text-4xl mb-8">nuu cognition</h1>
            <p className="text-lg mb-8">
                Pioneering the integration of advanced cognitive science, technology, and
                practical implementation methodologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="font-mono text-xl mb-4">nuu learn</h2>
                    <p className="text-gray-600">Educational services and cognitive enhancement programs.</p>
                </div>
                <div>
                    <h2 className="font-mono text-xl mb-4">nuu library</h2>
                    <p className="text-gray-600">Knowledge repository and research publications.</p>
                </div>
                <div>
                    <h2 className="font-mono text-xl mb-4">nuu labs</h2>
                    <p className="text-gray-600">Research and development in cognitive science.</p>
                </div>
            </div>
        </div>
    )
}