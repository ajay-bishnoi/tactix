"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NAVBAR_DATA_LIST } from "@/utils/helper";
import { usePathname } from "next/navigation";
import Cta from "../custom-ui/Cta";

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname, "text-orangetext-orangetext-orange");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,    
      });
    }, []);

  return (
    <div data-aos="fade-down" className="py-2 sm:py-[17px] w-full relative !z-50">
      <div className="container max-w-[1200px] mx-auto sm:px-[30px] px-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              className="md:w-[204px] md:h-[50px] sm:h-[30px] sm:w-[141px] h-5 w-[94px] pointer-events-none"
              src="/assets/images/png/logo.png"
              alt="logo"
              width={204}
              height={50}
            />
          </Link>
          <div className={`flex xl:gap-[34px] gap-7 items-center`}>
          <div
            className={`${
              isOpen ? "start-0" : "-start-full"
            } max-md:!z-[100] max-md:fixed max-lg:gap-6 max-md:top-0 max-md:w-full max-md:flex-col max-md:h-screen flex max-md:items-center max-md:justify-center max-md:bg-black transition-all duration-300 `}
          >
            <ul className="flex max-md:flex-col max-md:items-center sm:gap-5 gap-4 md:items-center md:gap-8">
              {NAVBAR_DATA_LIST.map((obj, index) => (
                <li key={index}>
                  <Link
                    scroll={obj.name === "features" ? true : false}
                    href={obj.url}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={`font-medium sm:text-base text-sm hover:text-red text-white duration-300 ease-linear !leading-131 uppercase `}
                  >
                    {obj.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
            <div className="flex xl:gap-[34px] gap-7 items-center">
              <Cta>
              Get Started
              </Cta>
              <button
                onClick={toggleMenu}
                className="sm:w-10 w-7 sm:h-10 h-7 flex items-center justify-center bg-white/20 rounded-md transition-all duration-300 ease-linear cursor-pointer md:hidden relative z-[110]"
              >
                {isOpen ? (
                  <div className="relative size-5 md:size-4 mt-4">
                    {/* Cross Icon */}
                    <div className="absolute top-0 left-0 w-full rounded-full h-0.5 bg-white transform rotate-45 transition-transform duration-300"></div>
                    <div className="absolute top-0 left-0 w-full rounded-full h-0.5 bg-white transform -rotate-45 transition-transform duration-300"></div>
                  </div>
                ) : (
                  <div className="w-[11.5px] h-[9.5px] flex flex-col gap-[2.5px]">
                    <span className="w-1/2 h-[1.5px] bg-white rounded-md transition-all duration-300"></span>
                    <span className="w-full h-[1.5px] bg-white rounded-md transition-all duration-300"></span>
                    <span className="w-1/2 h-[1.5px] bg-white rounded-md ms-auto transition-all duration-300"></span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
