import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { LuBlocks } from "react-icons/lu";
import SingleProducts from '@/components/Products/SingleProducts';
import { GetProductsById } from '@/lib/GetProducts';
import { GetProductsByCategory } from '@/lib/GetProducts';
import Products from '@/components/home/Products';
const page = async({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const {id} = await params;
  const data = await GetProductsById(id);

  // console.log("data", data)

    const category = data?.category?.[0] || data?.category; // handles both array and string

  // 3. Fetch related products by category (excluding current one)
  const relatedProducts = category
    ? (await GetProductsByCategory(category)).filter((item: any) => item._id !== id)
    : [];

    // console.log("relatedProducts", relatedProducts)

  return (
    <div>
        <div className='bg-gray-300 flex flex-row justify-between items-center py-5 w-full'>
            <p>Home  Electric Portable Hand Fans  Sanrio Character Handheld - Portable Fan Style 2</p>
            <div>
                <p><FaChevronLeft/></p>
                <p><LuBlocks/></p>
                <p><FaChevronRight/></p>
            </div>
        </div>

        <SingleProducts data={data}/>
        <Products ProductsData={relatedProducts}/>
    </div>
  )
}

export default page