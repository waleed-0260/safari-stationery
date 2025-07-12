"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useCartStore } from "@/hooks/useCartStore";

const SingleProducts = ({ data }: any) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const saveCartToBackend = useCartStore((state) => state.saveCartToBackend);

  const [selectedColor, setSelectedColor] = useState<string>(data.colors?.[0] || "");
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({
      productId: data._id,
      title: data.title,
      price: data.price,
      quantity,
      color: selectedColor,
      stock: data.stock,
      image: data.images[0],
    });

    saveCartToBackend(); // Optional: sync with backend
  };

    const [selectedImage, setSelectedImage] = useState(data.images[0])


  return (
    <div className="container flex flex-row justify-between items-start py-8">
      <div className="flex flex-row w-[50%] gap-4">
              <div className="flex flex-col gap-2 w-[15%]">
        {data.images.map((img:any, index:any) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`w-full h-20 object-cover rounded-md cursor-pointer border ${
              selectedImage === img ? 'border-blue-600' : 'border-gray-300'
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
        <Zoom>
          <img alt="Product" src={selectedImage} width="500" />
        </Zoom>
      </div>

      <div className="flex flex-col gap-4 w-[40%]">
        {/* <p className="text-sm">{data.title}</p> */}
        <p className="text-4xl font-semibold">{data.title}</p>

        <div className="flex flex-row gap-4">
          <p className="line-through text-gray-500">Rs {data.compare_at_price}</p>
          <p className="text-red-500">Rs {data.price}</p>
        </div>

        <p>{data.description}</p>

        {/* Quantity Selector */}
        <div>
          <p className="text-sm">Quantity</p>
          <div className="border-2 h-[50px] w-[120px] flex items-center justify-around">
            <button onClick={decreaseQty}>-</button>
            <p>{quantity}</p>
            <button onClick={increaseQty}>+</button>
          </div>
        </div>

        {/* Color Selector */}
        {data.colors && data.colors.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {data.colors.map((color: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`border px-3 py-1 rounded-md text-sm ${
                  selectedColor === color ? "bg-black text-white" : "text-gray-800"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        )}

        {/* Buttons */}
        <Button variant="outline" onClick={handleAddToCart}>
          Add To Cart
        </Button>
        <Button variant="default">Buy Now</Button>
      </div>
    </div>
  );
};

export default SingleProducts;
