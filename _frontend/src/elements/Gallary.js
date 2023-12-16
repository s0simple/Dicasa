import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./slide.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
// import { images } from "./imagelinks";

const Gallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((data, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-full"
              src={`http://localhost:5000/${data.filePath}`}
              alt=""
            />
          </SwiperSlide>
        ))}
        {/* {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img className="w-full max-h-full" src={item.value} alt="" />
          </SwiperSlide>
        ))} */}

        {/* <SwiperSlide>something</SwiperSlide> */}
      </Swiper>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img className="w-full h-full" src={item.cloudinaryURL} alt="" />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>something</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Gallery;
