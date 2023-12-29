// From https://github.com/CodeWithMarish/responsive-navbar
"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./navitem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav bg-background relative`}>
        <Link href={"/"}>
          <div className="absolute top-4 left-3 flex space-x-1.5">
            <Image
              className="rounded-lg"
              src="/pixel-logo.png"
              width={57}
              height={57}
              alt="Pixel Logo"
            />
            <Image 
              src="/sgd-text.svg"
              width={45}
              height={45}
              alt="Logo Text"
            />
          </div>

        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
