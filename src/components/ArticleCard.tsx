// src/components/ArticleCard.tsx
import Link from 'next/link'
import type {BlogPostMetadata} from '@/lib/blog'

export function ArticleCard({article}: { article: BlogPostMetadata }) {
    return (
        <article className="border-b pb-8">
            <Link href={`/blog/${article.slug}`} className="block group">
                <h2 className="font-mono text-2xl mb-4 group-hover:text-gray-600">
                    {article.title}
                </h2>
                <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                <p className="text-lg text-gray-600">
                    {article.description}
                </p>
            </Link>
        </article>
    )
}