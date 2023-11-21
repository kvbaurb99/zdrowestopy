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
          <h1 className="font-extrabold text-white tracking-wide text-7xl leading-[75px]">
            Zdrowe stopy
          </h1>
          <p className="mt-4 text-white font-medium">
            Usługi podologiczne
          </p>
        </div>
      </div>
    </header>
  );
}
