import React from "react";
import img1 from "../assets/certificates/web-development-ibm.webp";
import img2 from "../assets/certificates/python-coursera.webp";
import img3 from "../assets/certificates/javascript-meta.webp";
import img4 from "../assets/certificates/javascript-microverse.webp";
import img5 from "../assets/certificates/html-microverse.webp";
import img6 from "../assets/certificates/react-microverse.webp";
import img7 from "../assets/certificates/ruby-microverse.webp"
export default function CertificatesGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-2 bg-gray-300 dark:bg-gray-800 rounded-lg flex items-end justify-center">
        <a
          href="https://www.credential.net/5d44d341-f805-448a-af6c-ddb93a1a0321"
          target="_blank"
        >
          <figure>
            <img src={img1} className="h-auto max-w-full rounded-lg" alt="Web Development Essentials"/>
            <figcaption className="text-center dark:text-white text-gray-700 font-bold">Web Development Essentials</figcaption>
          </figure>
        </a>
      </div>
      <div className="p-2 bg-gray-300 dark:bg-gray-800 rounded-lg flex items-end justify-center">
        <a
          href="https://www.credential.net/5d44d341-f805-448a-af6c-ddb93a1a0321"
          target="_blank"
        >
          <figure>
            <img src={img2} className="h-auto max-w-full rounded-lg" alt="Python For Everybody Specialization" />
            <figcaption className="text-center dark:text-white text-gray-700 font-bold">Python For Everybody Specialization</figcaption>
          </figure>
        </a>
      </div>
      <div className="p-2 bg-gray-300 dark:bg-gray-800 rounded-lg flex items-end justify-center">
        <a
          href="https://www.credential.net/5d44d341-f805-448a-af6c-ddb93a1a0321"
          target="_blank"
        >
          <figure>
            <img src={img3} className="h-auto max-w-full rounded-lg" alt="Programming with JavaScript" />
            <figcaption className="text-center dark:text-white text-gray-700 font-bold">Programming with JavaScript</figcaption>
          </figure>
        </a>
      </div>
      <div className="p-2 bg-gray-300 dark:bg-gray-800 rounded-lg flex items-end justify-center">
        <a
          href="https://www.credential.net/5d44d341-f805-448a-af6c-ddb93a1a0321"
          target="_blank"
        >
          <figure>
            <img src={img4} className="h-auto max-w-full rounded-lg" alt="Microverse JavaScript Module" />
            <figcaption className="text-center dark:text-white text-gray-700 font-bold">Microverse JavaScript Module</figcaption>
          </figure>
        </a>
      </div>
      <div className="p-2 bg-gray-300 dark:bg-gray-800 rounded-lg flex items-end justify-center">
        <a
          href="https://www.credential.net/5d44d341-f805-448a-af6c-ddb93a1a0321"
          target="_blank"
        >
          <figure>
            <img src={img5} className="h-auto max-w-full rounded-lg" alt="Microverse HTML/CSS Module" />
            <figcaption className="text-center dark:text-white text-gray-700 font-bold">Microverse HTML/CSS Module</figcaption>
          </figure>
        </a>
      </div>
      <div className="p-2 bg-gray-300 dark:bg-gray-800 rounded-lg flex items-end justify-center">
        <a
          href="https://www.credential.net/5d44d341-f805-448a-af6c-ddb93a1a0321"
          target="_blank"
        >
          <figure>
            <img src={img6} className="h-auto max-w-full rounded-lg" alt="Microverse React/Redux Module" />
            <figcaption className="text-center dark:text-white text-gray-700 font-bold">Microverse React/Redux Module</figcaption>
          </figure>
        </a>
      </div>
      <div className="p-2 bg-gray-300 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <a
          href="https://www.credential.net/630658f1-c29c-4935-826e-b004c237b57f"
          target="_blank"
        >
          <figure>
            <img src={img7} className="h-auto max-w-full rounded-lg" alt="Microverse Ruby/Databases Module" />
            <figcaption className="text-center dark:text-white text-gray-700 font-bold">Microverse Ruby/Databases Module</figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
}
