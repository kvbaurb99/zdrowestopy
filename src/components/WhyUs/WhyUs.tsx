import Image from "next/image";
import React from "react";
import WomenImage from "../../assets/women.jpg";

type Props = {};

export default function WhyUs({}: Props) {
  return (
    <section className="py-24 bg-gray-100">
      <div className="page-sizing gap-6 flex items-center justify-between">
        <div>
          <div className="relative max-w-fit">
            <h2 className="uppercase tracking-wide font-medium text-xl text-green-600">
              Dlaczego my ?
            </h2>
            <div className="absolute top-0 -left-11 h-full flex items-center">
              <div className="w-8 bg-green-600 h-0.5" />
            </div>
            <div className="absolute top-0 -right-11 h-full flex items-center">
              <div className="w-8 bg-green-600 h-0.5" />
            </div>
          </div>{" "}
          <div className="max-w-3xl relative right-11 flex text-lg flex-col gap-4 tracking-wide">
            <p className="mt-6">
              W naszym gabinecie podologicznym skupiamy się na zapewnieniu
              najwyższej jakości opieki nad stopami, wykorzystując do tego celu
              najnowocześniejsze i w pełni bezpieczne urządzenia. Stosujemy
              ścisłe procedury higieniczne, które obejmują wykorzystanie
              materiałów jednorazowego użytku oraz dokładną dezynfekcję i
              sterylizację narzędzi w nowoczesnym autoklawie, aby zapewnić
              bezpieczeństwo i komfort naszym pacjentom.
            </p>
            <p>
              Nasz zespół stale śledzi najnowsze trendy w podologii, aby
              zapewnić naszym pacjentom najbardziej aktualne i efektywne metody
              leczenia. Naszym priorytetem jest dbałość o zdrowie i komfort stóp
              naszych pacjentów, dlatego każdy zabieg jest przeprowadzany z
              największą starannością i profesjonalizmem.
            </p>
          </div>
        </div>
        <figure className="relative w-96 h-96 shadow-md shadow-gray-200 rounded-full">
          <Image
            src={WomenImage}
            fill
            sizes="100%"
            alt="women"
            title="women"
            className="rounded-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
