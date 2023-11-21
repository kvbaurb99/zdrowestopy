import React from "react";
import { Montserrat } from "next/font/google";

type Props = {};

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function Prices({}: Props) {
  return (
    <section
      className={`py-16 page-sizing flex flex-col items-center ${montserrat.className}`}
    >
      <div className="relative max-w-fit">
        <h2 className="uppercase tracking-wide font-medium text-2xl text-green-600">
          Cennik usług
        </h2>
        <div className="absolute top-0 -left-11 h-full flex items-center">
          <div className="w-8 bg-green-600 h-0.5" />
        </div>
        <div className="absolute top-0 -right-11 h-full flex items-center">
          <div className="w-8 bg-green-600 h-0.5" />
        </div>
      </div>
      <ul className="flex flex-col w-full mt-24 gap-12 font-light text-lg tracking-wide">
        <li className="border-b pb-4 w-full flex justify-between">
          KONSULTACJA PODOLOGICZNA (OMÓWIENIE ZMIAN NA STOPACH I PROPOZYCJA
          TERAPII)
          <span className="text-green-600">80 zł</span>
        </li>
        <li className="border-b pb-4 w-full flex justify-between">
          HIGIENIZACJA STÓP
          <span className="text-green-600">80 zł</span>
        </li>
        <li className="border-b pb-4 w-full flex justify-between">
          ZAŁOŻENIE KLAMRY 3TO
          <span className="text-green-600">80 zł</span>
        </li>
        <li className="border-b pb-4 w-full flex justify-between">
          ZAŁOŻENIE KLAMRY TYTANOWEJ
          <span className="text-green-600">80 zł</span>
        </li>
        <li className="border-b pb-4 w-full flex justify-between">
          KONTROLA KLAMRY
          <span className="text-green-600">80 zł</span>
        </li>
        <li className="border-b pb-4 w-full flex justify-between">
          KONTROLA Z PRZESTAWIENIEM KLAMRY
          <span className="text-green-600">80 zł</span>
        </li>
        <li className="border-b pb-4 w-full flex justify-between">
          OCZYSZCZENIE PAZNOKCIA ZMIENIONEGO CHOROBOWO
          <span className="text-green-600">80 zł</span>
        </li>
      </ul>
    </section>
  );
}
