'use client';

import {ArticleCard} from '@/components/ArticleCard';
import {SearchBar} from '@/components/SearchBar';
import {useState} from 'react';
import type {BlogPostMetadata} from '@/lib/blog';  // Update the type import

export default function BlogPage({
                                     initialArticles
                                 }: {
    initialArticles: BlogPostMetadata[]
}) {
    const [filteredArticles, setFilteredArticles] = useState<BlogPostMetadata[]>(initialArticles);

    const handleSearch = (query: string) => {
        const filtered = initialArticles.filter((article) => {
            const searchContent = `${article.title} ${article.description}`.toLowerCase();
            return searchContent.includes(query.toLowerCase());
        });
        setFilteredArticles(filtered);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="font-mono text-4xl mb-8">blog</h1>
            <SearchBar onSearch={handleSearch}/>
            <div className="grid gap-8">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                        <ArticleCard key={article.slug} article={article}/>
                    ))
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-600">No articles found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}