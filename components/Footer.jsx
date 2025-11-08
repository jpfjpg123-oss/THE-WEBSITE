import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        {/* Logo + descriere */}
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p>
            Suntem o agenție dedicată, care colaborează strâns cu echipa{" "}
            <span className="font-medium">Seminee Expert</span>{" "}
            (<a
              href="https://www.seminee-expert.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              www.seminee-expert.ro
            </a>) pentru a oferi soluții complete și personalizate clienților
            noștri. Îmbinăm expertiza în marketing digital și design cu
            experiența lor de peste 20 de ani în domeniul sistemelor de
            încălzire, pentru a crea campanii și materiale care fac diferența.
          </p>
        </div>

        {/* Company links */}
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link className="hover:underline transition" href="/">Home</Link>
              </li>
              <li>
                <Link className="hover:underline transition" href="/about">About Us</Link>
              </li>
              <li>
                <Link className="hover:underline transition" href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link className="hover:underline transition" href="/privacy">Politica de Confidențialitate</Link>
              </li>
              <li>
                <Link className="hover:underline transition" href="/terms">Termeni și Condiții</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+40 727 956 320</p>
              <p>contact@Nelu.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <p className="py-4 text-center text-xs md:text-sm">
        © by Cezar All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
