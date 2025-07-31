"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "./StatusBadge"
import type { Order, OrderStatus } from "./order"
import React from "react"
// Sample data based on your API structure
const sampleOrders: Order[] = [
  {
    _id: "6878293c83e5c4fc2d4f2883",
    userId: "c385fa58-6fd4-4ff4-b0ad-dd4abd45396c",
    shippingDetails: {
      name: "assadsd sdsfsdrf",
      email: "mskmdlkc@mail.com",
      phone: "12321343434",
      address: "Multan, Multan",
      city: "Multan",
      state: "adasd",
      zip: "60000",
    },
    items: [
      {
        productId: "6872e3a7f46f4f9bd0cd2309",
        title: "Cute Princess- Mechanical Pencils",
        sets: [],
        quantity: 6,
        color: "Yellow",
        image: "https://res.cloudinary.com/dek5xdodf/image/upload/v1752359845/products/fu4yhjfu3jln1at0kefl.jpg",
        _id: "687443010f89e8e53324ea58",
      },
      {
        productId: "6874dfd835941806d1814f02",
        title: "Classic Cotton T-Shirt",
        sets: [{ price: 1200, _id: "6874e0e00d0e3edbdacabd8d" }],
        quantity: 6,
        color: "White",
        image: "https://dummyimage.com/400x400/000/fff&text=Tshirt+1",
        _id: "6874e13d0d0e3edbdacabd92",
      },
      {
        productId: "6874dfd835941806d1814f05",
        title: "Running Shoes",
        sets: [{ price: 2700, _id: "6874e7060d0e3edbdacabdd4" }],
        quantity: 5,
        color: "Red",
        image: "https://dummyimage.com/400x400/777/fff&text=Shoes+1",
        _id: "6874e71f0d0e3edbdacabddb",
      },
      {
        productId: "6874dfd835941806d1814f06",
        title: "Smartwatch Series A",
        sets: [{ price: 5800, _id: "6874ecc20d0e3edbdacabe05" }],
        quantity: 13,
        color: "Black",
        image: "https://dummyimage.com/400x400/999/fff&text=Watch+1",
        _id: "6874ed110d0e3edbdacabe0e",
      },
    ],
    totalAmount: 96100,
    status: "pending",
    createdAt: "2025-07-16T22:35:40.678Z",
    updatedAt: "2025-07-16T22:35:40.678Z",
    __v: 0,
  },
  // Add more sample orders for demonstration
  {
    _id: "6878293c83e5c4fc2d4f2884",
    userId: "c385fa58-6fd4-4ff4-b0ad-dd4abd45396d",
    shippingDetails: {
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "555-0123",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    items: [
      {
        productId: "6872e3a7f46f4f9bd0cd2310",
        title: "Premium Notebook Set",
        sets: [{ price: 800, _id: "6874e0e00d0e3edbdacabd8e" }],
        quantity: 3,
        color: "Blue",
        image: "/placeholder.svg?height=100&width=100&text=Notebook",
        _id: "687443010f89e8e53324ea59",
      },
    ],
    totalAmount: 2400,
    status: "in-process",
    createdAt: "2025-07-15T18:20:30.678Z",
    updatedAt: "2025-07-15T18:20:30.678Z",
    __v: 0,
  },
]

export default function AdminOrdersTable({Product}:any) {
  const [orders, setOrders] = useState<Order[]>(Product)
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)

  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus, updatedAt: new Date().toISOString() } : order,
      ),
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount / 100) // Assuming amount is in cents
  }

  const toggleOrderExpansion = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId)
  }

  return (
    <div className="w-full mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Order Management</CardTitle>
          <p className="text-gray-600">Manage customer orders and update delivery status</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-4 font-semibold">Order ID</th>
                  <th className="text-left p-4 font-semibold">Customer</th>
                  <th className="text-left p-4 font-semibold">Items</th>
                  <th className="text-left p-4 font-semibold">Total</th>
                  <th className="text-left p-4 font-semibold">Status</th>
                  <th className="text-left p-4 font-semibold">Date</th>
                  <th className="text-left p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <React.Fragment key={order._id}>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="font-mono text-sm">#{order._id.slice(-8)}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-mono text-sm text-gray-600">{order.userId.slice(0, 8)}...</div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {order.items.length} items
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleOrderExpansion(order._id)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {expandedOrder === order._id ? "Hide" : "View"}
                          </Button>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-semibold">{order.totalAmount.toFixed(0)} PKR</div>
                      </td>
                      <td className="p-4">
                        <StatusBadge status={order.status} />
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-600">{formatDate(order.createdAt)}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          {order.status === "pending" && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateOrderStatus(order._id, "in-process")}
                              className="text-blue-600 border-blue-600 hover:bg-blue-50"
                            >
                              Process
                            </Button>
                          )}
                          {order.status === "in-process" && (
                            <Button
                              size="sm"
                              onClick={() => updateOrderStatus(order._id, "delivered")}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              Delivered
                            </Button>
                          )}
                          {order.status === "delivered" && (
                            <span className="text-green-600 text-sm font-medium">✓ Complete</span>
                          )}
                        </div>
                      </td>
                    </tr>
                    {expandedOrder === order._id && (
                      <tr>
                        <td colSpan={7} className="p-0">
                          <div className="bg-gray-50 p-4 border-t">
                            {/* Shipping Details Section */}
                            <div className="mb-6">
                              <h4 className="font-semibold mb-3 text-gray-800">Shipping Details:</h4>
                              <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <div className="mb-2">
                                      <span className="text-sm font-medium text-gray-600">Name:</span>
                                      <p className="text-gray-900">{order.shippingDetails.name}</p>
                                    </div>
                                    <div className="mb-2">
                                      <span className="text-sm font-medium text-gray-600">Email:</span>
                                      <p className="text-gray-900">{order.shippingDetails.email}</p>
                                    </div>
                                    <div className="mb-2">
                                      <span className="text-sm font-medium text-gray-600">Phone:</span>
                                      <p className="text-gray-900">{order.shippingDetails.phone}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="mb-2">
                                      <span className="text-sm font-medium text-gray-600">Address:</span>
                                      <p className="text-gray-900">{order.shippingDetails.address}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <span className="text-sm font-medium text-gray-600">City:</span>
                                        <p className="text-gray-900">{order.shippingDetails.city}</p>
                                      </div>
                                      <div>
                                        <span className="text-sm font-medium text-gray-600">State:</span>
                                        <p className="text-gray-900">{order.shippingDetails.state}</p>
                                      </div>
                                    </div>
                                    <div className="mt-2">
                                      <span className="text-sm font-medium text-gray-600">ZIP Code:</span>
                                      <p className="text-gray-900">{order.shippingDetails.zip}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Order Items Section */}
                            <h4 className="font-semibold mb-3 text-gray-800">Order Items:</h4>
                            <div className="grid gap-3">
                              {order.items.map((item) => (
                                <div
                                  key={item._id}
                                  className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm"
                                >
                                  <div className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-100">
                                    <Image
                                      src={item.image || "/placeholder.svg"}
                                      alt={item.title}
                                      fill
                                      className="object-cover"
                                      sizes="64px"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="font-medium">{item.title}</h5>
                                    <div className="text-sm text-gray-600 mt-1">
                                      <span>Color: {item.color}</span>
                                      <span className="mx-2">•</span>
                                      <span>Qty: {item.quantity}</span>
                                      {item.sets.length > 0 && (
                                        <>
                                          <span className="mx-2">•</span>
                                          <span>Price: {item.sets[0].price.toFixed(0)}</span>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="font-semibold">
                                      {item.sets.length > 0
                                        ? (item.sets[0].price * item.quantity).toFixed(0)
                                        : "Price TBD"} PKR
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
