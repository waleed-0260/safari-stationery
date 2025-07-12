import Cart from '@/components/Cart/Cart'
import React from 'react'
import { GetCartProducts } from '@/lib/GetProducts'

const page = async() => {
  const CartProducts = await GetCartProducts();
  return (
    <div><Cart cartProducts={CartProducts[0].items}/></div>
  )
}

export default page