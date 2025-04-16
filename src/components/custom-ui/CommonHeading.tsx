import React from "react";
interface HeadingProps {
  text: string;
  textClass?: string;
  rightLine?: string;
  leftLine?: string;
}

const CommonHeading = ({ text,leftLine, rightLine, textClass }: HeadingProps) => {
  return (
    <div className="flex gap-4 items-center">
      <span className={`w-[30px] max-sm:w-[20px] bg-orange h-0.5 ${leftLine}`}></span>
      <h2
        className={`text-tiny-4xl max-sm:text-2xl font-bold leading-134 text-orange ${textClass}`}
      >
        {text}
      </h2>
      <span className={`bg-orange h-0.5 ${rightLine}`}></span>
    </div>
  );
};

export default CommonHeading;
