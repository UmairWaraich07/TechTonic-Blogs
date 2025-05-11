"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactFaq() {
  const faqs = [
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer:
        "We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate this in your message subject, and we'll do our best to prioritize your request.",
    },
    {
      question: "Can I submit a guest post to TechTonic?",
      answer:
        "Yes! We welcome guest contributions from tech experts and enthusiasts. Please use the contact form and select 'Partnership' as the subject. Include your proposed topic, a brief outline, and any previous writing samples if available.",
    },
    {
      question: "Do you offer advertising opportunities?",
      answer:
        "We offer various advertising options for brands that align with our audience's interests. Please reach out with details about your company and advertising goals, and our team will provide you with our media kit and pricing information.",
    },
    {
      question: "How can I report a technical issue with the website?",
      answer:
        "If you encounter any technical issues while using our website, please use the contact form and select 'Support' as the subject. Include details such as the device and browser you're using, along with a description of the problem and any error messages you received.",
    },
    {
      question: "Can I request coverage of a specific tech topic or event?",
      answer:
        "We value input from our readers. If there's a specific topic, product, or event you'd like us to cover, please let us know through the contact form. Our editorial team reviews all suggestions and considers them for future content.",
    },
    {
      question: "Do you have a newsletter I can subscribe to?",
      answer:
        "Yes! We send out a weekly newsletter featuring our best articles, tech news roundups, and exclusive content. You can subscribe using the form at the bottom of our homepage or by selecting 'Newsletter' in the contact form subject line.",
    },
  ]

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">Find quick answers to common questions about contacting us.</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
