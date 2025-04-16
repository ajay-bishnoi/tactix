"use client";
import Link from "next/link";
import { FC, MouseEvent } from "react";

interface CtaProps {
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  variant?: "redShadow" | "default" ;
  url?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  scroll?: boolean;
}

const buttonType = {
  default: "!font-display font-semibold text-sm sm:text-base !leading-125 capitalize bg-red sm:px-5 px-4 sm:py-[18px] py-3 transition-all duration-300 ease-linear cursor-pointer hover:bg-grey hover:text-red text-grey hover:scale-105 hover:brightness-110 hover:shadow-3xl",

  redShadow:`!font-display font-semibold text-sm sm:text-base capitalize hover:bg-grey bg-red hover:text-red text-grey md:px-6 px-5  transition-all duration-300 ease-linear cursor-pointer shadow-3xl md:h-[68px] h-[49px] text-nowrap max-w-[189px] hover:scale-105 hover:brightness-110`,

  disabled: "opacity-50 cursor-not-allowed",
};

const Cta: FC<CtaProps> = ({
  children,
  onClick,
  className = "",
  url,
  type = "button",
  disabled = false,
  scroll = false,
  variant = "default",
  ...props
}) => {
  const handleClick = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (onClick) {
      onClick(e);
    }
  };

  return url ? (
    <Link
      href={url}
      scroll={scroll}
      {...props}
      className={`${className} ${buttonType[variant]}`}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={handleClick}
      type={type}
      {...props}
      className={`${className} ${
        disabled ? buttonType["disabled"] : buttonType[variant]
      }`}
    >
      {children}
    </button>
  );
};

export default Cta;
