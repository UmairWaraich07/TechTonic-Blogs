import HeroSection from "@/components/hero-section"
import LatestPosts from "@/components/latest-posts"
import CategorySection from "@/components/category-section"
import FeaturedPost from "@/components/featured-post"
import NewsletterSignup from "@/components/newsletter-signup"
import TestimonialsSection from "@/components/testimonials-section"
import WhyChooseSection from "@/components/why-choose-section"
import { getAllPosts, getFeaturedPost, getAllCategories } from "@/lib/sanity-utils"

export default async function Home() {
  // Fetch data with error handling
  let posts = []
  let featuredPost = null
  let categories = []

  try {
    posts = await getAllPosts()
  } catch (error) {
    console.error("Error fetching posts:", error)
  }

  try {
    featuredPost = await getFeaturedPost()
  } catch (error) {
    console.error("Error fetching featured post:", error)
  }

  try {
    categories = await getAllCategories()
  } catch (error) {
    console.error("Error fetching categories:", error)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />

      <section className="my-16">
        <LatestPosts posts={posts.slice(0, 6)} />
      </section>

      <section className="my-16">
        <CategorySection categories={categories} />
      </section>

      <section className="my-16">
        <FeaturedPost post={featuredPost} />
      </section>

      <section className="my-16 bg-gradient-to-br from-background to-muted/30 py-16 -mx-4 px-4">
        <div className="container mx-auto">
          <WhyChooseSection />
        </div>
      </section>

      <section className="my-16">
        <TestimonialsSection />
      </section>

      <section className="my-16">
        <NewsletterSignup />
      </section>
    </div>
  )
}
