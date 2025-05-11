import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PostCard from "@/components/post-card"

export default function LatestPosts({ posts }) {
  // Add a check to ensure posts is an array
  const validPosts = Array.isArray(posts) ? posts : []

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
        <Button asChild variant="ghost" className="gap-1">
          <Link href="/blog">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {validPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {validPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <p className="text-muted-foreground">No articles available yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
