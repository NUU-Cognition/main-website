// src/lib/blog.ts
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'src', 'content', 'blog'); // <-- Changed here

export type BlogPostMetadata = {
    title: string;
    date: string;
    description: string;
    slug: string;
};

export async function getBlogPosts(): Promise<BlogPostMetadata[]> {
    try {
        const files = await fs.readdir(blogDirectory);
        const markdownPosts = files.filter(file => file.endsWith('.md'));

        const posts = await Promise.all(
            markdownPosts.map(async fileName => {
                const fileContents = await fs.readFile(path.join(blogDirectory, fileName), 'utf8');
                const {data} = matter(fileContents);
                return {
                    title: data.title,
                    date: data.date,
                    description: data.description,
                    slug: fileName.replace('.md', ''),
                };
            })
        );

        // Sort by date descending
        return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    } catch (error) {
        console.error('Error reading blog posts:', error);
        return [];
    }
}

export async function getBlogPost(slug: string) {
    try {
        const fullPath = path.join(blogDirectory, `${slug}.md`);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const {data, content} = matter(fileContents);

        return {
            metadata: {
                title: data.title,
                date: data.date,
                description: data.description,
                slug,
            },
            content,
        };
    } catch {
        throw new Error(`Failed to load blog post with slug: ${slug}`);
    }
}
