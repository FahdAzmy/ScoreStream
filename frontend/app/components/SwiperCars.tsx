"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MaxWidthWrapper from "./defaults/MaxWidthWrapper";
import Image from "next/image";

function SwiperCars({
  items,
  paginationImages,
  className,
}: {
  items: { src: string; card: React.ReactNode; imgclasses?: string }[];
  paginationImages?: boolean;
  className?: string;
}) {
  return (
    <div className="flex mt-8 flex-col gap-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className={`w-full ${className || "h-96"}`}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map(({ card }, i) => (
          <SwiperSlide key={i}>{card}</SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center gap-4">
        {paginationImages &&
          items.map(({ src, imgclasses }, i) => (
            <div
              key={i}
              className="w-full cursor-pointer hover:-translate-y-5 z-10 hover:opacity-90 duration-150 hover:shadow-md h-40 rounded-xl max-w-lg overflow-hidden relative"
            >
              <Image
                alt={"image-pagination"}
                src={src}
                fill
                className={`object-cover ${imgclasses || ""}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SwiperCars;
