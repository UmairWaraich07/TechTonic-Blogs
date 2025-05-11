import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">TechTonic</h3>
            <p className="text-muted-foreground">
              Stay updated with the latest in technology, programming, and digital innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/techtonic" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://github.com/techtonic" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/company/techtonic" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/ai" className="text-muted-foreground hover:text-primary">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/categories/web-dev" className="text-muted-foreground hover:text-primary">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/categories/gadgets" className="text-muted-foreground hover:text-primary">
                  Gadgets
                </Link>
              </li>
              <li>
                <Link href="/categories/coding-tips" className="text-muted-foreground hover:text-primary">
                  Coding Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  All Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Subscribe</h4>
            <p className="mb-4 text-muted-foreground">Get the latest tech news and updates delivered to your inbox.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              />
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TechTonic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
