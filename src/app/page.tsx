import GridGallery from '@/components/GridGallery';

export default function Home() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="font-mono text-4xl mb-8">nuu cognition</h1>
            <div className="prose lg:prose-xl mb-12">
                <p className="text-lg text-gray-600 mb-4">
                    Exploring the intersection between learning, cognition and technology.
                </p>
            </div>
            <GridGallery/>
        </div>
    );
}
