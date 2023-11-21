import AboutUs from "@/components/AboutUs/AboutUs";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navigation/Navbar";
import TopBar from "@/components/TopBar/TopBar";
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
    </>
  );
}
