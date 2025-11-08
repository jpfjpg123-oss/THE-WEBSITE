"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 my-20 text-gray-700 leading-relaxed">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Politica de Confidențialitate</h1>

        <p className="mb-4">
          Ultimul update: 08.06.2020 <br />
          Această politică de confidențialitate definește modul în care <span className="font-semibold text-orange-600">SC SEMINEE DE LUX SRL</span> colectează, utilizează și stochează datele dumneavoastră personale atunci când accesați sau interacționați cu site-ul www.seminee-de-lux.ro.
        </p>

        <h2 className="text-2xl font-semibold mb-3">1. Cine suntem</h2>
        <p className="mb-4">
          SC SEMINEE DE LUX SRL este o societate organizată conform legilor din România, cu sediul în Str. Dr. Petre Gădescu, nr. 65, sector 5, București, cod poștal 051076, înregistrată la Registrul Comerțului sub nr. RO22678072, având CUI J40/20559/2007, denumită în continuare SC SEMINEE DE LUX.<br />
          Email contact: office@seminee-de-lux.ro
        </p>

        <h2 className="text-2xl font-semibold mb-3">2. Ce date prelucrăm</h2>
        <p className="mb-4">
          În funcție de interacțiunea cu www.seminee-de-lux.ro (abonare newsletter, formular contact, conversații telefonice), putem colecta:<br />
          - Email, nume, prenume, telefon, adresă, companie, oraș, țară.<br />
          - Date de navigare: IP, browser, pagini vizualizate, durata vizitei.<br />
          - Date despre comportamentul utilizatorului pe site (click-uri, derulare, produse vizualizate).
        </p>

        <h2 className="text-2xl font-semibold mb-3">3. Cum colectăm datele</h2>
        <p className="mb-4">
          Direct: crearea contului, abonare newsletter, completare formulare.<br />
          Indirect: prin cookie-uri și marcatori, sau prin comunicare email/telefon.
        </p>

        <h2 className="text-2xl font-semibold mb-3">4. Cine prelucrează datele</h2>
        <p className="mb-4">
          Datele sunt prelucrate de angajați SC SEMINEE DE LUX pentru administrarea site-ului, a clienților și a obligațiilor legale. Prelucrarea se face pe servere securizate și cu respectarea procedurilor interne.
        </p>

        <h2 className="text-2xl font-semibold mb-3">5. Partajarea datelor</h2>
        <p className="mb-4">
          Nu vindem datele personale. Datele pot fi partajate doar cu furnizori de servicii, operatori de transport etc., care sunt obligați să respecte confidențialitatea și scopul prelucrării.
        </p>

        <h2 className="text-2xl font-semibold mb-3">6. Perioada de stocare</h2>
        <p className="mb-4">
          - Date newsletter: până la dezabonare.<br />
          - Date contact: 3 ani de la ultima interacțiune.<br />
          - Date contractuale și justificative financiar-contabile: 10 ani.<br />
          - Cookie-uri de audiență: până la 6 luni; alte cookie-uri: până la 13 luni.
        </p>

        <h2 className="text-2xl font-semibold mb-3">7. Protecția datelor</h2>
        <p className="mb-4">
          Datele sunt stocate pe servere securizate cu firewall și antivirus. Utilizarea site-ului implică asumarea unui risc minor, iar responsabilitatea securității datelor este și a utilizatorului.
        </p>

        <h2 className="text-2xl font-semibold mb-3">8. Drepturile dumneavoastră</h2>
        <p className="mb-4">
          Dreptul de a retrage consimțământul, dreptul de opoziție, accesul la date, rectificare, restricționare, ștergere, portabilitate și sesizarea ANSPDCP. Exercitarea drepturilor se face prin email la office@seminee-de-lux.ro. SC SEMINEE DE LUX poate solicita dovada identității.
        </p>

        <h2 className="text-2xl font-semibold mb-3">9. Confidențialitatea minorilor</h2>
        <p className="mb-4">
          Nu colectăm date de la persoane sub 18 ani. În caz de colectare accidentală, datele vor fi șterse sau se va obține consimțământ parental.
        </p>

        <h2 className="text-2xl font-semibold mb-3">10. Modificări ale politicii</h2>
        <p className="mb-4">
          Politica poate fi actualizată. Modificările majore vor fi anunțate prin email sau mesaj pe site.
        </p>

        <h2 className="text-2xl font-semibold mb-3">11. Politica Cookie-urilor</h2>
        <p className="mb-4">
          - Site-ul folosește cookie-uri pentru performanță, analiză, geotargetare, înregistrare și publicitate.<br />
          - Cookie-urile nu colectează date personale fără consimțământ.<br />
          - Utilizatorii pot modifica setările cookie în browser; refuzul poate limita funcționalitatea site-ului.<br />
          - Pentru mai multe informații, consultați Politica Cookie-urilor sau linkurile utile: <br />
          <a href="http://www.youronlinechoices.com/ro/" className="text-orange-600 hover:underline">Your Online Choices</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
