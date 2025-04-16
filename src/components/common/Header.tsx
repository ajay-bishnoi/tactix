"use client";
import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Icons from "./Icon";
import Cta from "../custom-ui/Cta";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
      useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,     
        });
      }, []);

  return (
    <div className="bg-cover bg-no-repeat bg-center bg-[url('/assets/images/webp/header-bg.webp')] after:absolute after:left-1/2 after:-translate-1/2 after:-top-[262px] after:w-full after:max-w-[695px] after:h-[484px] after:bg-light-grey after:blur-[200px] relative after:z-[5] z-10">
      <NavBar />
      <div data-aos="zoom-in" className="relative z-20 xl:pt-[164px] xl:pb-[216px] md:py-[160px] sm:py-[105px] max-sm:py-[63.5px]">
        <div className="container max-w-[1200px] mx-auto sm:px-[30px] px-6">
          <div className="flex flex-col w-full max-w-[350px] sm:max-w-[432px] md:max-w-[632px] mx-auto relative after:absolute after:left-1/2 after:-translate-x-1/2 after:max-w-[572px] after:top-[18px] after:blur-[100px] after:!h-[162px] after:bg-dark-black after:-z-10 after:w-full">
            <h1 className="text-center font-medium md:text-5xl lg:text-tiny-6xl sm:text-4xl text-3xl uppercase !font-display text-grey !leading-125 tracking-[0.04em]">
              Trade the Edge, Not the Noise!
            </h1>
            <p className="font-medium text-center text-grey !leading-133 text-sm sm:text-lg sm:mb-9 lg:mb-[44px] mb-8 mt-2.5">
              Tactix delivers statistical firepower to dominate the markets. Get
              notified at launch.
            </p>
            <div className="flex flex-col gap-5 justify-center">
              <div className="flex sm:flex-row flex-col gap-3 sm:gap-5 w-full sm:max-w-[585px] max-w-[240px] mx-auto">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="sm:max-w-[376px] max-w-[240px] w-full border outline-0 border-red md:p-6 sm:p-4 p-3 mx-auto bg-charcoal text-grey placeholder:text-grey font-medium text-base !leading-100"
                />
                <Cta
                  scroll={false}
                  className="sm:w-fit mx-auto max-sm:max-w-full w-full"
                  variant="redShadow"
                >
                  Lock In My Spot
                </Cta>
              </div>
              <div className="flex items-center gap-2.5 justify-center">
                <p className="font-normal italic text-sm text-center text-grey !leading-128 flex">
                  <Icons className="me-2" icon="tipIcon" />
                  Be the first to wield Tactix’s trading arsenal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
