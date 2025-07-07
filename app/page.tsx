import CallToEmail from "@/components/home/CallToEmail";
import Collections from "@/components/home/Collections";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import SingleProduct from "@/components/home/SingleProduct";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center">
    <Header/>
    <Hero/>
    <Products/>
    <Collections/>
    <SingleProduct/>
    <Faq/>
    <CallToEmail/>
    <Footer/>
    </div>
  );
}
