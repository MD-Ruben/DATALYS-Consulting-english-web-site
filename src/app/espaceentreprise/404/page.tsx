import Footer from "@/components/LayoutEN/Footer";
import Header from "@/components/LayoutEN/Header";
import ScrollToTop from "@/components/LayoutEN/ScrollToTop";
import PageNotFound from "@/components/LayoutEN/PageNotFound";
import Breadcrumb from "@/components/LayoutEN/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate area | DATALYS Consulting",
  description: "DATALYS Consulting's corporate page",
  // other metadata
};

const Page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Corporate area"
        description="Data infrastructure and analysis. Synergistically consider catalysts for change with an impact on flexible infrastructures."
      />
      <PageNotFound />
    </>
  );
};

export default Page;
