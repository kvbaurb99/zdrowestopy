import Image from "next/image";
import React from "react";
import AboutImage from "../../assets/about_us.jpg";

export default function AboutUs() {
  return (
    <section className="page-sizing py-16 flex justify-between">
      <figure className="min-w-[450px] shadow-lg shadow-gray-100 min-h-[600px] relative">
        <Image
          src={AboutImage}
          fill
          sizes="100%"
          alt="foots"
          title="foots"
          className="object-cover"
        />
      </figure>
      <div className="w-full p-12 ml-20">
        <div className="relative max-w-fit">
          <h2 className="uppercase tracking-wide font-medium text-xl text-green-600">
            Czym się zajmujemy
          </h2>
          <div className="absolute top-0 -left-11 h-full flex items-center">
            <div className="w-8 bg-green-600 h-0.5" />
          </div>
          <div className="absolute top-0 -right-11 h-full flex items-center">
            <div className="w-8 bg-green-600 h-0.5" />
          </div>
        </div>
        <div className="relative right-11 mt-4">
          <p className="font-bold text-3xl leading-10">
            Witamy w gabinecie podologicznym{" "}
            <span className="block text-green-600">Zdrowe stopy</span>
          </p>
          <ul className="mt-6 flex flex-col gap-4 about-us-list text-lg ml-4">
            <li>Dbamy o prawidłową kondycję stóp.</li>
            <li>
              Przeciwdziałamy powstawaniu zmian chorobowych w obrębie stóp,
              planuje i przeprowadzam terapie w przypadku istniejących
              dolegliwości
            </li>
            <li>
              Udzielamy profesjonalnej pomocy w kwestii prawidłowego skracania
              paznokci, problemów paznokci np grzybicy, wrastanie, wkręcanie
              płytek paznokciowych, protetyki paznokcia, usuwanie modzeli,
              odcisków, brodawek.
            </li>
            <li>
              Udzielamy wskazówek dotyczących pielęgnacji skóry i paznokci,
              profilaktyki, korekcji i prawidłowej ochrony zmian ortopedycznych
              oraz poprawy stanu mięśni stóp.
            </li>
            <li>
              Rozpoznajemy patologiczne zmiany na stopach oraz przeprowadzam
              odpowiednie zabiegi (zalecane przez lekarza lub przez nas).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
