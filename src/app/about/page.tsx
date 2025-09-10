import ThreeDCarousel, { ThreeDCarouselItem } from '@/components/lightswind/3d-carousel'
import React from 'react'

const productImages = [
  { src: "/Hero/Banner.jpg", title: "Printed Label" },
  { src: "/Manufacturing Unit/Manufacturing unit 2.jpg", title: "Woven Label" },
  { src: "/Manufacturing Unit/Manufacturing unit 5.jpg", title: "Hang Tag" },
  { src: "/Manufacturing Unit/Manufacturing unit 9.jpg", title: "Poly" },
  { src: "/Manufacturing Unit/images (1).jpeg", title: "Box" },
]

// 🔥 Convert productImages to ThreeDCarouselItem[]
const carouselItems: ThreeDCarouselItem[] = productImages.map((item, index) => ({
  id: index,
  title: item.title,
  brand: "Lightswind", // Default brand name for all
  description: `Discover our high-quality ${item.title.toLowerCase()} solutions tailored for your business needs.`,
  tags: [item.title, "packaging", "design"], // Add some relevant tags
  imageUrl: item.src,
  link: `/products/${item.title.toLowerCase().replace(/\s+/g, "-")}` // e.g. /products/printed-label
}))

const About = () => {
  return (
    <div>
      <ThreeDCarousel items={carouselItems} />
    </div>
  )
}

export default About
