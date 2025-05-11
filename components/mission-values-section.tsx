import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function MissionValuesSection() {
  const values = [
    {
      title: "Accuracy",
      description: "We prioritize factual correctness and thorough research in all our content.",
    },
    {
      title: "Accessibility",
      description: "We believe tech knowledge should be accessible to everyone, regardless of background.",
    },
    {
      title: "Innovation",
      description: "We constantly explore new formats and approaches to deliver better content.",
    },
    {
      title: "Community",
      description: "We foster an inclusive environment where diverse perspectives are valued.",
    },
    {
      title: "Education",
      description: "We're committed to helping our readers learn and grow their technical skills.",
    },
    {
      title: "Integrity",
      description: "We maintain editorial independence and transparency in all our operations.",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission & Values</h2>

          <div className="bg-primary/5 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg">
              At TechTonic, our mission is to demystify technology and empower individuals through accessible, accurate,
              and actionable content. We strive to be the bridge between complex technical concepts and practical
              application, helping our readers navigate the rapidly evolving tech landscape with confidence.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-6">Our Core Values</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{value.title}</h4>
                      <p className="text-muted-foreground mt-1">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
