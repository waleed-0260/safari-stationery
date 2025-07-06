import TableData from '@/components/admin/products/TableData'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='py-6 px-6'>
  <div className="flex justify-between mb-4">
      <h1 className='text-2xl font-semibold'>Products</h1>
        <Button>Add Product</Button>
      </div>
  <TableData/>
    </div>
  )
}

export default page