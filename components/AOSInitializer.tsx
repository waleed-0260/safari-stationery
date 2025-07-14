"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // Refresh AOS on route change or layout shift (optional)
    AOS.refresh();
  }, []);

  return null; // nothing to render
};

export default AOSInitializer;
