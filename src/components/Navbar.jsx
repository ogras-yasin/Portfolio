import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, yasin_logo, menu, close } from "../assets";

// csss okunmuyor tailwind importer automatiquement je pense

const Navbar = () => {
  // <div>Navbar s</div>;
  const [active, setActive] = useState("");

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
        {/* <img src={yasin_logo} alt="logo" className="h-[50px] w-[50px]  " /> */}
        <img src={yasin_logo} alt="logo" className="w-9 h-9 object-contain  " />
        {/* w-2 h-2 object-contain */}
        {/* <p className="text-white text-[18px]"> */}
        <p className="underline decoration-sky-500">
          Yasin <span>| Développeur web</span>
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
