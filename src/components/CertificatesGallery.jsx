import React from "react";
import img1 from "../assets/certificates/web-development-ibm.webp";
import img2 from "../assets/certificates/javascript-microverse.webp";
import img3 from "../assets/certificates/html-microverse.webp";
import img4 from "../assets/certificates/react-redux.webp";
import img5 from "../assets/certificates/python-coursera.webp";
import img6 from "../assets/certificates/javascript-meta.webp";
export default function CertificatesGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="p-2 bg-gray-300 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <a
          href="https://www.credly.com/badges/2369908a-f82d-49ac-b714-1134d0511986/public_url"
          target="_blank"
        >
          <img src={img1} className="h-auto max-w-full rounded-lg" />
        </a>
      </div>
      <div className="p-2 bg-gray-300 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <a
          href="https://www.credential.net/f54e979c-c28a-4df3-8dcb-f0ec03d229a4"
          target="_blank"
        >
          <img src={img2} className="h-auto max-w-full rounded-lg" />
        </a>
      </div>
      <div className="p-2 bg-gray-300 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <a
          href="https://www.credential.net/5d44d341-f805-448a-af6c-ddb93a1a0321"
          target="_blank"
        >
          <img src={img3} className="h-auto max-w-full rounded-lg" />
        </a>
      </div>
      <div className="p-2 bg-gray-300 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <a
          href="https://www.credential.net/0c993c52-4477-4d35-8329-5f80509841a6"
          target="_blank"
        >
          <img src={img4} className="h-auto max-w-full rounded-lg" />
        </a>
      </div>
      <div className="p-2 bg-gray-300 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <a
          href="https://coursera.org/share/01f81d18edbed6a901a7385de8bf2e4f"
          target="_blank"
        >
          <img src={img5} className="h-auto max-w-full rounded-lg" />
        </a>
      </div>
      <div className="p-2 bg-gray-300 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <a
          href="https://coursera.org/share/b0c0d385f138b5ecba221cd74f2b459c"
          target="_blank"
        >
          <img src={img6} className="h-auto max-w-full rounded-lg" />
        </a>
      </div>
    </div>
  );
}
