import AboutComponent from '@/components/about/AboutComponent'
// import Updates from '@/components/home/Updates'
import React from 'react'

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full">
      <div className='mt-[100px]'></div>
      <AboutComponent/>
    </div>
  )
}

export default page