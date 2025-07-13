import ProductsAdminTable from '@/components/admin/products/ProductsAdminTable'
import { GetProducts } from '@/lib/GetProducts'
import React from 'react'

const page = async() => {
  const products = await GetProducts();
  return (
    <div>
      <ProductsAdminTable Products={products}/>
    </div>
  )
}

export default page