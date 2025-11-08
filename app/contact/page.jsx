'use client'
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 my-20">
        <h1 className="text-4xl font-bold mb-6 text-orange-600">Contact</h1>
        <p className="text-lg text-gray-700">
          Email: contact@Nelu.com <br />
          Telefon: +40 712 345 678 <br />
          Adresă: -
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
