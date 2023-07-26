import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { useSwiper } from "swiper/react";

export const SlideNextButton = ({ className }: any) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slideNext()}>
      <ArrowRightCircleIcon />
    </button>
  );
};
