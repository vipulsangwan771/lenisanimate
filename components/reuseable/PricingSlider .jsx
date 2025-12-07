"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const PricingSlider = ({ children }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={2}        // ✅ 2 cards visible
      slidesPerGroup={1}       // ✅ move 1 card at a time
      breakpoints={{
        0: {
          slidesPerView: 1,    // ✅ mobile → 1 card
        },
        640: {
          slidesPerView: 2,    // ✅ sm & md → 2 cards
        },
      }}
    >
      {children.map((card, index) => (
        <SwiperSlide key={index}>{card}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PricingSlider;
