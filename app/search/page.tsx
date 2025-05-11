"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import PostCard from "@/components/post-card"
import CategoryFilter from "@/components/category-filter"
import { searchPosts } from "@/lib/sanity-utils"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const initialCategory = searchParams.get("category") || ""

  const [query, setQuery] = useState(initialQuery)
  const [category, setCategory] = useState(initialCategory)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchResults() {
      setLoading(true)
      const results = await searchPosts(query, category)
      setPosts(results)
      setLoading(false)
    }

    fetchResults()
  }, [query, category])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Search Articles</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for articles..."
            className="pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <CategoryFilter selectedCategory={category} onCategoryChange={setCategory} />
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">No results found</h2>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setQuery("")
                  setCategory("")
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
