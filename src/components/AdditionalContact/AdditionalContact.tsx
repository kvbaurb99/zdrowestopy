import Image from "next/image";
import React from "react";
import PhoneIcon from "../../assets/telephone_green.svg";
import LocationIcon from "../../assets/maps.svg";
import EmailIcon from "../../assets/email_green.svg";
import ClockIcon from "../../assets/clock.svg";

type Props = {};

export default function AdditionalContact({}: Props) {
  return (
    <section className="pt-20 pb-24 page-sizing flex justify-center gap-16 items-start">
      <div className="w-full flex flex-col items-center">
        <figure className="border-4 hover:scale-95 duration-300 border-green-600 rounded-full p-6 max-w-fit">
          <Image
            src={PhoneIcon}
            width={40}
            height={50}
            alt="phone"
            title="phone"
          />
        </figure>
        <p className="text-center mt-6 font-light tracking-wide">+48 501 408 528</p>
      </div>
      <div className="relative w-full flex flex-col items-center">
        <figure className="border-4 hover:scale-95 duration-300 border-green-600 rounded-full p-6 max-w-fit">
          <Image
            src={EmailIcon}
            width={40}
            height={50}
            alt="phone"
            title="phone"
          />
        </figure>
        <p className="text-center mt-6 font-light tracking-wide">
          jolanta230@onet.eu
        </p>
      </div>
      <div className="relative w-full flex flex-col items-center">
        <figure className="border-4 hover:scale-95 duration-300 border-green-600 rounded-full p-6 max-w-fit">
          <Image
            src={LocationIcon}
            width={40}
            height={50}
            alt="phone"
            title="phone"
          />
        </figure>
        <div className="tracking-wide font-light">
          <p className="text-center mt-6">ul. Zdrojowa 78</p>
          <p className="mt-1">43-384 Jaworze</p>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center">
        <figure className="border-4 hover:scale-95 duration-300 border-green-600 rounded-full p-6 max-w-fit">
          <Image
            src={ClockIcon}
            width={40}
            height={50}
            alt="phone"
            title="phone"
          />
        </figure>
        <div className="flex flex-col text-center gap-2 tracking-wide font-light">
          <p className="mt-6">Godziny otwarcia:</p>
          <p>Poniedziałek-piątek: 9.00-19.00</p>
          <p>Sobota: zamknięte</p>
        </div>
      </div>
    </section>
  );
}
