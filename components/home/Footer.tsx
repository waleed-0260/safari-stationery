import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo from "@/public/images/logo.png"
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className=" text-white pt-10 pb-6 px-6 md:px-16  bg-gray-700">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        {/* Logo & Description */}
        <div>
          {/* <h2 className="text-2xl font-bold mb-3">Paper NPlay</h2> */}
          <Link href={"/"} className='h-[100px] w-[100px]'>
            <Image src={logo} alt="" className='h-[100px] w-[100px]'/>
        </Link>
          <p className="text-sm text-gray-300 leading-relaxed">
            Safari Stationary is your trusted destination for high-quality stationery, art supplies,
            and creative essentials. 
          </p>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#">Art Supplies</Link></li>
            <li><Link href="#">Office Items</Link></li>
            <li><Link href="#">School Essentials</Link></li>
            <li><Link href="#">Gift Items</Link></li>
            <li><Link href="#">Paper & Sheets</Link></li>
            <li><Link href="#">Books</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Return Policy</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">About Us</Link></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay in Touch</h3>
          <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter for updates and offers</p>
          <div className="flex flex-col items-center mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md text-black bg-white"
            />
            <button className="bg-red-600 px-4 py-2 rounded-md text-white hover:bg-red-700 w-full mt-1">
              Subscribe
            </button>
          </div>

          <div className="space-y-3 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Bahria Town Lahore, Punjab, Pakistan
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> info@safaristationary.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +92 300 1234567
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>© {new Date().getFullYear()} Safari Stationary. All rights reserved.</p>
        <div className="flex gap-4 text-white">
          <Link href="#" className="hover:text-blue-500"><FaFacebookF /></Link>
          <Link href="#" className="hover:text-pink-500"><FaInstagram /></Link>
          <Link href="#" className="hover:text-sky-400"><FaTwitter /></Link>
          <Link href="#" className="hover:text-blue-700"><FaLinkedinIn /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
