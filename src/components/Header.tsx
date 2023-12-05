"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NaviconRound from "@/assets/img/navicon-round.svg";
import CloseRound from "@/assets/img/close-round.svg";

const NAV_LINKS = [
  {
    path: "#features",
    name: "Food Delivery",
  },
  {
    path: "#how-it-work",
    name: "How it works",
  },
  {
    path: "#cities",
    name: "Our cities",
  },
  {
    path: "#sign-up",
    name: "Sign Up",
  },
  {
    path: "#contact",
    name: "Contact",
  },
];

export const Header = () => {
  const header = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    const windowPosition = window.scrollY > 0;
    windowPosition ? setIsScroll(true) : setIsScroll(false);
    if (header.current) {
      header.current.classList.toggle("nav-scrolled", windowPosition);
    }
  };

  const handleOpen = () => {
    header.current?.classList.toggle("open", !isOpen);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);

  return (
    <header className="fixed z-50 w-full text-white transition-all duration-300" ref={header}>
      <div className="container flex items-center justify-between h-20 lg:h-auto lg:py-4">
        {isScroll || isOpen ? <Image src="/assets/img/logo.png" alt="Logo Omnifood" width={70} height={70} /> : <Image src="/assets/img/logo-white.png" alt="Logo Omnifood" width={70} height={70} className="lg:w-28" />}
        <div className="lg:hidden" onClick={handleOpen}>
          {isOpen ? <CloseRound className="w-8" /> : <NaviconRound className="w-8" />}
        </div>

        <nav className={`w-full absolute duration-300 transition-all left-0 bg-white shadow-md text-black top-20 lg:visible lg:opacity-100 lg:relative lg:top-0 lg:bg-transparent lg:shadow-none lg:text-inherit ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
          <ul className="flex flex-col items-center gap-4 py-4 uppercase lg:flex-row lg:justify-end lg:gap-8">
            {NAV_LINKS.map(({ path, name }, index) => (
              <li className="" key={index}>
                <Link href={path} className="tracking-wider relative transition-all duration-150 hover:text-primary  after:absolute after:block after:transition-all after:duration-150 after:h-[2px] after:left-4 after:right-4 after:bg-primary after:-bottom-2 after:rounded-full after:scale-0 after:hover:scale-100" onClick={handleOpen}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
