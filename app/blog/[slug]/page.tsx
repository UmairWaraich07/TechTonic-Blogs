import Image from "next/image"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { PortableText } from "@portabletext/react"
import { getPostBySlug, getAllPosts } from "@/lib/sanity-utils"
import AuthorBio from "@/components/author-bio"
import ShareButtons from "@/components/share-buttons"
import RelatedPosts from "@/components/related-posts"
import type { Metadata } from "next"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | TechTonic",
      description: "The requested post could not be found",
    }
  }

  return {
    title: `${post.title} | TechTonic`,
    description: post.excerpt,
    openGraph: {
      images: [post.mainImage],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          {post.categories.map((category) => (
            <span key={category._id} className="bg-primary/10 text-primary px-2 py-1 rounded-full">
              {category.title}
            </span>
          ))}
          <span className="mx-2">•</span>
          <time dateTime={post.publishedAt}>{format(new Date(post.publishedAt), "MMMM d, yyyy")}</time>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>

        <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
      </div>

      <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden">
        <Image src={post.mainImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
      </div>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <PortableText value={post.content} />
      </div>

      <div className="border-t border-border pt-8 mt-12">
        <AuthorBio author={post.author} />
      </div>

      <div className="mt-8">
        <ShareButtons title={post.title} slug={post.slug} />
      </div>

      <div className="mt-16">
        <RelatedPosts currentPostId={post._id} categories={post.categories} />
      </div>
    </article>
  )
}
