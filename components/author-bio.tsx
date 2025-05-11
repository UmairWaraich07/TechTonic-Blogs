import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AuthorBio({ author }) {
  if (!author) return null

  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
      <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={author.image || "/placeholder.svg?height=96&width=96"}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="text-center sm:text-left">
        <h3 className="text-xl font-semibold mb-2">{author.name}</h3>
        <p className="text-muted-foreground mb-4">{author.bio}</p>

        <div className="flex gap-2 justify-center sm:justify-start">
          {author.twitter && (
            <Button asChild variant="ghost" size="icon">
              <Link href={author.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          )}

          {author.linkedin && (
            <Button asChild variant="ghost" size="icon">
              <Link href={author.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          )}

          {author.website && (
            <Button asChild variant="ghost" size="icon">
              <Link href={author.website} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
                <span className="sr-only">Website</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
