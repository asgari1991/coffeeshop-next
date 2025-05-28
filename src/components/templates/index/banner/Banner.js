"use client"
import React from "react";
// import Swiper core and required modules
import { Navigation,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const Banner = () => {
  return (
    <Swiper
      // install Swiper modules
      rewind={true}
      autoplay={{delay:2000}}
      modules={[Navigation,Autoplay]}
      navigation={true}
      loop={true}
      className="home-slider"
    >
      <SwiperSlide>
        <img src="/images/etyopia.jpg" alt="slide" className="relative right-[1px]"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/82.jpg" alt="slide" className="relative right-[1px]"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/setpresso-slide.jpg" alt="slide" className="relative right-[1px]"/>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Banner;
