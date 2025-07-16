import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { LuBlocks } from "react-icons/lu";
import SingleProducts from '@/components/Products/SingleProducts';
import { GetProductsById } from '@/lib/GetProducts';
// import { GetProductsByCategory } from '@/lib/GetProducts';
import { GetProductsBySubCategory } from '@/lib/GetProducts';
import Products from '@/components/home/Products';
const page = async({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const {id} = await params;
  const data = await GetProductsById(id);

  // console.log("data", data)

    const category = data?.sub_category?.[0] || data?.sub_category; // handles both array and string

  // 3. Fetch related products by category (excluding current one)
  const relatedProducts = category
    ? (await GetProductsBySubCategory(category)).filter((item: any) => item._id !== id)
    : [];

    // console.log("relatedProducts", relatedProducts)

  return (
    <div className='flex flex-col items-center justify-center w-full'>
        <div className='bg-gray-300  w-full flex flex-row justify-center items-center'>
          <div className='container flex flex-row justify-between items-center'>

            <p>Home  Electric Portable Hand Fans  Sanrio Character Handheld - Portable Fan Style 2</p>
            <div className='flex flex-row gap-4'>
                <p><FaChevronLeft className='text-xl'/></p>
                <p><LuBlocks className='text-xl'/></p>
                <p><FaChevronRight className='text-xl'/></p>
            </div>
          </div>
        </div>

        <SingleProducts data={data}/>
        {relatedProducts.length > 0  ? 
        <Products ProductsData={relatedProducts} heading="You may also like it"/> :
        null  
      }
    </div>
  )
}

export default page