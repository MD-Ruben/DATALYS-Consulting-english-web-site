import Footer from "@/components/LayoutEN/Footer";
import Header from "@/components/LayoutEN/Header";
import ScrollToTop from "@/components/LayoutEN/ScrollToTop";
import Breadcrumb from "@/components/LayoutEN/Common/Breadcrumb";

import { Metadata } from "next";
import Events from "@/components/LayoutEN/Events";

export const metadata: Metadata = {
  title: "Events | DATALYS Consulting",
  description: "DATALYS Consulting event page",
  // other metadata
};

const Page = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Events"
        description="Data infrastructure and analysis. Synergistically consider catalysts for change with an impact on flexible infrastructures."
      /> */}
      <Events />
    </>
  );
};

export default Page;
