import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function PostCard({ post }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-video overflow-hidden">
        <Image
          src={post.mainImage || "/placeholder.svg?height=300&width=600"}
          alt={post.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </Link>

      <CardContent className="flex-1 pt-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          {post.categories && post.categories.length > 0 && (
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{post.categories[0].title}</span>
          )}
          <span className="mx-1">•</span>
          <time dateTime={post.publishedAt}>{format(new Date(post.publishedAt), "MMM d, yyyy")}</time>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">{post.title}</h3>
        </Link>

        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>

      <CardFooter className="pt-2 pb-6 border-t">
        <div className="flex items-center gap-2">
          {post.author && (
            <>
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={post.author.image || "/placeholder.svg?height=32&width=32"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium">{post.author.name}</span>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
