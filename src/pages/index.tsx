import AboutUs from "@/components/AboutUs/AboutUs";
import AdditionalContact from "@/components/AdditionalContact/AdditionalContact";
import BrImage from "@/components/BrImage/BrImage";
import Header from "@/components/Header/Header";
import MapContainer from "@/components/Map/Map";
import Navbar from "@/components/Navigation/Navbar";
import Prices from "@/components/Prices/Prices";
import TopBar from "@/components/TopBar/TopBar";
import WhyUs from "@/components/WhyUs/WhyUs";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Zdrowe Stopy | gabinet podologiczny Jaworze"
        description="Zdrowe stopy gabinet podologiczny położony w województwie śląskim w Jaworzu."
      />
      <TopBar />
      <Navbar />
      <Header />
      <AboutUs />
      <BrImage />
      <WhyUs />
      <Prices />
      <AdditionalContact />
      <MapContainer />
    </>
  );
}
