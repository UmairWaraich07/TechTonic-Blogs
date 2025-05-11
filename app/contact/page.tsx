import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ContactFaq from "@/components/contact-faq"

export const metadata = {
  title: "Contact Us | TechTonic",
  description: "Get in touch with the TechTonic team for inquiries, feedback, or collaboration opportunities.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question, feedback, or want to work with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ContactForm />
          <ContactInfo />
        </div>

        <div className="mt-16">
          <ContactFaq />
        </div>
      </div>
    </div>
  )
}
