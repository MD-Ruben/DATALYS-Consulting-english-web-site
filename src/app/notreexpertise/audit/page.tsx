import Footer from "@/components/LayoutEN/Footer";
import Header from "@/components/LayoutEN/Header";
import ScrollToTop from "@/components/LayoutEN/ScrollToTop";
import DomainSection from "@/components/LayoutEN/DomainSection";
import AboutAudit from "@/components/LayoutEN/AboutAudit";
import RayonIntervention from "@/components/LayoutEN/RayonIntervention";
import Breadcrumb from "@/components/LayoutEN/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit | DATALYS Consulting",
  description: "La page d'audit de DATALYS Consulting",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Audit"
        description="Data infrastructure and analysis. Synergistically consider catalysts for change with an impact on flexible infrastructures."
      />
      <AboutAudit />
      <DomainSection />
      <RayonIntervention />
    </>
  );
};

export default AboutPage;
