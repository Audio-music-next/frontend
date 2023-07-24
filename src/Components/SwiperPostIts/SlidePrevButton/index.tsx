import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useSwiper } from "swiper/react";

export const SlidePrevButton = ({ className }: any) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slidePrev()}>
      <ArrowLeftCircleIcon />
    </button>
  );
};
