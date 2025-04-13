import React, { useEffect, useState } from 'react'
import Blogs from './blogs'
import type { BlogPost } from './types'

const BlogsWrapper = () => {
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/blogs')
                const data = await res.json()
                const entries: BlogPost[] = data.feed.entry?.map((entry: any) => {
                    const link = entry.link.find((l: any) => l.rel === 'alternate')?.href || ''
                    const id = entry.id?.$t.split('-').pop()
                    const title = entry.title.$t
                    const content = entry.content?.$t || ''
                    const thumbnail = entry.media$thumbnail?.url || null

                    return { id, title, link, content, thumbnail }
                }) || []

                setPosts(entries)
            } catch (error) {
                console.error('Error fetching blog posts:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData();

    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return <Blogs posts={posts} />
}

export default BlogsWrapper
