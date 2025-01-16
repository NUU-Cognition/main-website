import {getArticleContent, getArticleMetadata} from '@/lib/markdown';
import {MDXRemote} from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';

export default async function ArticlePage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;

    try {
        const article = await getArticleContent(slug);

        return (
            <div className="max-w-3xl mx-auto px-4 py-16">
                <h1 className="font-mono text-4xl mb-4">{article.metadata.title}</h1>
                <div className="text-sm text-gray-500 mb-8">{article.metadata.date}</div>
                <div className="prose max-w-none">
                    <MDXRemote
                        source={article.content}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                                format: 'mdx',
                            },
                        }}
                    />
                </div>
            </div>
        );
    } catch {
        notFound();
    }
}

export async function generateStaticParams() {
    const articles = await getArticleMetadata();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({params}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const {slug} = await params;

    try {
        const article = await getArticleContent(slug);
        return {
            title: article.metadata.title,
            description: article.metadata.description,
        };
    } catch {
        return {
            title: 'Article Not Found',
            description: 'The requested article could not be found',
        };
    }
}