import UpdateProducts from '@/components/admin/products/UpdateProducts';
import { GetProductsById } from '@/lib/GetProducts';
import React from 'react'

const page = async({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
    const {id} = await params;
    const productData = await GetProductsById(id);
  return (
    <div>
        <UpdateProducts data={productData}/>
    </div>
  )
}

export default page