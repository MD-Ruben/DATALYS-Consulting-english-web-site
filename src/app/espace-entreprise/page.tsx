import CorporateEspace from "@/components/LayoutEN/CorporateEspace";
import Espace from "@/components/LayoutEN/Espace";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Espace | DATALYS Consulting",
  description: "DATALYS Consulting Corporate Espace",
  // other metadata
};

const EspacePage = () => {
  return (
    <>
      {/* <Espace /> */}
      <CorporateEspace />
    </>
  );
};

export default EspacePage;
