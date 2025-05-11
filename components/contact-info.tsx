import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Users, Newspaper } from "lucide-react"
import Link from "next/link"

export default function ContactInfo() {
  const contactMethod = {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email Us",
    description: "Our friendly team is here to help.",
    contact: "hello@techtonic.com",
    action: "mailto:hello@techtonic.com",
  }

  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com/techtonic", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "LinkedIn", url: "https://linkedin.com/company/techtonic", icon: <Users className="h-5 w-5" /> },
    { name: "GitHub", url: "https://github.com/techtonic", icon: <Newspaper className="h-5 w-5" /> },
    { name: "Instagram", url: "https://instagram.com/techtonic", icon: <Mail className="h-5 w-5" /> },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>

      {/* Email Contact Card */}
      <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex flex-col h-full">
            <div className="mb-4">{contactMethod.icon}</div>
            <h3 className="font-semibold mb-1">{contactMethod.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{contactMethod.description}</p>
            <p className="font-medium mb-4">{contactMethod.contact}</p>
            <div className="mt-auto">
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={contactMethod.action}>Send Email</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alternative Contact Methods */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((link, index) => (
            <Button key={index} variant="outline" size="lg" asChild className="justify-start gap-3 h-auto py-4">
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <span className="text-primary">{link.icon}</span>
                <div className="flex flex-col items-start">
                  <span className="font-medium">{link.name}</span>
                  <span className="text-xs text-muted-foreground">Follow us</span>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <Card className="border-none bg-primary/5 mt-8">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Response Time</h3>
          <p className="text-muted-foreground">
            We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please
            indicate this in your message subject.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
