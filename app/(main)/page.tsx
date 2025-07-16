import Boxes from "@/components/home/Boxes";
import CallToEmail from "@/components/home/CallToEmail";
import Collections from "@/components/home/Collections";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
// import SingleProduct from "@/components/home/SingleProduct";
import Image from "next/image";
import { GetProducts } from "@/lib/GetProducts";
import AOSInitializer from "@/components/AOSInitializer";
import Updates from "@/components/home/Updates";
import SingleProducts from "@/components/Products/SingleProducts";

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default async function Home() {
  const allProducts = await GetProducts();
  const randomProduct = getRandomItem(allProducts); // ✅ Just one random product
  // console.log("Random Product:", randomProduct);

  return (
    <div className="flex items-center justify-center flex-col w-full">
      <AOSInitializer />
      <Hero />
      {/* <Boxes /> */}
      <Products ProductsData={allProducts} heading="Trending Products" />
      <Collections />
      {/* ✅ Pass a single random product */}
      {/* <SingleProduct product={randomProduct} /> */}
      <SingleProducts data={randomProduct}/>
      <Updates />
      {/* <Faq /> */}
      <CallToEmail />
    </div>
  );
}
