import React from "react";
import CertificatesGallery from "../components/CertificatesGallery";
import SectionHeading from "../components/SectionHeading";

export default function Certificates() {
  return (
    <section className="py-24 px-4 bg-gray-100 dark:bg-gray-900">
      <SectionHeading headingIndex={"03"} heading={"My Credientials"} />
      <CertificatesGallery />
    </section>
  );
}
