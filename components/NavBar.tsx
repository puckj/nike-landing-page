"use client";

import Image from "next/image";
import { headerLogo } from "@/public/images";
import { navLinks } from "@/constants";
import Link from "next/link";
import { hamburger } from "@/public/icons";
import { useState } from "react";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  const [displayMobileNav, setDisplayMobileNav] = useState<boolean>(false);
  const displayMobileNavHandler = () => setDisplayMobileNav((prev) => !prev);

  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <Link href="/">
            <Image src={headerLogo} alt="Logo" width={130} height={29} />
          </Link>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={displayMobileNavHandler}
          >
            <Image src={hamburger} alt="Hamburger" width={25} height={25} />
          </div>
        </nav>
      </header>
      <MobileNavBar
        displayMobileNav={displayMobileNav}
        displayMobileNavHandler={displayMobileNavHandler}
      />
    </>
  );
};

export default NavBar;
