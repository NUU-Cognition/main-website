// src/app/library/[slug]/page.tsx
import {getArticleContent, getArticleMetadata} from '@/lib/markdown'
import {MDXRemote} from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import {notFound} from 'next/navigation'

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ArticlePage(props: Props) {
    const slug = props.params.slug

    try {
        const article = await getArticleContent(slug)

        return (
            <div className="max-w-3xl mx-auto px-4 py-16">
                <h1 className="font-mono text-4xl mb-4">
                    {article.metadata.title}
                </h1>
                <div className="text-sm text-gray-500 mb-8">
                    {article.metadata.date}
                </div>
                <div className="prose max-w-none">
                    <MDXRemote
                        source={article.content}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                                format: 'mdx'
                            }
                        }}
                    />
                </div>
            </div>
        )
    } catch {
        notFound()
    }
}

export async function generateStaticParams() {
    const articles = await getArticleMetadata()
    return articles.map((article) => ({
        slug: article.slug
    }))
}