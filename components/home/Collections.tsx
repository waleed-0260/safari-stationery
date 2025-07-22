"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageItem {
  id: number
  name: string
  src: string
  alt: string
}

const imageCollection: ImageItem[] = [
  {
    id: 1,
    name: "Premium Fountain Pen",
    src: "/placeholder.svg?height=400&width=600&text=Fountain+Pen",
    alt: "Premium Fountain Pen",
  },
  {
    id: 2,
    name: "Leather Notebook",
    src: "/placeholder.svg?height=400&width=600&text=Leather+Notebook",
    alt: "Leather Notebook",
  },
  {
    id: 3,
    name: "Colored Pencil Set",
    src: "/placeholder.svg?height=400&width=600&text=Colored+Pencils",
    alt: "Colored Pencil Set",
  },
  {
    id: 4,
    name: "Desk Organizer",
    src: "/placeholder.svg?height=400&width=600&text=Desk+Organizer",
    alt: "Desk Organizer",
  },
  {
    id: 5,
    name: "Sticky Notes Pack",
    src: "/placeholder.svg?height=400&width=600&text=Sticky+Notes",
    alt: "Sticky Notes Pack",
  },
  {
    id: 6,
    name: "Mechanical Pencils",
    src: "/placeholder.svg?height=400&width=600&text=Mechanical+Pencils",
    alt: "Mechanical Pencils",
  },
  {
    id: 7,
    name: "Washi Tape Set",
    src: "/placeholder.svg?height=400&width=600&text=Washi+Tape",
    alt: "Washi Tape Set",
  },
  {
    id: 8,
    name: "Paper Clips & Pins",
    src: "/placeholder.svg?height=400&width=600&text=Paper+Clips",
    alt: "Paper Clips & Pins",
  },
  {
    id: 9,
    name: "Highlighter Set",
    src: "/placeholder.svg?height=400&width=600&text=Highlighters",
    alt: "Highlighter Set",
  },
]

export default function Collection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8  heading">Stationery Collection</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover our curated collection of premium stationery products designed to inspire creativity and enhance
        productivity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {imageCollection.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[3/2]"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image with zoom effect */}
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              fill
              className={`object-cover transition-transform duration-500 ease-in-out ${
                hoveredId === item.id ? "scale-110" : "scale-100"
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Image name overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-lg font-semibold drop-shadow-lg">{item.name}</h3>
            </div>

            {/* Hover overlay effect */}
            <div
              className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                hoveredId === item.id ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

