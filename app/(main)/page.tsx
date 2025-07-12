import Boxes from "@/components/home/Boxes";
import CallToEmail from "@/components/home/CallToEmail";
import Collections from "@/components/home/Collections";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import SingleProduct from "@/components/home/SingleProduct";
import Image from "next/image";
import { GetProducts } from "@/lib/GetProducts";

export default async function Home() {
  const allProducts = await GetProducts();
  return (
    <>
    <div className="flex items-center justify-center flex-col w-full">
      {/* <div className="w-full"> */}
    <Hero/>
    <Boxes/>
    <Products ProductsData={allProducts}/>
    <Collections/>
    <SingleProduct/>
    <Faq/>
    <CallToEmail/>
      </div>
    {/* </div> */}
    </>
  );
}
