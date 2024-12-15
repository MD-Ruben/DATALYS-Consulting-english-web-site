import AboutSectionOne from "@/components/LayoutEN/About/AboutSectionOne";
import AboutSectionTwo from "@/components/LayoutEN/About/AboutSectionTwo";
import OurWorks from "@/components/LayoutEN/OurWorks";
import Brands from "@/components/LayoutEN/Brands";
import ScrollUp from "@/components/LayoutEN/Common/ScrollUp";
import AboutSectionThree from "@/components/LayoutEN/About/AboutSectionOneThree";
import Features from "@/components/LayoutEN/Features";
import Hero from "@/components/LayoutEN/HeroEn";
import Testimonials from "@/components/LayoutEN/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DATALYS Consulting",
  description: "DATALYS Consulting home page",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionThree />
      <Features />
      {/* <AboutSectionOne /> */}
    </>
  );
}
