import React, { memo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image from "../../assets/images/hero__img.png";
import { GoChevronRight } from "react-icons/go";
const Hero = () => {
  return (
    <>
      <div className="hero container">
        <div className="intro">
          <ul>
            <li className="link">
              Woman's Fashion <GoChevronRight className="icon" />
            </li>
            <li className="link">Men's Fashion</li>
            <li className="link">Electronics</li>
            <li className="link">Home & Lifestyle</li>
            <li className="link">Medicine</li>
            <li className="link">Sports & Outdoor</li>
            <li className="link">Baby's & Toys</li>
            <li className="link">Groceries & Pets</li>
            <li className="link">Health & Beauty</li>
          </ul>
        </div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img src={image} alt="hero-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="hero-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="hero-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="hero-image" />
          </SwiperSlide>
        </Swiper>
      </div>
      <br />
      <br />
      <br />
      <hr className="container" />
    </>
  );
};

export default memo(Hero);
