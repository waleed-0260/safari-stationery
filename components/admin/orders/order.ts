export interface OrderItem {
  productId: string
  title: string
  sets: Array<{
    price: number
    _id: string
  }>
  quantity: number
  color: string
  image: string
  _id: string
}

export interface ShippingDetails {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
}

export interface Order {
  _id: string
  userId: string
  items: OrderItem[]
  shippingDetails: ShippingDetails
  totalAmount: number
  status: "pending" | "in-process" | "delivered" | "cancelled"
  createdAt: string
  updatedAt: string
  __v: number
}

export type OrderStatus = "pending" | "in-process" | "delivered" | "cancelled"
