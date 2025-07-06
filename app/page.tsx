import Collections from "@/components/home/Collections";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center">
    <Header/>
    <Hero/>
    <Products/>
    <Collections/>
    </div>
  );
}
