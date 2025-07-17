"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import { getGuestId } from "@/hooks/getGuestId"
import { useCartStore } from "@/hooks/useCartStore"
import { useMemo } from "react"
import Link from "next/link"
import { UpdateCartItemByUserId } from "@/lib/GetProducts"
interface CartItem {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  quantity: number
  color?: string
  size?: string
  stock: boolean
}

export default function Cart({allCartData}:any) {
  // console.log("allcartdata", allCartData)
  const [cartItems, setCartItems] = useState<any[]>(allCartData.items)

const guestId = getGuestId();
// console.log("guesitd",guestId)
const updateQuantity = async (productId: string, quantity: number) => {
  if (!guestId) return;

  // Prevent quantity from going below 1
  const safeQuantity = Math.max(quantity, 1);
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.productId === productId
        ? { ...item, quantity: safeQuantity }
        : item
    )
  );
   await UpdateCartItemByUserId(guestId, {
    productId,
    quantity: safeQuantity,
  });
};


  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

    const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = item.sets?.[0]?.price || 0; // fallback if sets or price is missing
      return total + price * item.quantity;
    }, 0);
  }, [cartItems]);
  const shipping = subtotal > 2000 ? 0 : 100
  // const tax = subtotal * 0.08
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some items to get started</p>
            <Button>Continue Shopping</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="heading">Shopping Cart</h1>
            <p className="text-gray-600">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item._id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      {!item.stock && (
                        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-medium">Out of Stock</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{item.title}</h3>
                          <div className="flex gap-2 mt-1">
                            {item.color && (
                              <Badge variant="secondary" className="text-xs">
                                {item.color}
                              </Badge>
                            )}
                            {item.sets.size && (
                              <Badge variant="secondary" className="text-xs">
                                Size {item.sets.size}
                              </Badge>
                            )}
                            {!item.stock && (
                              <Badge variant="destructive" className="text-xs">
                                Out of Stock
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item._id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-lg">{item?.sets[0]?.price?.toFixed(2)} PKR</span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{item.originalPrice.toFixed(2)}</span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 bg-transparent"
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            disabled={item.quantity <= 1 || !item.stock}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            // onChange={(e) => updateQuantity(item., Nmber.parseInt(e.target.value) || 1)}
                           onChange={(e) => {
  const value = parseInt(e.target.value, 10);
  updateQuantity(item.productId, isNaN(value) || value < 1 ? 1 : value);
}}

                            className="w-16 text-center"
                            min="1"
                            disabled={!item.stock}
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 bg-transparent"
                            onClick={() => updateQuantity(item.productId, item.quantity+ 1)}
                            disabled={!item.stock}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className={shipping === 0 ? "text-green-600" : ""}>
                      {shipping === 0 ? "FREE" : `${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>{tax.toFixed(2)}</span>
                  </div> */}
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>{total.toFixed(2)}</span>
                  </div>
                </div>

                {shipping > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-blue-800">Add {(50 - subtotal).toFixed(2)} more for free shipping!</p>
                  </div>
                )}

                <div className="space-y-3">
                  <Link href={"/checkout"}>
                  <Button className="w-full cursor-pointer" size="lg">
                    Proceed to Checkout
                  </Button>
                  </Link>
                  <Link href={"/products"}>
                  <Button variant="outline" className="w-full bg-transparent cursor-pointer">
                    Continue Shopping
                  </Button>
                  </Link>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">Secure checkout powered by Stripe</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
