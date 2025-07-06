import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:underline hover:text-blue-400">Shop</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline hover:text-blue-400">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline hover:text-blue-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right - Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-blue-400" />
            <span>+92 300 1234567</span>
          </p>
          <p className="flex items-center gap-2 mb-4">
            <FaEnvelope className="text-blue-400" />
            <span>support@example.com</span>
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 text-xl">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 text-xl">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 text-xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Shop Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
