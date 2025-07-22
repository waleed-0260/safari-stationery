import React from 'react'
import { FaShippingFast, FaHeadset, FaLock, FaUndoAlt } from "react-icons/fa";


const Updates = () => {
  return (
//     <div className='flex flex-col items-center justify-center w-full container'>
//       <p className='font-bold text-2xl heading'>Premium Quality Statinery Items in Pakistan</p>
//       <p className='w-[90%] text-center'>Welcome to Paper N Play — your go-to space for stationery to create and toys to celebrate.
// We’re a brand built for dreamers, doodlers, and gift-givers — especially students and teens who love cute, colorful things that spark joy. From pretty pens to plushy toys, our products are designed to brighten your desk and your day.
// <br />
// At Paper N Play, we believe that everyday essentials should be fun, functional, and affordable. That’s why we curate adorable, high-quality stationery and playful little surprises — all delivered right to your doorstep.</p>
//     <div className='flex md:flex-row flex-col items-center justify-between container'>
//         <div className='flex flex-col items-center justify-center'>
//             <p className='text-2xl'><CiDeliveryTruck className="text-5xl"/></p>
//             <p className='font-bold'>Free Shipping</p>
//             <p className='text-gray-400'>On orders abover 1000 Rs</p>
//         </div>
//         <div className='flex flex-col items-center justify-center'>
//             <p className='text-2xl'><CiMedal className="text-5xl"/></p>
//             <p className='font-bold'>Super Qualty Friendly budget</p>
//             {/* <p>On orders abover 2000 Rs</p> */}
//         </div>
//         <div className='flex flex-col items-center justify-center'>
//             <p className='text-2xl'><BsCash className="text-5xl"/></p>
//             <p className='font-bold'>Cash on delivery</p>
//             <p className='text-gray-400'>Upto 2-5 delivery days</p>
//         </div>
//     </div>
//     </div>
  // {/* Satisfied or refunded */}
  <div className='grid grid-cols-2 gap-4 container w-[70%]'>
  <div className="flex items-start gap-4">
    <FaShippingFast className="text-2xl text-gray-700" />
    <div>
      <h4 className="font-semibold text-gray-900">Free Shipping</h4>
      <p className="text-sm text-gray-600">Get free shipping near Bahria Town Lahore or on order above Rs 1000 PKR</p>
    </div>
  </div>    
  <div className="flex items-start gap-4">
    <FaUndoAlt className="text-2xl text-gray-700" />
    <div>
      <h4 className="font-semibold text-gray-900">Satisfied or refunded</h4>
      <p className="text-sm text-gray-600">Get discount when you subscribe to our newsletter</p>
    </div>
  </div>

  {/* Top-notch support */}
  <div className="flex items-start gap-4">
    <FaHeadset className="text-2xl text-gray-700" />
    <div>
      <h4 className="font-semibold text-gray-900">Top-notch support</h4>
      <p className="text-sm text-gray-600">Our support is available 24/7</p>
    </div>
  </div>

  {/* Secure payments */}
  <div className="flex items-start gap-4">
    <FaLock className="text-2xl text-gray-700" />
    <div>
      <h4 className="font-semibold text-gray-900">Secure payments</h4>
      <p className="text-sm text-gray-600">Your payment information is processed securely</p>
    </div>
  </div>
</div>

  )
}

export default Updates