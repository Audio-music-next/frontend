import Image from "next/image";
import LogoImage from "../../assents/image/logo.png";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-1">
        <div className="">
          <div className="w-3 h-[14px] bg-gray-3 dark:bg-gray-8 mb-[3px]"></div>
          <div className="w-3 h-3 rounded-full bg-gray-3 dark:bg-gray-8 "></div>
        </div>
        <div className="">
          <div className="w-3 h-[14px] bg-gray-3 dark:bg-gray-8 mb-[3px]"></div>
          <div className="w-3 h-3 rounded-full bg-gray-3 dark:bg-gray-8 "></div>
        </div>
      </div>
      <p className="text-heading-5 font-600 text-gray-2 dark:text-gray-6 ">
        MetalVerse
      </p>
    </div>
  );
};
