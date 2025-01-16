// src/app/library/page.tsx
import {getArticleMetadata} from '@/lib/markdown';
import LibraryPage from './client';

export default async function Library() {
    const articles = await getArticleMetadata();
    return <LibraryPage initialArticles={articles}/>;
}