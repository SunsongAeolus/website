import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../public/logo.png";
import Image from "next/image";

export default function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-50 ${
        !top && "bg-gray-900 shadow-lg backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="mr-4 flex-shrink-0">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                className="mx-auto h-16 w-auto"
                src={Logo}
                alt="logo"
              ></Image>
            </Link>
          </div>

          {/* Site navigation */}
        </div>
      </div>
    </header>
  );
}
