import Products from '@/components/ProductsPage/Products';
import { GetProducts } from '@/lib/GetProducts'
import React from 'react'

const page = async() => {
  const products = await GetProducts();
  return (
    <div className='flex flex-col justify-center items-center w-full '>
      <Products ProductsData={products}/>
    </div>
  )
}

export default page