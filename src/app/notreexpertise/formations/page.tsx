import Footer from "@/components/LayoutEN/Footer";
import Header from "@/components/LayoutEN/Header";
import ScrollToTop from "@/components/LayoutEN/ScrollToTop";
import ModuleFormations from "@/components/LayoutEN/ModuleFormations";
import Breadcrumb from "@/components/LayoutEN/Common/Breadcrumb";

import { Metadata } from "next";
import AboutFormations from "@/components/LayoutEN/AboutFormations";
import DomainCourse from "@/components/LayoutEN/DomainCourse";

export const metadata: Metadata = {
  title: "Training courses | DATALYS Consulting",
  description: "DATALYS Consulting training courses page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Training courses"
        description="Data infrastructure and analysis. Synergistically consider catalysts for change with an impact on flexible infrastructures."
      /> */}
      <AboutFormations />
      <DomainCourse />
      {/* <ModuleFormations /> */}
    </>
  );
};

export default AboutPage;
