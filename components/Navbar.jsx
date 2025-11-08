"use client";
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const [copied, setCopied] = useState(false);

  const phoneNumber = "📞 +40 727 956 320";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 bg-white text-gray-700 shadow-md">
      {/* Logo */}
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
      />

      {/* Desktop Links */}
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-blue-600 transition font-medium text-gray-700">Home</Link>
        <Link href="/all-products" className="hover:text-blue-600 transition font-medium text-gray-700">Shop</Link>
        <Link href="/about" className="hover:text-blue-600 transition font-medium text-gray-700">About Us</Link>
        <Link href="/contact" className="hover:text-blue-600 transition font-medium text-gray-700">Contact</Link>
        <Link href="/privacy" className="hover:text-blue-600 transition font-medium text-gray-700">Privacy Policy</Link>

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            Seller Dashboard
          </button>
        )}

        {/* WhatsApp */}
        <a
          href="https://wa.me/+40 727 956 320"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white text-sm px-5 py-2 rounded-full hover:bg-green-700 transition font-medium shadow-sm"
        >
          WhatsApp - Comenzi
        </a>

        {/* Copy Phone */}
        <button
          onClick={handleCopy}
          className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-900 transition font-medium relative"
        >
          {phoneNumber}
          {copied && (
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
              Număr copiat!
            </span>
          )}
        </button>
      </div>

      {/* Account */}
      <ul className="hidden md:flex items-center gap-4">
        <button
          onClick={() => router.push("/SignUpLogin")}
          className="flex items-center gap-2 hover:text-blue-600 transition"
        >
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </ul>

      {/* Mobile */}
      <div className="flex items-center md:hidden gap-2">
        <a
          href="https://wa.me/+40 727 956 320"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-full hover:bg-green-700 transition"
        >
          WhatsApp - Comenzi
        </a>
        <button
          onClick={handleCopy}
          className="bg-gray-800 text-white text-xs px-3 py-1.5 rounded-full hover:bg-gray-900 transition relative"
        >
          {phoneNumber}
          {copied && (
            <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-[10px] px-2 py-1 rounded-full shadow-md">
              Copiat!
            </span>
          )}
        </button>
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            Seller Dashboard
          </button>
        )}
        <button
          onClick={() => router.push("/SignUpLogin")}
          className="flex items-center gap-2 hover:text-blue-600 transition"
        >
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
