"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 my-20 text-gray-700 leading-relaxed">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Termeni și Condiții</h1>

        <p className="mb-4">
          Acest website este proprietatea <span className="font-semibold text-orange-600">SC SEMINEE DE LUX SRL</span>, 
          cu sediul social în (ex: Str. Dr. Petre Gădescu, nr. 65, sector 5, București, cod poștal 051076, 
          înregistrată la Registrul Comerțului sub numărul RO22678072, având CIF J40/20559/2007.)
        </p>

        <h2 className="text-2xl font-semibold mb-3">1. Informații generale</h2>
        <p className="mb-4">
          <strong>Website / Site:</strong> domeniul www.seminee-expert.ro și toate subdomeniile acestuia, prin intermediul căruia utilizatorii pot achiziționa produsele și serviciile oferite.<br />
          <strong>Utilizator:</strong> orice persoană fizică sau juridică care accesează site-ul www.seminee-expert.ro. Utilizatorul se obligă să folosească site-ul în mod responsabil, fără a constitui o utilizare abuzivă.<br />
          <strong>Campanie:</strong> acțiunea de a afișa în scop de promovare un număr finit de bunuri și/sau servicii, pentru o perioadă limitată de timp, stabilită de către SC SEMINEE EXPERT SRL.
        </p>

        <h2 className="text-2xl font-semibold mb-3">2. Condiții de utilizare a site-ului</h2>
        <p className="mb-4">
          Informațiile publicate pe site-ul www.seminee-expert.ro sunt de interes general despre produsele comercializate și alte informații utile pentru utilizatori.<br />
          Toate informațiile sunt puse la dispoziția utilizatorilor gratuit.<br />
          Pentru plasarea unei comenzi, poate fi necesară crearea unui cont personal gratuit, prin completarea unui formular de înregistrare: adresă de e-mail, parolă, date personale și adresă de livrare.<br />
          Datele personale sunt folosite exclusiv pentru procesarea comenzilor și pentru marketing. Nu vor fi vândute sau distribuite terților fără consimțământ.
        </p>

        <h2 className="text-2xl font-semibold mb-3">3. Informații despre produse</h2>
        <p className="mb-4">
          Toate produsele afișate pe site sunt prezentate cu titlu informativ și pot fi comercializate la cerere. Produsele sunt noi și vor fi însoțite de factură fiscală.<br />
          Comenzile se realizează în limita stocului existent, prin formularul de contact sau cerere ofertă.<br />
          Imaginile și descrierile produselor pot să nu reflecte exact produsul real. SC SEMINEE EXPERT SRL nu răspunde pentru diferențele de culoare sau aspect vizual cauzate de monitoare sau dispozitive.<br />
          Garantăm autenticitatea tuturor produselor comercializate, conform specificațiilor afișate.
        </p>

        <h2 className="text-2xl font-semibold mb-3">4. Informații despre servicii</h2>
        <p className="mb-4">
          Serviciile oferite prin site vor fi însoțite de contract și factură după achiziționare.
        </p>

        <h2 className="text-2xl font-semibold mb-3">5. Date de contact</h2>
        <p className="mb-4">
          Prin accesarea site-ului și utilizarea informațiilor prezentate, utilizatorul consimte primirea notificărilor electronice sau telefonice. SC SEMINEE EXPERT SRL poate fi contactată la:<br />
          <strong>Telefon:</strong> +40 727 956 320<br />
          <strong>Email:</strong> contact@Nelu.com<br />
          <strong>Adresă:</strong> ex: (Str. Dr. Petre Gădescu, nr. 65, sector 5, București, cod poștal 051076.<br />
          SC SEMINEE EXPERT SRL își rezervă dreptul de a nu răspunde tuturor solicitărilor primite.)
        </p>

        <h2 className="text-2xl font-semibold mb-3">6. Litigii și dispoziții finale</h2>
        <p className="mb-4">
          SC SEMINEE EXPERT SRL poate modifica orice informație de pe site fără notificare prealabilă.<br />
          Societatea nu răspunde pentru prejudicii rezultate din nefuncționarea site-ului.<br />
          Conținutul site-ului (texte, imagini, grafice etc.) este protejat de legislația drepturilor de autor și a proprietății intelectuale.<br />
          Orice litigiu între utilizator și SC SEMINEE EXPERT SRL va fi rezolvat pe cale amiabilă. Dacă acest lucru nu este posibil, competența revine instanțelor judecătorești din România.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TermsPage;
