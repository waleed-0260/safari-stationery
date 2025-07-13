import ProductsAdminTable from '@/components/admin/products/ProductsAdminTable'
import { GetProducts } from '@/lib/GetProducts'
import React from 'react'

export default async function page() {
  const products = await GetProducts();
  return (
    <div>
<ProductsAdminTable Products={products}/>

    </div>
  )
}
