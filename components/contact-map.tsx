"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin } from "lucide-react"

export default function ContactMap() {
  const [activeTab, setActiveTab] = useState("map")

  const locations = [
    {
      id: "sf",
      name: "San Francisco",
      address: "123 Tech Street, San Francisco, CA 94107",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948922!3d37.75781499602919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652813756615!5m2!1sen!2sus",
    },
    {
      id: "nyc",
      name: "New York",
      address: "456 Digital Avenue, New York, NY 10001",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1652813756615!5m2!1sen!2sus",
    },
  ]

  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4 bg-muted/30">
          <div className="flex items-center mb-2">
            <MapPin className="h-5 w-5 text-primary mr-2" />
            <h2 className="text-xl font-semibold">Our Locations</h2>
          </div>
          <Tabs defaultValue="sf" className="w-full">
            <TabsList className="mb-4">
              {locations.map((location) => (
                <TabsTrigger key={location.id} value={location.id}>
                  {location.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {locations.map((location) => (
              <TabsContent key={location.id} value={location.id} className="m-0">
                <div className="mb-4">
                  <p className="text-muted-foreground">{location.address}</p>
                </div>
                <div className="aspect-video w-full rounded-md overflow-hidden">
                  <iframe
                    src={location.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.name} Office Location`}
                  ></iframe>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}
