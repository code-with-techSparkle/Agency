'use client';
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuActive((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = burgerMenuActive ? "hidden" : "auto";
  }, [burgerMenuActive]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants: Variants = {
    open: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        when: "afterChildren",
      },
    },
  };

  const listItemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.42, 0, 0.58, 1] },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${burgerMenuActive
          ? ""
          : scrolled
            ? "bg-white/70 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
    >
      <div className="flex justify-between items-center px-10 py-6 max-md:px-6 max-sm:px-4">
        <Link href="/" className="flex items-center gap-2 z-50">
          <span
            className={`text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg font-semibold transition-colors duration-300 ${burgerMenuActive ? "text-white" : "text-black"
              }`}
          >
            M.Tuaha
          </span>
        </Link>

        <div
          className="w-10 max-lg:w-7 max-lg:h-5 h-6 relative cursor-pointer z-50"
          onClick={toggleBurgerMenu}
        >
          <span
            className={`absolute h-0.5 w-full left-0 transform transition-all duration-300 ${burgerMenuActive ? "top-1/2 rotate-45 bg-white" : "top-0 bg-black"
              }`}
          ></span>
          <span
            className={`absolute h-0.5 w-full left-0 transition-all duration-300 ${burgerMenuActive
                ? "opacity-0 bg-white top-1/2"
                : "top-1/2 -translate-y-1/2 bg-black"
              }`}
          ></span>
          <span
            className={`absolute h-0.5 w-full left-0 transform transition-all duration-300 ${burgerMenuActive
                ? "top-1/2 -rotate-45 bg-white"
                : "bottom-0 bg-black"
              }`}
          ></span>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={burgerMenuActive ? "open" : "closed"}
        className={`fixed inset-0 bg-black transition-opacity duration-500 ${burgerMenuActive
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        <motion.ul
          className="absolute top-[30vh] left-1/2 -translate-x-1/2 text-center"
          variants={menuVariants}
        >
          {["Home", "Projects", "Our Mission", "contact"].map((text, idx) => {
            const path = text === "Home" ? "/" : `/${text.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <motion.li
                key={idx}
                variants={listItemVariants}
                className="py-4 text-white text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold capitalize hover:scale-105 transition-transform duration-500"
                onClick={() => setBurgerMenuActive(false)}
              >
                <Link href={path}>{text}</Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
