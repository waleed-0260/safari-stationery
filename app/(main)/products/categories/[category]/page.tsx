import Products from '@/components/ProductsPage/Products';
import { GetProductsByCategory } from '@/lib/GetProducts';
import React from 'react'

const page = async({
  params,
}: {
  params: Promise<{ category: string }>
}) => {
    const {category} = await params;
    const products = await GetProductsByCategory(category);
    // console.log("category", products)
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <Products ProductsData={products}/>
    </div>
  )
}

export default page