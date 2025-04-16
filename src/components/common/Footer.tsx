import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cta from "../custom-ui/Cta";
import Icons from "./Icon";
import { FOOTER_ICONS_LIST } from "@/utils/helper";

const Footer = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-[url('/assets/images/webp/footer-bg.webp')] xl:pt-[99px] md:pt-20 pt-14 pb-8">
      <div className="container max-w-[1200px] mx-auto sm:px-[30px] px-6">
        <div className="flex flex-col gap-10">
          <div className="flex items-center md:flex-row flex-col flex-wrap justify-between gap-6">
            <Link href="/">
              <Image
                className="w-[210px] h-[60px] pointer-events-none"
                src="/assets/images/webp/footer-logo.webp"
                alt="logo"
                width={210}
                height={60}
              />
            </Link>
            <div className="flex flex-col gap-5 ">
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
                <span>
                  <Icons icon="tipIcon" />
                </span>
                <p className="font-normal italic text-sm text-center text-grey !leading-128">
                  Be the first to wield Tactix’s trading arsenal
                </p>
              </div>
            </div>
            <div className="lg:flex flex-col gap-[22px] items-end hidden ">
              <p className="font-display font-normal text-lg !leading-127 tracking-[0.04em] uppercase text-grey text-right">
                Join the Tactix Crew
              </p>
              <div className="flex gap-4">
                {FOOTER_ICONS_LIST.map((item, index) => (
                  <Link
                    key={index}
                    className="group transition-all duration-300 ease-linear min-w-[33px] bg-red hover:bg-white h-[33px] rounded-4xl flex items-center justify-center"
                    target="_blank"
                    href={item.link}
                  >
                    <span className="max-sm:!size-6">
                      <Icons
                        icon={item.icons}
                        iconClass={`group-hover:fill-red`}
                        className=""
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[22px] md:items-start items-center lg:hidden">
            <p className="font-display font-normal text-lg !leading-100 tracking-[0.04em] uppercase text-grey text-start">
              Join the Tactix Crew
            </p>
            <div className="flex gap-4">
              {FOOTER_ICONS_LIST.map((item, index) => (
                <Link
                  key={index}
                  className="group transition-all duration-300 ease-linear min-w-[33px] bg-red hover:bg-white h-[33px] rounded-4xl flex items-center justify-center hover:shadow-3xl"
                  target="_blank"
                  href={item.link}
                >
                  <span className="max-sm:!size-6">
                    <Icons
                      icon={item.icons}
                      iconClass={`group-hover:fill-red`}
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="!font-display font-normal text-base !leading-125 tracking-[0.04em] uppercase text-center mt-12 sm:mt-16 md:mt-20 lg:mt-[100px] xl:mt-[126px] text-grey">
          copyright @ 2025 | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
