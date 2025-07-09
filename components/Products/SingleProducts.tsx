"use client"
import React from 'react'
import { Button } from '../ui/button'
import InnerImageZoom from 'react-inner-image-zoom'
// import 'react-inner-image-zoom/lib/styles.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const SingleProducts = ({data}:any) => {
  return (
    <div className='w-[90%] flex flex-row justify-around items-start py-8'>
        <div className='w-[45%]'>
            {/* <img src="https://www.thepaperworm.com/cdn/shop/files/3PcsRainbowTiePastelColoredNotebook.webp?v=1714498273&width=823" alt="" /> */}
{/* <InnerImageZoom
  src="https://www.thepaperworm.com/cdn/shop/files/3PcsRainbowTiePastelColoredNotebook.webp?v=1714498273&width=823"
  zoomSrc="https://www.thepaperworm.com/cdn/shop/files/3PcsRainbowTiePastelColoredNotebook.webp?v=1714498273&width=823" // Optional
  zoomType="hover"
/> */}
<Zoom>
  <img alt="Product" src={data.images[0]} width="500" />
</Zoom>
        </div>
        <div className='flex flex-col gap-4 w-[40%]'>
            <p className='text-sm'>{data.title}</p>
            <p className='text-4xl font-semibold'>{data.description}</p>
            <div className='flex flex-row gap-4'>
                <p className="line-through text-gray-500">Rs {data.compare_at_price}</p>
                <p className="text-red-500">Rs {data.price}</p>
                <p className=' bg-black text-white py-1 px-3 rounded-full '>Sale</p>
            </div>
            <p>{data.description}</p>
            <p className='text-sm'>Quantity</p>
            <div className='border-2 h-[50px] w-[120px] flex items-center justify-around'>
                <p>-</p>
                <p>1</p>
                <p>+</p>
            </div>
            <Button variant={"outline"}>Add To Cart</Button>
            <Button variant={"default"}>Buy Now</Button>
        </div>
    </div>  )
}

export default SingleProducts