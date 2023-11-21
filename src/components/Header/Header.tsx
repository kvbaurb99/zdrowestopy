import React from "react";
import Navbar from "../Navigation/Navbar";

export default function Header() {
  return (
    <header
      className="w-full h-[700px] relative bg-cover bg-fixed"
      style={{
        backgroundImage: "url(podiatry_bg.jpg)",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center bg-black/60">
        <div className="page-sizing">
          <h1 className="font-extrabold text-white text-4xl leading-[75px]">
            Gabinet podologiczny
            <span className="block text-green-600 text-7xl">Zdrowe Stopy</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
