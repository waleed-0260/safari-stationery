import Image from "next/image"
import Link from "next/link"
import HeroImg from "@/public/images/HeroImg.jpg"
export default function Hero() {
  return (
    <section className="relative w-full h-screen lg:h-[41rem] xl:h-[50rem]  flex items-center justify-center overflow-hidden">
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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Welcome to Our Amazing Platform
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Discover endless possibilities and transform your ideas into reality with our cutting-edge solutions.
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
