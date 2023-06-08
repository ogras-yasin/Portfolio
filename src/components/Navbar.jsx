import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, yasin_logo, menu, close } from "../assets";

// csss okunmuyor tailwind importer automatiquement je pense

const Navbar = () => {
  // <div>Navbar s</div>;
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center maw-w-7xl mx-auto"></div>
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        {/* ABI COK KARISIK BEA  */}
        {/* <img src={yasin_logo} alt="logo" className="w-48 h-48 object-contain  " /> */}
        <img src={logo} alt="logo" className="w-9 h-9 object-contain  " />
        {/* <p className="text-white text-[18px]"> */}
        <p className="underline decoration-sky-500">
          Yasin <span>| Développeur web</span>
        </p>
      </Link>
      {/* <p className="text-red-500">asdsaa</p> */}
      <ul className="list-none  hidden sm:flex flex-row gap-10">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              {/* // text beyaz olmadi 34.00dk  */}
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
            // plein de css a l'interier de jsx
          );
        })}
        <li>do you copy me</li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer "
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
