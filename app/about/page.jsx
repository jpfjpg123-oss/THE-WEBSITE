"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 my-20 text-gray-700 leading-relaxed">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">About Us</h1>
        <p className="mb-4">
          La <span className="font-semibold text-orange-600">Seminee Expert</span>, credem că fiecare
          locuință merită să aibă o atmosferă caldă, elegantă și primitoare. Cu
          o experiență de peste <span className="font-semibold">20 de ani</span> în domeniul sistemelor de
          încălzire, am reușit să transformăm peste 10.000 de case în adevărate
          spații de relaxare și confort.
        </p>

        <p className="mb-4">
          Colaborăm cu cei mai buni producători de șeminee, sobe și accesorii,
          pentru a oferi clienților noștri produse de înaltă calitate, sigure și
          durabile. Fie că este vorba despre un design clasic sau unul modern,
          echipa noastră te ajută să găsești soluția perfectă pentru casa ta.
        </p>

        <p className="mb-4">
          Ne mândrim nu doar cu produsele noastre, ci și cu serviciile complete
          pe care le oferim: de la consultanță personalizată, la montaj
          profesional și mentenanță. Fiecare proiect este tratat cu seriozitate,
          pasiune și atenție la detalii.
        </p>

        <p className="mb-4">
          Misiunea noastră este simplă: <span className="italic">
            să aducem căldură și frumusețe în fiecare casa
          </span>. Pentru noi, un șemineu nu este doar o sursă de căldură, ci și
          un punct central al casei, un loc unde familia și prietenii se adună
          pentru a crea amintiri de neuitat.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
