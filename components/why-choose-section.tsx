import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, BookOpen, TrendingUp, Users } from "lucide-react"

export default function WhyChooseSection() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Cutting-Edge Content",
      description:
        "Stay ahead with our timely coverage of emerging technologies and industry trends. We deliver insights on the latest innovations before they go mainstream.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "In-Depth Tutorials",
      description:
        "Learn new skills with our comprehensive, step-by-step tutorials created by industry experts. From beginner guides to advanced techniques.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Data-Driven Analysis",
      description:
        "Make informed decisions with our research-backed analysis of market trends, technology adoption, and future forecasts.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community Insights",
      description:
        "Join a community of tech enthusiasts and professionals. Share ideas, get feedback, and connect with like-minded individuals.",
    },
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose TechTonic</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're more than just another tech blog. Here's what sets us apart and why readers trust us for their tech
          insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="mb-4">{feature.icon}</div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
