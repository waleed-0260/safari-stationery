"use client"
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="w-full flex items-center justify-center my-[50px]">
      <div className="w-[80%] flex flex-col items-center ">
        <p className="md:text-4xl text-2xl heading font-bold">FAQS</p>
        <Accordion type="single" collapsible className="w-[100%]">
  <AccordionItem className="h-[100px]" value="item-1">
    <AccordionTrigger className="text-left">What services does Spearing Systems offer?</AccordionTrigger>
    <AccordionContent>
      Spearing Systems provides a full suite of digital marketing services including Web Development and Design, SEO, Branding, Social Media Marketing, and Google Ads/PPC management. We tailor our strategies to meet the unique needs of each client, ensuring maximum impact and results.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className="h-[100px]" value="item-2">
    <AccordionTrigger className="text-left">What industries does Spearing Systems specialize in?</AccordionTrigger>
    <AccordionContent>
      We work with a diverse range of industries, from e-commerce and technology to healthcare and finance. Our experience across various sectors allows us to craft customized marketing solutions that drive growth and success for businesses of all types.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className="h-[100px]" value="item-3">
    <AccordionTrigger className="text-left">How does Spearing Systems approach digital marketing strategy?</AccordionTrigger>
    <AccordionContent>
      Our approach is data-driven and customer-focused. We start by understanding your business goals, target audience, and competitive landscape. From there, we develop a comprehensive strategy that includes everything from brand development to conversion optimization, ensuring every element works together to achieve your objectives.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className="h-[100px]" value="item-4">
    <AccordionTrigger className="text-left">Why should I choose Spearing Systems over other digital marketing agencies?</AccordionTrigger>
    <AccordionContent>
      Spearing Systems stands out for our commitment to delivering premium quality work, our transparent communication, and our results-oriented approach. We don’t just promise results; we deliver them through a seamless, collaborative process that keeps you informed and involved every step of the way.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className="h-[100px]" value="item-5">
    <AccordionTrigger className="text-left">How does Spearing Systems measure success?</AccordionTrigger>
    <AccordionContent>
      Success at Spearing Systems is measured by the tangible results we achieve for our clients. This includes increased website traffic, improved search engine rankings, higher conversion rates, and ultimately, a strong return on investment (ROI). We use advanced analytics to track and report on all key performance indicators (KPIs), ensuring our strategies are always aligned with your business goals.
    </AccordionContent>
  </AccordionItem>
</Accordion>
      </div>
    </div>
  );
};

export default Faq;
