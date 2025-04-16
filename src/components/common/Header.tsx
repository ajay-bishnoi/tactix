"use client";
import React from "react";
import NavBar from "./NavBar";
import Icons from "./Icon";
import Cta from "../custom-ui/Cta";

const Header = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-[url('/assets/images/png/header-bg.png')]">
      <NavBar />
      <div className="relative z-20 xl:pt-[164px] xl:pb-[216px] md:py-[170px] sm:py-[105px] max-sm:py-[63.5px]">
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
              <div className="flex sm:flex-row flex-col gap-5 w-full sm:max-w-[585px] max-w-[340px] mx-auto">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="max-w-[376px] w-full border outline-0 border-red md:p-6 p-4 bg-charcoal text-grey placeholder:text-grey font-medium text-base !leading-100"
                />
                <Cta
                  scroll={false}
                  className="w-fit mx-auto"
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
