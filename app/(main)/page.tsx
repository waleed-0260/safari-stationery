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
import NewProducts from "@/components/home/NewProducts";
import Contact from "@/components/home/Contact";

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default async function Home() {
  const allProducts = await GetProducts();
const featuredProducts = allProducts.filter((product: any) => product.isFeatured === true);

  const randomProduct = getRandomItem(allProducts); // ✅ Just one random product
    const discountedProducts = allProducts.filter(
    (product: any) =>
      product.sets &&
      product.sets.length > 0 &&
      product.sets[0].compare_at_price
  );

   const latestProducts = [...allProducts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 8); 

  return (
    <div className="flex items-center justify-center flex-col w-full">
      <AOSInitializer />
      <Hero />
      {/* <Boxes /> */}
      <Products ProductsData={featuredProducts} heading="Trending Products" />
      <Collections />
      {/* ✅ Pass a single random product */}
      {/* <SingleProduct product={randomProduct} /> */}
      <SingleProducts data={randomProduct}/>
      <NewProducts data={latestProducts} heading="New Arrivals"/>
      <NewProducts data={discountedProducts} heading="Discounted Products -- 15% off"/>
      {/* <Faq /> */}
      <Updates />
      <Contact/>
      {/* <CallToEmail /> */}
    </div>
  );
}
