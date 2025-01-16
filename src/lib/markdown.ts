// src/lib/markdown.ts
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'public/articles')

export type ArticleMetadata = {
    title: string
    date: string
    description: string
    slug: string
}

export async function getArticleMetadata(): Promise<ArticleMetadata[]> {
    try {
        const files = await fs.readdir(articlesDirectory)
        const markdownPosts = files.filter(file => file.endsWith('.md'))

        const posts = await Promise.all(
            markdownPosts.map(async fileName => {
                const fileContents = await fs.readFile(
                    path.join(articlesDirectory, fileName),
                    'utf8'
                )
                const {data} = matter(fileContents)
                return {
                    title: data.title,
                    date: data.date,
                    description: data.description,
                    slug: fileName.replace('.md', '')
                }
            })
        )

        return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
    } catch (error) {
        console.error('Error reading articles:', error)
        return []
    }
}

export async function getArticleContent(slug: string) {
    try {
        const fullPath = path.join(articlesDirectory, `${slug}.md`)
        const fileContents = await fs.readFile(fullPath, 'utf8')
        const {data, content} = matter(fileContents)

        return {
            metadata: {
                title: data.title,
                date: data.date,
                description: data.description,
                slug
            },
            content
        }
    } catch (error) {
        throw new Error(`Failed to load article with slug: ${slug}`)
    }
}