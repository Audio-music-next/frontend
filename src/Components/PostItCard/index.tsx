"use client";

import "swiper/css";
import { postIts } from "@/constants/postIts";
import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";

export const SlidePrevButton = ({ className }: any) => {
  const swiper = useSwiper();

  return (
    <button
      className={`w-12 h-12 cursor-pointer bg-gray-5 p-1 rounded-radius-1 text-gray-1 ${className}`}
      onClick={() => swiper.slidePrev()}
    >
      <ArrowLeftCircleIcon />
    </button>
  );
};

export const SlideNextButton = ({ className }: any) => {
  const swiper = useSwiper();

  return (
    <button
      className={`w-12 h-12 cursor-pointer bg-gray-5 p-1 rounded-radius-1 text-gray-1 ${className}`}
      onClick={() => swiper.slideNext()}
    >
      <ArrowRightCircleIcon />
    </button>
  );
};

export const PostItCard = () => {
  return (
    <div>
      {/* <ul className="flex gap-8 w-full overflow-x-auto items-center pb-5 px-[5%] xl:overflow-x-hidden  justify-start xl:justify-center">
        {postIts.map((post) => (
          <li
            key={post.title}
            className="min-w-[240px] min-h-[200px] flex flex-col gap-2 relative rounded-radius-2 bg-random-1 p-4 pt-3"
          >
            <MusicalNoteIcon className="text-gray-5 absolute top-3 left-3 w-7 h-7" />
            <h5 className="ml-8 text-heading-5 font-600 text-gray-1">
              {post.title}
            </h5>
            <p className="text-body-2 text-gray-1">{post.text}</p>
          </li>
        ))}
      </ul> */}

      <Swiper
        className="relative"
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SlidePrevButton className="absolute top-[45%] left-0 z-50" />
        {postIts.map((post) => (
          <SwiperSlide key={post.title}>
            <li
              key={post.title}
              className="max-w-[240px] max-h-[200px] flex flex-col gap-2 relative rounded-radius-2 bg-random-1 p-4 pt-3 my-0 mx-auto"
            >
              <MusicalNoteIcon className="text-gray-5 absolute top-3 left-3 w-7 h-7" />
              <h5 className="ml-8 text-heading-5 font-600 text-gray-1">
                {post.title}
              </h5>
              <p className="text-body-2 text-gray-1">{post.text}</p>
            </li>
          </SwiperSlide>
        ))}
        <SlideNextButton className="absolute top-[45%] right-0 z-50" />
      </Swiper>
    </div>
  );
};
