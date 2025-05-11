"use client"

import { Twitter, Linkedin, Facebook, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

export default function ShareButtons({ title, slug }) {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
  const url = `${baseUrl}/blog/${slug}`

  const shareLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(
      () => {
        toast({
          title: "Link copied!",
          description: "The article link has been copied to your clipboard.",
        })
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  return (
    <div>
      <h4 className="text-sm font-semibold mb-3">Share this article</h4>
      <div className="flex gap-2">
        {shareLinks.map((link) => (
          <Button key={link.name} variant="outline" size="icon" onClick={() => window.open(link.url, "_blank")}>
            {link.icon}
            <span className="sr-only">Share on {link.name}</span>
          </Button>
        ))}

        <Button variant="outline" size="icon" onClick={copyToClipboard}>
          <LinkIcon className="h-4 w-4" />
          <span className="sr-only">Copy link</span>
        </Button>
      </div>
    </div>
  )
}
