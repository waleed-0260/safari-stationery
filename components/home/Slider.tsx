"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import Image from 'next/image';
import casio from "@/public/images/casio.png";
import creta from "@/public/images/creta.png";
import maries from "@/public/images/maries.webp";
import mont from "@/public/images/mont.png";
import piano from "@/public/images/piano.webp";
import uhu from "@/public/images/uhu.webp";

const Slider = () => {
  return (
        <div className='container flex items-center justify-center m-6'>
        <Swiper
        // spaceBetween={50}
        breakpoints={{
          0:{
            slidesPerView: 1,
          },
          480:{
            slidesPerView: 2,
          },
          768:{
            slidesPerView: 3,
          },
          980:{
            slidesPerView: 5,
          }
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        className="lg:w-[1000px] w-[80%] h-[120px]"
      >
        <SwiperSlide>
          <div className="w-[150px] h-[110px]">
            <Image src={casio} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[150px] h-[110px]">
            <Image src={creta} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>  
        <SwiperSlide>
          <div className="w-[150px] h-[110px]">
            <Image src={maries} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[150px] h-[110px]">
            <Image src={mont} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[150px] h-[110px]">
            <Image src={uhu} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[150px] h-[110px]">
            <Image src={piano} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider