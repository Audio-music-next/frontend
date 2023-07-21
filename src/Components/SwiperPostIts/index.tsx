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
      className=""
      spaceBetween={30}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slidesPerView !== 4 && (
        <SlidePrevButton className="absolute top-[40%] left-0 z-50" />
      )}
      {postIts.map((post) => (
        <SwiperSlide key={post.title}>
          <li
            key={post.title}
            className=" max-w-[240px] max-h-[200px] flex flex-col gap-2 rounded-radius-2 relative bg-random-1 p-4 pt-3 my-0 mx-auto xl:mx-0:left-7"
          >
            <MusicalNoteIcon className="text-gray-5 absolute top-3 left-3 w-7 h-7" />
            <h5 className="ml-8 text-heading-5 font-600 text-gray-1">
              {post.title}
            </h5>
            <p className="text-body-2 text-gray-1">{post.text}</p>
          </li>
        </SwiperSlide>
      ))}
      {slidesPerView !== 4 && (
        <SlideNextButton className="absolute top-[40%] right-0 z-50" />
      )}
    </Swiper>
  );
};
