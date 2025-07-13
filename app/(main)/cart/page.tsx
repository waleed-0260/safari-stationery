import Cart from '@/components/Cart/Cart'
import React from 'react'
import { GetCartProducts } from '@/lib/GetProducts'

const page = async() => {
  const CartProducts = await GetCartProducts();
    // const items = CartProducts?.[0]?.items || []

  return (
    <div><Cart allCartData={CartProducts || []}/></div>
  )
}

export default page