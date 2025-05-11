import Image from "next/image"
import { getAboutPage } from "@/lib/sanity-utils"
import { PortableText } from "@portabletext/react"
import MissionValuesSection from "@/components/mission-values-section"

export const metadata = {
  title: "About TechTonic | Modern Tech Blog",
  description: "Learn about TechTonic's mission and the team behind the tech blog",
}

export default async function AboutPage() {
  // Fetch about page data with fallback
  const aboutData = (await getAboutPage()) || {
    content: [],
    mainImage: "/placeholder.svg?height=600&width=1200",
    team: [],
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About TechTonic</h1>

      <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden">
        <Image
          src={aboutData.mainImage || "/placeholder.svg?height=600&width=1200"}
          alt="TechTonic Team"
          fill
          className="object-cover"
        />
      </div>

      {aboutData.content && aboutData.content.length > 0 ? (
        <div className="prose dark:prose-invert max-w-none mb-12">
          <PortableText value={aboutData.content} />
        </div>
      ) : (
        <div className="prose dark:prose-invert max-w-none mb-12">
          <p>
            TechTonic is a modern tech blog dedicated to bringing you the latest insights, tutorials, and news from the
            world of technology. Our mission is to make complex tech topics accessible to everyone, from beginners to
            experts.
          </p>
          <p>
            We cover a wide range of topics including artificial intelligence, web development, programming languages,
            gadgets, and more. Our team of experienced writers and developers work hard to create high-quality content
            that helps you stay ahead in the fast-paced tech industry.
          </p>
        </div>
      )}

      <MissionValuesSection />

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        {aboutData.team && aboutData.team.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.team.map((member) => (
              <div key={member._id} className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.image || "/placeholder.svg?height=128&width=128"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fallback team members */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=128&width=128" alt="John Doe" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-muted-foreground">Founder & Editor</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=128&width=128" alt="Jane Smith" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-muted-foreground">Senior Writer</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=128&width=128" alt="Mike Johnson" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-muted-foreground">UX Designer</p>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
