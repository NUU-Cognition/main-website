import GridGallery from '@/components/GridGallery';

export default function Home() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="font-mono text-4xl mb-8 -mt-6">nuu cognition</h1>
            <div className="prose lg:prose-xl mb-12">
                <p className="text-lg text-gray-600 mb-4">
                    An independent practice exploring software, cognition, and human development.
                </p>
            </div>
            <GridGallery/>
        </div>
    );
}