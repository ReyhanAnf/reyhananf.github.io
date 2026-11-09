import Blogs from './blogs'
import type { BlogPost } from './types'

export async function getPosts(): Promise<BlogPost[]> {
    try {
        const res = await fetch('https://reyntech.blogspot.com/feeds/posts/default?alt=json', {
            next: { revalidate: 3600 } // Revalidate every hour
        });

        if (!res.ok) {
            console.warn(`[blogs] Feed unavailable (status: ${res.status}). Displaying empty state.`);
            return [];
        }

        const data = await res.json();
        const entries: BlogPost[] = data.feed.entry?.map((entry: any) => {
            const link = entry.link.find((l: any) => l.rel === 'alternate')?.href || ''
            const id = entry.id?.$t.split('-').pop()
            const title = entry.title.$t
            const content = entry.content?.$t || ''
            // A simple regex to grab the first image URL from the content
            const thumbnailMatch = content.match(/<img[^>]+src="([^">]+)"/);
            const thumbnail = entry.media$thumbnail?.url || (thumbnailMatch ? thumbnailMatch[1] : '/placeholder.svg');

            return { id, title, link, content, thumbnail }
        }) || []

        return entries;
    } catch (error) {
        console.warn('[blogs] Unable to fetch blog feed:', error instanceof Error ? error.message : error);
        return []; // Return an empty array on error
    }
}

const BlogsWrapper = async () => {
    const posts = await getPosts();

    return <Blogs posts={posts} />
}

export default BlogsWrapper;