import AdminOrdersTable from '@/components/admin/orders/AdminsOrderTable'
import { GetCheckOutProducts } from '@/lib/GetProducts'
import React from 'react'

const page = async() => {
  const products = await GetCheckOutProducts()
  // console.log("products", products)
  return (
    <div>
        <AdminOrdersTable Product={products}/>
    </div>
  )
}

export default page