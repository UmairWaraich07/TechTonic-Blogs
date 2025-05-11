import { getRelatedPosts } from "@/lib/sanity-utils"
import PostCard from "@/components/post-card"

export default async function RelatedPosts({ currentPostId, categories }) {
  const relatedPosts = await getRelatedPosts(currentPostId, categories)

  if (!relatedPosts || relatedPosts.length === 0) return null

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.slice(0, 3).map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}
