"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DeleteProductById } from "@/lib/GetProducts"
import { Edit, Plus, Search, Trash2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ProductsAdminTable({Products}:any){
  const router = useRouter();
  const getStockStatus = (stock: number) => {
    if (stock === 0) return { label: "Out of Stock", variant: "destructive" as const }
    if (stock < 10) return { label: "Low Stock", variant: "secondary" as const }
    return { label: "In Stock", variant: "default" as const }
  }
const [products, setProducts] = useState(Products); // coming from props initially
  const handleEdit = (id:string)=>{
    router.push(`/admin/products/edit/${id}`)
  }
const handleDelete = async (id: string) => {
  const confirmDelete = confirm("Are you sure?");
  if (!confirmDelete) return;

  try {
    await DeleteProductById(id);
    alert("Deleted");
    setProducts(products.filter((p: any) => p._id !== id)); // manually update
  } catch (err) {
    console.error(err);
    alert("Failed");
  }
};
  
  return (
    <div className="w-full mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products Admin</h1>
          <p className="text-muted-foreground">Manage your product inventory and details</p>
        </div>
          <Link href={"/admin/products/add-product"} >
        <Button className="cursor-pointer">
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
          </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Product Inventory</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Title</TableHead>
                  <TableHead className="max-w-[300px]">Description</TableHead>
                  {/* <TableHead className="w-[100px]">Price</TableHead> */}
                  <TableHead className="w-[100px]">Stock</TableHead>
                  <TableHead className="w-[200px]">Categories</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product:any) => {
                  const stockStatus = getStockStatus(product.stock)
                  return (
                    <TableRow key={product._id}>
                      <TableCell className="font-medium">{product.title.slice(0,15)}</TableCell>
                      <TableCell className="max-w-[300px]">
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description.slice(0,20)}...</p>
                      </TableCell>
                      {/* <TableCell className="font-semibold">${product.price?.toFixed(2)}</TableCell> */}
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <span className="font-medium">{product.stock}</span>
                          <Badge variant={stockStatus.variant} className="text-xs">
                            {stockStatus.label}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {product.category.map((category:any, index:number) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" onClick={()=> handleEdit(product._id)} className="cursor-pointer">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="cursor-pointer" onClick={()=>handleDelete(product._id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
