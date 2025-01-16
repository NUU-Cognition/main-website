import Link from 'next/link';
import React from 'react';

const cardsData = [
    {
        title: 'nuu library',
        category: 'Research',
        description: 'Documentation of our research, methodologies, and insights',
        href: '/library'
    },
    {
        title: 'nuu learn',
        category: 'Education',
        description: 'Systematic approaches to learning and cognitive development',
        href: '/learn'
    },
    {
        title: 'nuu tools',
        category: 'Software',
        description: 'Research-based software tools for learning and cognitive enhancement',
        href: '/tools'
    },
    {
        title: 'nuu blog',
        category: 'Writing',
        description: 'Essays and articles on technology, cognition, and learning',
        href: '/blog'
    }
];

function GalleryCard({
                         title,
                         category,
                         description,
                         href,
                     }: {
    title: string;
    category: string;
    description: string;
    href: string;
}) {
    return (
        <Link href={href}>
            <div
                className="group min-h-[200px] rounded-lg overflow-hidden relative cursor-pointer border border-black-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div
                    className="absolute inset-0 p-6 flex flex-col justify-between bg-white transition-colors duration-300 group-hover:bg-gray-50">
                    <div className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                        {category}
                    </div>
                    <div>
                        <h3 className="text-xl font-mono mb-2 transition-colors duration-300 group-hover:text-gray-900">{title}</h3>
                        <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function GridGallery() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {cardsData.map((card, index) => (
                    <GalleryCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
}