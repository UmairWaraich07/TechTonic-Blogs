"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) return

    setLoading(true)

    try {
      // Here you would integrate with your newsletter service
      // For example, using a server action to call Mailchimp, ConvertKit, etc.
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulating API call

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="bg-primary/5 border-none">
      <CardContent className="p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Tech Trends</h2>
          <p className="text-muted-foreground mb-8">
            Join our newsletter and get the latest in tech delivered to your inbox. No spam, just the content you care
            about.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
