import React from "react";
import TopBar from "../TopBar/TopBar";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="sticky bg-white w-full z-40 top-0 left-0 py-6">
      <div className="page-sizing">
        <ul className="flex items-center gap-16 tracking-wide text-lg">
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
