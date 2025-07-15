import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import HeroImg from "@/public/images/HeroImg.jpeg";

const Hero = () => {
  return (
    <div
      className="w-full h-[20rem] md:h-[30rem] bg-no-repeat bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(/images/HeroImg.jpeg)`,
      }}
    >
      {/* Optional dark overlay for better contrast */}
      {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}

      <div className="text-center z-10 px-4">
        <h1 className="md:text-6xl text-4xl font-bold mb-4">
          Stationery to create <br /> Toys to celebrate
        </h1>
        <Link href={"/products"}>
          <Button className='cursor-pointer py-5 px-6'>View Products</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
