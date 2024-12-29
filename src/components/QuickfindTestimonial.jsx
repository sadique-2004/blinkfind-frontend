'use client'

import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from 'lucide-react'


const testimonials= [
  {
    name: "John Doe",
    role: "Student",
    feedback: "Recovered my lost iPhone easily within 24 hours. QuickFind is a lifesaver!",
    avatar: "/lostFound/lf1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Professional",
    feedback: "Found my AirPods within 48 hours. The community support is amazing!",
    avatar: "/lostFound/lf2.jpg",
  },
  {
    name: "Alex Johnson",
    role: "Traveler",
    feedback: "Lost my passport at the airport. QuickFind helped me locate it quickly!",
    avatar: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emily Brown",
    role: "Teacher",
    feedback: "QuickFind reunited me with my lost family heirloom. Eternally grateful!",
    avatar: "/placeholder.svg?height=400&width=400",
  }
]

const TestimonialCard = ({ testimonial }) => (
  <Card className="bg-white h-full flex flex-col">
    <CardContent className="p-6 flex flex-col justify-between h-full">
      <div>
        <Quote className="w-8 h-8 text-[#51B504] mb-4" />
        <p className="text-gray-600 mb-6 flex-grow">{testimonial.feedback}</p>
      </div>
      <div className="flex items-center">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold text-[#0A3357]">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

const SimplifiedTestimonialCarousel= () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#f7fafc] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0A3357]">What Our Users Say</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover how QuickFind has helped people recover their lost items and reconnect with what matters most.
        </p>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-full">
                <div className="p-1 h-full">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default SimplifiedTestimonialCarousel

