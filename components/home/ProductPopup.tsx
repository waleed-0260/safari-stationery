"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { GetProductsById } from '@/lib/GetProducts'

const ProductPopup = ({ id }: { id: string }) => {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await GetProductsById(id)
        setProduct(data)
      } catch (err) {
        setError("Failed to fetch product.")
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchProduct()
  }, [id])

  if (loading) return <p className="p-4">Loading...</p>
  if (error || !product) return <p className="p-4 text-red-500">{error || "Product not found"}</p>

  return (
    <div className="flex h-full">
      {/* Left Image Section */}
      <div className="flex-none w-1/2 h-full relative">
        <Image
          src={product.images?.[0] || "/placeholder.png"}
          alt={product.title || "Product Image"}
          fill
          className="object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="flex-auto bg-white p-6 overflow-y-auto">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          <p className="text-muted-foreground text-sm">{product.description}</p>
        </div>

        {/* Prices Row */}
        <div className="flex items-center gap-4 mb-6">
          {product.compare_at_price && (
            <span className="line-through text-gray-500">
              Rs {product.compare_at_price} PKR
            </span>
          )}
          <span className="text-red-600 font-bold text-lg">
            Rs {product.price} PKR
          </span>
        </div>

        {/* Action Buttons Column */}
        <div className="flex flex-col gap-3 sticky bottom-0 pt-4 bg-gradient-to-t from-white">
          <button className="w-full bg-green-600 text-white py-3 rounded-md text-sm hover:bg-green-700 transition">
            Add to Cart
          </button>
          <button className="w-full border border-gray-300 py-3 rounded-md text-sm hover:bg-gray-100 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPopup
