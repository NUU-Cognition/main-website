// src/app/blog/[slug]/page.tsx
import {getBlogPost} from '@/lib/blog';
import {MDXRemote} from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';

export default async function BlogPost({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;

    try {
        const post = await getBlogPost(slug);

        return (
            <div className="max-w-3xl mx-auto px-4 py-16">
                <h1 className="font-mono text-4xl mb-4">{post.metadata.title}</h1>
                <div className="text-sm text-gray-500 mb-8">{post.metadata.date}</div>
                <div className="prose max-w-none">
                    <MDXRemote
                        source={post.content}
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


export async function generateMetadata({params}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const {slug} = await params;

    try {
        const post = await getBlogPost(slug);
        return {
            title: post.metadata.title,
            description: post.metadata.description,
        };
    } catch {
        return {
            title: 'Post Not Found',
            description: 'The requested post could not be found',
        };
    }
}