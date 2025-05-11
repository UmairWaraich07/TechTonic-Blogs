import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedPost({ post }) {
  if (!post) return null

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <div className="h-6 w-1.5 bg-primary rounded-full" />
        <h2 className="text-3xl font-bold tracking-tight">Editor's Pick</h2>
      </div>

      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-square md:aspect-auto">
            <Image
              src={post.mainImage || "/placeholder.svg?height=600&width=600"}
              alt={post.title}
              fill
              className="object-cover"
            />
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
          </div>

          <CardContent className="flex flex-col justify-center p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              {post.categories && post.categories.length > 0 && (
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{post.categories[0].title}</span>
              )}
              <span className="mx-1">•</span>
              <time dateTime={post.publishedAt}>{format(new Date(post.publishedAt), "MMMM d, yyyy")}</time>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h3>

            <p className="text-muted-foreground mb-6 line-clamp-3 md:line-clamp-4">{post.excerpt}</p>

            <div className="flex items-center gap-4 mb-6">
              {post.author && (
                <>
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={post.author.image || "/placeholder.svg?height=40&width=40"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">{post.author.role || "Author"}</p>
                  </div>
                </>
              )}
            </div>

            <Button asChild className="w-fit">
              <Link href={`/blog/${post.slug}`} className="gap-2">
                Read Article <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
