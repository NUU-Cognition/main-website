// src/app/blog/page.tsx
import {getBlogPosts} from '@/lib/blog';
import BlogPage from './client';

export default async function Blog() {
    const posts = await getBlogPosts();
    return <BlogPage initialArticles={posts}/>;
}