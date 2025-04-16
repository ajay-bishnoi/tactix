import React, { ReactElement } from "react";
interface LoginCardProps {
  icon: string;
  className?: string;
  fill?: string;
  stroke?: string;
  iconClass?: string;
}

const Icons: React.FC<LoginCardProps> = ({
  icon,
  className,
  iconClass,
}) => {
  const iconList = {
    discordIcon: (
      <svg
        className="tranition-all duration-300 ease-linear"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`transition-all duration-300 ease-linear ${iconClass}`}
          d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.9736 4.00038 14.9485 4.01116 14.93 4.03C14.75 4.36 14.54 4.79 14.4 5.12C12.809 4.88015 11.191 4.88015 9.6 5.12C9.46 4.78 9.25 4.36 9.06 4.03C9.05 4.01 9.02 4 8.99 4C7.49 4.26 6.06 4.71 4.72 5.33C4.71 5.33 4.7 5.34 4.69 5.35C1.97 9.42 1.22 13.38 1.59 17.3C1.59 17.32 1.6 17.34 1.62 17.35C3.42 18.67 5.15 19.47 6.86 20C6.89 20.01 6.91999 20 6.93 19.98C7.33 19.43 7.69 18.85 8 18.24C8.02 18.2 8 18.16 7.96 18.15C7.39 17.93 6.85 17.67 6.32 17.37C6.28 17.35 6.27999 17.29 6.31 17.26C6.42 17.18 6.52999 17.09 6.64 17.01C6.66 16.99 6.69 16.99 6.71 17C10.15 18.57 13.86 18.57 17.26 17C17.28 16.99 17.31 16.99 17.33 17.01C17.44 17.1 17.55 17.18 17.66 17.27C17.7 17.3 17.7 17.36 17.65 17.38C17.13 17.69 16.58 17.94 16.01 18.16C15.97 18.17 15.96 18.22 15.97 18.25C16.29 18.86 16.65 19.44 17.04 19.99C17.07 20 17.1 20.01 17.13 20C18.85 19.47 20.58 18.67 22.38 17.35C22.4 17.34 22.41 17.32 22.41 17.3C22.85 12.77 21.68 8.84 19.31 5.35C19.3 5.34 19.29 5.33 19.27 5.33ZM8.52 14.91C7.49 14.91 6.63 13.96 6.63 12.79C6.63 11.62 7.47 10.67 8.52 10.67C9.58 10.67 10.42 11.63 10.41 12.79C10.41 13.96 9.57 14.91 8.52 14.91ZM15.49 14.91C14.46 14.91 13.6 13.96 13.6 12.79C13.6 11.62 14.44 10.67 15.49 10.67C16.55 10.67 17.39 11.63 17.38 12.79C17.38 13.96 16.55 14.91 15.49 14.91Z"
          fill="#E5E5E5"
        />
      </svg>
    ),
    youtubeIcon: (
      <svg
        className="tranition-all duration-300 ease-linear"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`transition-all duration-300 ease-linear ${iconClass}`}
          d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
          fill="#E5E5E5"
        />
      </svg>
    ),
    twiterIcon: (
      <svg
        className="tranition-all duration-300 ease-linear"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`transition-all duration-300 ease-linear ${iconClass}`}
          d="M1 2H3.5L18.5 22H16L1 2ZM5.5 2H8L23 22H20.5L5.5 2Z"
          fill="#E5E5E5"
        />
        <path
          className={`transition-all duration-300 ease-linear ${iconClass}`}
          d="M3 2H8V4H3V2ZM16 22H21V20H16V22Z"
          fill="#E5E5E5"
        />
        <path
          className={`transition-all duration-300 ease-linear ${iconClass}`}
          d="M18.5 2H22L5 22H1.5L18.5 2Z"
          fill="#E5E5E5"
        />
      </svg>
    ),
    tipIcon: (
      <svg
      className={`${className}`}
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7262 8.459H10.0595V6.79234H11.7262M11.7262 15.1257H10.0595V10.1257H11.7262M10.8928 2.62567C9.79849 2.62567 8.71486 2.84122 7.70381 3.26001C6.69277 3.6788 5.77411 4.29263 5.00029 5.06645C3.43748 6.62925 2.55951 8.74887 2.55951 10.959C2.55951 13.1691 3.43748 15.2888 5.00029 16.8516C5.77411 17.6254 6.69277 18.2392 7.70381 18.658C8.71486 19.0768 9.79849 19.2923 10.8928 19.2923C13.103 19.2923 15.2226 18.4144 16.7854 16.8516C18.3482 15.2888 19.2262 13.1691 19.2262 10.959C19.2262 9.86466 19.0106 8.78102 18.5918 7.76998C18.173 6.75893 17.5592 5.84027 16.7854 5.06645C16.0116 4.29263 15.0929 3.6788 14.0819 3.26001C13.0708 2.84122 11.9872 2.62567 10.8928 2.62567Z"
          fill="#E5E5E5"
        />
      </svg>
    ),

    backToTop: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M83.0234 74.6016L60.807 57.6908C60.2048 57.2324 59.3686 57.2396 58.7743 57.7084L37.36 74.6016"
          stroke="#FCFCFC"
          strokeWidth="5"
          strokeLinecap="round"
          className="aNiGpCen_1"
        ></path>
        <path
          d="M83.0234 62.1016L60.807 45.1908C60.2048 44.7324 59.3686 44.7396 58.7743 45.2084L37.36 62.1016"
          stroke="#FCFCFC"
          strokeWidth="5"
          strokeLinecap="round"
        ></path>
      </svg>
    ),
  };
  const addClassName = (
    icon: ReactElement<SVGElement>
  ): ReactElement<SVGElement> => {
    return React.cloneElement(icon, {
      className: (className || "") + " custom-class",
    });
  };
  const iconsNew = Object.fromEntries(
    Object.entries(iconList).map(([key, icon]) => [key, addClassName(icon)])
  );
  return iconsNew[icon] || null;
};

export default Icons;
