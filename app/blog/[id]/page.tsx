import { getPosts } from "@/app/components/pack/blogs_wrapper";
import { notFound } from "next/navigation";

// This function generates static pages for each blog post at build time
export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map((post) => ({
        id: post.id,
    }));
}

async function getPostById(id: string) {
    const posts = await getPosts();
    const post = posts.find((p) => p.id === id);
    return post;
}

export default async function BlogPage({ params }: { params: { id: string } }) {
    const post = await getPostById(params.id);

    if (!post) {
        notFound();
    }

    return (
        <main className="px-5 py-12 w-full">
            <article className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance text-center">
                    {post.title}
                </h1>
                <div 
                    className="prose prose-lg dark:prose-invert max-w-none mt-8 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-headings:font-bold prose-headings:text-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </main>
    );
}
