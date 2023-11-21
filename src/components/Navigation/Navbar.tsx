import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white backdrop-blur-md w-full z-40 py-7">
      <div className="page-sizing">
        <ul className="flex items-center gap-16 tracking-wide text-lg font-medium">
          <li>Strona główna</li>
          <li>Oferta</li>
          <li>Galeria</li>
          <li>Cennik</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </nav>
  );
}
