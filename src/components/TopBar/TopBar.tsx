import React from "react";
import OfficeIcon from "../../assets/home.svg";
import PhoneIcon from "../../assets/telephone.svg";
import EmailIcon from "../../assets/email.svg";
import FacebookIcon from '../../assets/facebook.svg'
import Image from "next/image";

export default function TopBar() {
  return (
    <aside className="w-full bg-emerald-600 text-white py-5">
      <div className="flex justify-between page-sizing items-center">
        <ul className="text-sm flex items-center gap-12">
          <li className="flex gap-3 items-center">
            <Image
              src={OfficeIcon}
              width={16}
              height={20}
              alt="office"
              title="office"
            />
            <p>ul. Zdrojowa 78, 43-384 Jaworze</p>
          </li>
          <li className="flex gap-3 items-center">
            <Image
              src={PhoneIcon}
              width={16}
              height={20}
              alt="phone"
              title="phone"
            />
            <p>+48 501 408 528</p>
          </li>
          <li className="flex gap-3 items-center">
            <Image
              src={EmailIcon}
              width={16}
              height={20}
              alt="email"
              title="email"
            />
            <p>jolanta230@onet.eu</p>
          </li>
        </ul>
        <ul>
          <li>
            <Image
              src={FacebookIcon}
              width={20}
              height={20}
              alt="facebook"
              title="facebook"
            />
          </li>
        </ul>
      </div>
    </aside>
  );
}
