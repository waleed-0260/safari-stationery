import Products from '@/components/ProductsPage/Products';
import { GetProductsBySubCategory } from '@/lib/GetProducts';
import React from 'react'

const page = async({
  params,
}: {
  params: Promise<{ SubCategory: string }>
}) => {
    const {SubCategory} = await params;
    const products = await GetProductsBySubCategory(SubCategory)
    // console.log("subcategory", products)
  return (
   <div className='flex flex-col justify-center items-center w-full'>
      <Products ProductsData={products}/>
    </div>
  )
}

export default page