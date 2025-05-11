import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Code, Smartphone, Lightbulb } from "lucide-react"

export default function CategorySection({ categories }) {
  // Fallback icons if categories don't have icons defined
  const categoryIcons = {
    AI: <Cpu className="h-8 w-8" />,
    "Web Development": <Code className="h-8 w-8" />,
    Gadgets: <Smartphone className="h-8 w-8" />,
    "Coding Tips": <Lightbulb className="h-8 w-8" />,
  }

  // Add a check to ensure categories is an array
  const validCategories = Array.isArray(categories) ? categories : []

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight mb-8">Popular Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {validCategories.map((category) => (
          <Link key={category._id} href={`/categories/${category.slug}`}>
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center justify-center text-center p-6">
                <div className="mb-4 text-primary">{categoryIcons[category.title] || <Cpu className="h-8 w-8" />}</div>
                <h3 className="font-medium">{category.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{category.postCount || 0} articles</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
