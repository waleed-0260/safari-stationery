import Products from '@/components/ProductsPage/Products';
import { GetProductsBySubCategory } from '@/lib/GetProducts';
import React from 'react'
import { FaTag } from 'react-icons/fa';
const page = async({
  params,
}: {
  params: Promise<{ SubCategory: string }>
}) => {
    const {SubCategory} = await params;
    const products = await GetProductsBySubCategory(SubCategory)
const decodedCategory = decodeURIComponent(SubCategory);
const formattedCategory = decodedCategory
  .replace(/-/g, ' ')
  .replace(/\b\w/g, (char) => char.toUpperCase());
  
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='mt-[150px]'></div>
      {products && products.length > 0 ? (
        <>
          <div className="w-full max-w-5xl text-center py-10">
            <div className="flex items-center justify-center gap-2 mb-2 text-purple-600">
              <FaTag className="text-xl" />
              <span className="uppercase tracking-widest text-sm font-semibold">Category</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 heading">
              {formattedCategory}
            </h1>
            <p className="text-gray-500 text-base md:text-lg w-[90%]">
              Explore our finest collection in the <strong>{formattedCategory}</strong> category. Hand-picked and best-quality products for you.
            </p>
          </div>

          <Products ProductsData={products} />
        </>
      ) : (
        <div className="w-full max-w-4xl py-20 text-center text-gray-500 text-xl">
          No products found for the <strong>{formattedCategory}</strong> category.
        </div>
      )}
    </div>
  )
}

export default page