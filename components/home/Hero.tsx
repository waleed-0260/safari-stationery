import Image from "next/image"
import Link from "next/link"
import HeroImg from "@/public/images/HeroImg.jpg"
import { Button } from "../ui/button"
export default function Hero() {
  return (
    <section className="relative w-full h-[15rem] sm:h-[25rem] md:h-[35rem] lg:h-[40rem] xl:h-[45rem] 2xl:h-[54rem] 3xl:h-[20rem] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={HeroImg}
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
        quality={100}
      />

      {/* Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight head">
          Stationery to create <br />Toys to celebrate
        </h1>
        {/* <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Discover endless possibilities and transform your ideas into reality with our cutting-edge solutions.
        </p> */}
        <Link
          href="/products"
          className=""
        >
          <Button className="py-4 px-4 cursor-pointer">
          View Products
          </Button>
        </Link>
      </div>
    </section>
  )
}
