import { FEATURE_DATA } from "@/utils/helper";
import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div id="feature" className="flex flex-col">
      {FEATURE_DATA.map((obj, index) => (
        <div
          key={index}
          className={`!bg-cover bg-no-repeat bg-center ${
            index === 1
              ? "md:!pt-[96px] md:!pb-[110px] sm:py-20 py-14 bg-[url('/assets/images/webp/feature-bg-03.webp')]"
              : index === 2
              ? "!pt-[55px] md:!pb-[112px] sm:!pb-20 pb-14 bg-[url('/assets/images/webp/feature-bg-02.webp')]"
              :  index === 0 ? "sm!pt-[84px] pt-14 !pb-[28px]" : ""
          }`}
        >
          <div className="container max-w-[1200px] mx-auto sm:px-[30px] px-6">
            <div className={`flex flex-col `}>
              <div
                className={`flex flex-col lg:flex-row justify-between ${
                  index % 2 ? "lg:flex-row-reverse" : ""
                } md:gap-10 gap-8 items-center `}
              >
                <div className="max-w-[536px] w-full">
                    <div
                      className={`xl:max-w-[500px] w-full lg:max-w-[500px] max-custom-md:z-10 max-custom-md:relative md:max-w-[478px] flex flex-col gap-4 lg:mx-0 mx-auto `}
                    >
                      <h2 className="max-w-[400px] font-display lg:text-start text-center lg:mx-0 mx-auto font-medium md:text-5xl lg:text-tiny-6xl sm:text-4xl text-3xl !leading-125 tracing-[0.04em] text-white uppercase">
                        {obj.title} <span className="px-6 py-2 clip-angled bg-red">{obj.redTitle}</span>{" "}
                        <span>{obj.subTitle}</span>
                      </h2>
                      <p
                        className={`font-normal text-base lg:mx-0 mx-auto lg:text-start text-center sm:text-lg !leading-133 text-grey ${
                          index === 1 ? "max-w-[485px]" : ""
                        }`}
                      >
                        {obj.content}
                      </p>
                    </div>
                </div>
                <div className="max-w-[360px] sm:max-w-[470px] sm:h-[432px] lg:max-w-[485px] lg:h-[430px] xl:h-[505px] xl:max-w-[550px] w-full max-xl:justify-center flex justify-start">
                  <div className="xl:w-[550px] xl:h-[505] ">
                    <Image
                      src={obj.image}
                      alt="project-image"
                      width={550}
                      height={506}
                      className="!w-full !h-full rounded-[20px] border border-off-grey"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
