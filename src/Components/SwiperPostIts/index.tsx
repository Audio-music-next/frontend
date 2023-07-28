import { postIts } from "@/constants/postIts";
import { SlidePrevButton } from "./SlidePrevButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import { SlideNextButton } from "./SliderNextButton";

interface iSwiperPostIts {
  slidesPerView: number;
}

export const SwiperPostIts = ({ slidesPerView }: iSwiperPostIts) => {
  return (
    <Swiper
      className="sm:px-12"
      spaceBetween={30}
      slidesPerView={slidesPerView}
    >
      {slidesPerView !== 4 && (
        <SlidePrevButton className="w-8 h-8 cursor-pointer bg-gray-1 rounded-full text-white absolute top-[42%] left-0 z-50 sm:w-12:h-12:top-[40%] dark:bg-gray-8 dark:text-gray-0" />
      )}
      {postIts.map((post) => (
        <SwiperSlide key={post.title}>
          <li
            key={post.title}
            className=" w-[200px] h-[220px] flex flex-col gap-2 rounded-radius-2 relative bg-gray-5 p-4 pt-3 my-0 mx-auto min-[400px]:w-[240px] xl:mx-0:left-7 dark:bg-gray-3"
          >
            <MusicalNoteIcon className="text-gray-5 absolute top-3 left-3 w-7 h-7" />
            <h5 className="ml-8 text-body-1 font-600 text-gray-1 sm:text-heading-5 dark:text-gray-9">
              {post.title}
            </h5>
            <p className="text-body-2 text-gray-1 dark:text-gray-9">
              {post.text}
            </p>
          </li>
        </SwiperSlide>
      ))}
      {slidesPerView !== 4 && (
        <SlideNextButton className="w-8 h-8 cursor-pointer bg-gray-1 rounded-full text-white absolute top-[42%] right-0 z-50 sm:w-12:h-12:top-[40%] dark:bg-gray-8 dark:text-gray-0" />
      )}
    </Swiper>
  );
};
