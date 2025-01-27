import Footer from "@/components/LayoutEN/Footer";
import Header from "@/components/LayoutEN/Header";
import ScrollToTop from "@/components/LayoutEN/ScrollToTop";
import AboutIntegration from "@/components/LayoutEN/AboutIntegration";
import Breadcrumb from "@/components/LayoutEN/Common/Breadcrumb";

import { Metadata } from "next";
import DomainIntegration from "@/components/LayoutEN/DomainIntegration";
import NosIntegrations from "@/components/LayoutEN/NosIntegrations";

export const metadata: Metadata = {
  title: "Integration | DATALYS Consulting",
  description: "DATALYS Consulting integration page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Integration"
        // description="Data infrastructure and analysis. Synergistically consider catalysts for change with an impact on flexible infrastructures."
      />
      <AboutIntegration />
      <NosIntegrations />
    </>
  );
};

export default AboutPage;
