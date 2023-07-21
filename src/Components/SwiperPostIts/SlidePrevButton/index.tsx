import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useSwiper } from "swiper/react";

export const SlidePrevButton = ({ className }: any) => {
  const swiper = useSwiper();

  return (
    <button
      className={`w-12 h-12 cursor-pointer bg-gray-1 rounded-full text-white ${className}`}
      onClick={() => swiper.slidePrev()}
    >
      <ArrowLeftCircleIcon />
    </button>
  );
};
