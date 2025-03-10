import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <span className="sr-only">Home</span>
                <Image
                  src="/image/Tarhouni Logo Text PNG.png"
                  alt="Tarhouni Logo"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </a>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Bureau de change à Teboulba agréé par la Banque Centrale de Tunisie
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a className="text-gray-700 transition hover:text-yellow-500" href="#about"> About </a>
            </li>
            <li>
              <a className="text-gray-700 transition hover:text-yellow-500" href="#service"> Service </a>
            </li>
            <li>
              <a className="text-gray-700 transition hover:text-yellow-500" href="#currencytable"> Cours De Change </a>
            </li>
            <li>
              <a className="text-gray-700 transition hover:text-yellow-500" href="#contact"> Contact </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            {/* Facebook */}
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61572907003005"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-yellow-500"
              >
                <span className="sr-only">Facebook</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com/tarhouni.exchange/?fbclid=IwY2xjawIchtRleHRuA2FlbQIxMAABHWErKUtehJC6ncQo06Wkl-vVeeRN8JuXDhfDFP__NbyU4UtwuQKmZ267Cw_aem_u4-8fJvpb24QC2XNPjznYw"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-yellow-500"
              >
                <span className="sr-only">Instagram</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

             {/* TikTok */}
             <li>
              <a href="https://www.tiktok.com/@tarhouni_exchange?_t=ZM-8tuyNMUmaoh&_r=1&fbclid=IwY2xjawIchvVleHRuA2FlbQIxMAABHcTkQZtbn7_0OXZx2VQvVV3AGjKYXT-ErNg_AI68As8PlObjifohUDKMlg_aem_4VykQ8XzaScwbX9tIDyGMw" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-yellow-500">
                <span className="sr-only">TikTok</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.338-.008-.674-.024-1.008a7.002 7.002 0 003.508-1.992 7.003 7.003 0 01-2.015.552 3.5 3.5 0 001.536-1.93 6.973 6.973 0 01-2.208.844A3.487 3.487 0 0016.5 7.5c0 .277.031.548.09.808A9.939 9.939 0 015.25 5.5a3.5 3.5 0 001.08 4.675 3.462 3.462 0 01-1.58-.437v.045a3.5 3.5 0 002.81 3.42 3.48 3.48 0 01-1.574.06 3.5 3.5 0 003.271 2.437A7.006 7.006 0 014 17.419 9.949 9.949 0 0012 20c7.732 0 12-6.373 12-11.92 0-.182-.004-.362-.013-.54A8.499 8.499 0 0022 6.418a7.025 7.025 0 01-2 .55z" />
                </svg>
              </a>
            </li>

          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
