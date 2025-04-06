"use client";

import { useEffect, useState } from "react";

const HeaderScrollEffect = ({ children }: { children: React.ReactNode }) => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`px-5 py-3 font-outfit sticky top-0 z-10 transition-all duration-300 ease-in-out
    ${
      scroll &&
      "bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 shadow-2xl"
    }`}
    >
      {children}
    </header>
  );
};

export default HeaderScrollEffect;
