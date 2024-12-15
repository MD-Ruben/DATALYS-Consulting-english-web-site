import AboutSectionOne from "@/components/LayoutEN/About/AboutSectionOne";
import AboutSectionFour from "@/components/LayoutEN/About/AboutSectionFour";
import Breadcrumb from "@/components/LayoutEN/Common/Breadcrumb";

import { Metadata } from "next";
import Features from "@/components/LayoutEN/Features";

export const metadata: Metadata = {
  title: "About us | DATALYS Consulting",
  description: "DATALYS Consulting about us page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="About us"
        description="Data infrastructure and analysis. Synergistically consider catalysts for change with an impact on flexible infrastructures."
      /> */}
      <AboutSectionFour />
      {/* <AboutSectionOne /> */}
      <Features />
    </>
  );
};

export default AboutPage;
