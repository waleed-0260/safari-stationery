"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useCartStore } from "@/hooks/useCartStore";
import { getGuestId } from "@/hooks/getGuestId";
import parse from "html-react-parser"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";

const SingleProducts = ({ data }: any) => {
  // console.log("seskao;fkdf", data)
  const guestId = getGuestId();
  // console.log("guestidd", guestId)
  const addToCart = useCartStore((state) => state.addToCart);
  const saveCartToBackend = useCartStore((state) => state.saveCartToBackend);
    const loadCartFromBackend = useCartStore((state) => state.loadCartFromBackend); // ✅ Load from backend
  const cartItems = useCartStore((state) => state.cart); // ✅ get current cart items
  const router = useRouter();

  const [selectedColor, setSelectedColor] = useState<string>(data?.colors?.[0] || "");
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    useEffect(() => {
    if (guestId) {
      loadCartFromBackend(); // or just loadCartFromBackend() if guestId is internal
    }
  }, [guestId, loadCartFromBackend]);

const handleAddToCart = () => {
    const alreadyInCart = cartItems?.some(
      (item: any) => data.productId === data?._id && data.color === selectedColor
    );

    if (alreadyInCart) {
      toast.error("Product is already in the cart!");
      return;
    }

  // ✅ Add if not in cart
  addToCart({
    productId: data?._id,
    title: data?.title,
    quantity,
    color: selectedColor,
    stock: data?.stock,
    image: data?.images[0],
    sets: data?.sets,
  });

  saveCartToBackend(); // Optional: sync with backend
  toast.success("Product added to cart!");
};

const handleBuyNow = async()=>{
addToCart({
                      productId: data._id,
                      title: data.title,
                      quantity: quantity,
                      stock: data.stock,
                      image: data.images[0],
                      sets: data.sets,
                    });
        
            // 2. Save to backend
           await saveCartToBackend();
        
            // 3. Show toast
            toast.success(`${data.title} added to cart!`);
        
            // 4. Redirect to checkout
            router.push(`/checkout`);
}

    const [selectedImage, setSelectedImage] = useState(data?.images[0])
  const [selectedSetIndex, setSelectedSetIndex] = useState(0);
    const sets = data?.sets;

  return (
    <div className="container flex md:flex-row flex-col justify-between items-start py-8" data-aos="fade-up">
      <div className="flex flex-col-reverse md:w-[50%] gap-4" >
              <div className={`md:flex md:flex-row grid grid-cols-4 gap-2 md:w-[15%]`}>
        {data?.images.map((img:any, index:any) => (
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
          <img alt="Product" src={selectedImage}/>
        </Zoom>
      </div>

      <div className="flex flex-col gap-4 md:w-[40%] w-full md:mt-0 mt-3" >
        {/* <p className="text-sm">{data?.title}</p> */}
        <p className="text-4xl font-semibold heading">{data?.title}</p>

        <div className="flex flex-row gap-4">
          {/* {data?.sets[0].compare_at_price ?
          <p className="line-through text-gray-500">Rs {data?.compare_at_price}</p>
          :null}
          <p className="text-red-500">Rs {data?.sets}</p> */}
              <div className="mt-4">
      {/* If only 1 set */}
      {sets?.length === 1 ? (
        <p className="text-red-500 text-lg font-semibold">
          Rs {sets[0]?.price} <br />
          {sets[0].compare_at_price > 0   && (
            <span className="line-through text-gray-400 text-sm ml-2">
              Rs {sets[0].compare_at_price}
            </span>
          )}
        </p>
      ) : (
        sets?.length > 1 && (
          <>
            {/* Set Buttons */}
            <div className="flex flex-wrap gap-2 mb-3">
              {sets?.map((item: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedSetIndex(index)}
                  className={`border px-6 py-2 rounded-full text-sm cursor-pointer ${
                    selectedSetIndex === index
                      ? "bg-black text-white"
                      : "text-gray-800"
                  }`}
                >
                  {data.set} - {data.size}
                </button>
              ))}
            </div>

            {/* Price Display */}
            <p className="text-red-500 text-lg font-semibold">
              Rs {sets[selectedSetIndex].price}
              {sets[selectedSetIndex].compare_at_price && (
                <span className="line-through text-gray-400 text-sm ml-2">
                  Rs {sets[selectedSetIndex].compare_at_price}
                </span>
              )}
            </p>
          </>
        )
      )}
    </div>
        </div>

                {/* Quantity Selector */}
        <div>
          <p className="text-sm">Quantity</p>
          <div className="border-2 border-black rounded-full h-[40px] w-[100px] flex items-center justify-around cursor-pointer">
            <button onClick={decreaseQty} className="cursor-pointer">-</button>
            <p>{quantity}</p>
            <button onClick={increaseQty} className="cursor-pointer">+</button>
          </div>
        </div>

        {/* Color Selector */}
        {data?.colors && data?.colors.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {data?.colors.map((color: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`border px-6 py-2 rounded-full text-sm cursor-pointer ${
                  selectedColor === color ? "bg-black text-white" : "text-gray-800"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        )}

        {/* Buttons */}
        <Button variant="outline" onClick={handleAddToCart} className="add-to-cart">
          Add To Cart
        </Button>
        <Button onClick={handleBuyNow} className="buy-now">
          Buy Now
        </Button>

        <div className="text">{parse(data?.description)}</div>


      </div>
       <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              // pauseOnHovers
              draggable
              theme="colored"
            />
    </div>
  );
};

export default SingleProducts;
