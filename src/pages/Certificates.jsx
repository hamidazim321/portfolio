import React from "react";
import CertificatesGallery from "../components/CertificatesGallery";
import SectionHeading from "../components/SectionHeading";

export default function Certificates() {
  return (
    <section className="pt-24 pb-4 px-4 bg-gray-100 dark:bg-gray-900">
      <SectionHeading headingIndex={"03"} heading={"Credientials"} />
      <CertificatesGallery />
    </section>
  );
}
