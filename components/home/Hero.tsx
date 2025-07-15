import React from 'react';
import Image from 'next/image';
import HeroImg from "@/public/images/HeroImg.jpeg";
import { Button } from '../ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="w-full h-[600px] relative flex items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src={HeroImg}
        alt="Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}

      {/* Centered Text */}
      <div className="absolute text-center z-10">
        <h1 className="md:text-6xl text-4xl font-bold mb-4 head ">Stationery to create <br /> Toys to celebrate</h1>
        {/* <p className="text-lg">We provide amazing solutions for your business</p> */}
        <Link href={"/products"}>
        <Button className='cursor-pointer py-5 px-6'>View Products</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
