import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { BsCash } from "react-icons/bs";

const Updates = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full container'>
      <p className='font-bold text-2xl heading'>Premium Quality Statinery Items in Pakistan</p>
      <p className='w-[90%] text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem saepe, quasi corrupti accusamus maiores impedit architecto a laudantium magni assumenda voluptas, harum quibusdam unde iusto at? Et pariatur labore aspernatur odio temporibus quidem alias, facilis totam hic obcaecati eius aliquid asperiores in non quasi aliquam maxime at adipisci placeat minus voluptates illo iure iusto id! Earum quia voluptas eligendi, fugiat minus, dolorum nam amet praesentium hic excepturi reiciendis a! Eum voluptatibus dolorem pariatur laborum quisquam, labore totam modi dolores placeat quos aspernatur consequuntur veritatis assumenda. Ratione qui quam neque voluptate excepturi accusamus nulla illum voluptatem sint! Quod ipsam pariatur officia.</p>
    <div className='flex md:flex-row flex-col items-center justify-between container'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-2xl'><CiDeliveryTruck className="text-5xl"/></p>
            <p className='font-bold'>Free Shipping</p>
            <p className='text-gray-400'>On orders abover 2000 Rs</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-2xl'><CiMedal className="text-5xl"/></p>
            <p className='font-bold'>Super Qualty Friendly budget</p>
            {/* <p>On orders abover 2000 Rs</p> */}
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-2xl'><BsCash className="text-5xl"/></p>
            <p className='font-bold'>Cash on delivery</p>
            <p className='text-gray-400'>Upto 2-5 delivery days</p>
        </div>
    </div>
    </div>
  )
}

export default Updates