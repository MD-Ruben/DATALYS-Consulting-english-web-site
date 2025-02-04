import Footer from "@/components/LayoutEN/Footer";
import Header from "@/components/LayoutEN/Header";
import ScrollToTop from "@/components/LayoutEN/ScrollToTop";
import Breadcrumb from "@/components/LayoutEN/Common/Breadcrumb";
import Contact from "@/components/LayoutEN/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | DATALYS Consulting",
  description: "La page de contact de DATALYS Consulting",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        // description="Data infrastructure and analysis. Synergistically consider catalysts for change with an impact on flexible infrastructures."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
