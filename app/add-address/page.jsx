'use client';

import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const AddAddress = () => {
  const [address, setAddress] = useState({
    fullName: "",
    phoneNumber: "",
    area: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!address.fullName || !address.phoneNumber || !address.area || !address.city) {
      alert("‼️ Trebuie să completezi toate spațiile!");
      return;
    }

    alert("✅ Adresa a fost salvată cu succes!!");
    console.log("Adresa salvată:", address);
  };

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between">
        <form onSubmit={handleSubmit} className="w-full">
          <p className="text-2xl md:text-3xl text-gray-500">
            Add Shipping <span className="font-semibold text-orange-600">Address</span>
          </p>

          <div className="space-y-3 max-w-sm mt-10">
            <input
              type="text"
              placeholder="Numele Dvs"
              className="px-2 py-2.5 border border-gray-500/30 rounded outline-none w-full text-gray-500 focus:border-orange-500 transition"
              value={address.fullName}
              onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Numarul de telefon"
              className="px-2 py-2.5 border border-gray-500/30 rounded outline-none w-full text-gray-500 focus:border-orange-500 transition"
              value={address.phoneNumber}
              onChange={(e) => setAddress({ ...address, phoneNumber: e.target.value })}
            />
            <textarea
              placeholder="Adresa Dvs. (locul si strada) ex: Strada Sofia nr 7"
              rows={4}
              className="px-2 py-2.5 border border-gray-500/30 rounded outline-none w-full text-gray-500 resize-none focus:border-orange-500 transition"
              value={address.area}
              onChange={(e) => setAddress({ ...address, area: e.target.value })}
            ></textarea>
            <input
              type="text"
              placeholder="Oras/Sector/Judet"
              className="px-2 py-3.5 border border-gray-500/30 rounded outline-none w-full text-gray-500 focus:border-orange-500 transition"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="max-w-sm w-full mt-6 bg-orange-600 text-white py-3 hover:bg-orange-700 uppercase"
          >
            Save address / Salveaza Adresa
          </button>
        </form>

        <Image
          className="md:mr-16 mt-16 md:mt-0"
          src={assets.my_location_image}
          alt="my_location_image"
        />
      </div>
      <Footer />
    </>
  );
};

export default AddAddress;