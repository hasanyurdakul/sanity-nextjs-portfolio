import React from "react";
import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" container shadow-xl rounded-lg bg-[background]   w-full max-w-2xl mx-auto mt-0 py-3 px-3 relative lg:mb-5">
      <div className="max-w-2xl w-full mx-auto p-4 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <span className="flex items-center justify-center sm:justify-start text-sm text-gray-500 dark:text-gray-400">
            © 2024 by&nbsp;
            <Link className="hover:underline" href={"/"}>
              hasan yurdakul
            </Link>
            &nbsp; made with&nbsp;
            <Heart className="size-4 text-primary" />
          </span>
          <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li className="mb-2 md:mb-0">
              <Link href="/" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li className="mb-2 md:mb-0">
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
