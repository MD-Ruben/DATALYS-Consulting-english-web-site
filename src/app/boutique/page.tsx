import PageNotFound from "@/components/LayoutEN/PageNotFound";
import Breadcrumb from "@/components/LayoutEN/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store | DATALYS Consulting",
  description: "DATALYS Consulting store page",
  // other metadata
};

const Page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Store"
        description="Data infrastructure and analysis. Synergistically consider catalysts for change with an impact on flexible infrastructures."
      />
      <PageNotFound />
    </>
  );
};

export default Page;
