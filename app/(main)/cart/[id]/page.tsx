import { GetCartById } from '@/lib/GetProducts';
import React from 'react'
import Cart from '@/components/Cart/Cart';
const page = async({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
    const {id} = await params;
    const cartProducts = await GetCartById(id);
    // console.log("getting cart o page", cartProducts)
  return (
    <div><div className='mt-[140px]'></div><Cart allCartData={cartProducts || []}/></div>
  )
}

export default page