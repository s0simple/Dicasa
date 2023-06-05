import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./slide.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { images } from "./imagelinks";

const Gallery = () => {
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
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img className="w-full max-h-full" src={item.value} alt="" />
          </SwiperSlide>
        ))}
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
            <img className="w-full max-h-full" src={item.value} alt="" />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>something</SwiperSlide> */}
      </Swiper>
    </>
  );
  //   const [gallerySwiper, getGallerySwiper] = useState(null);
  //   const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  //   const gallerySwiperParams = {
  //     getSwiper: getGallerySwiper,
  //     spaceBetween: 10,
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   };

  //   const thumbnailSwiperParams = {
  //     getSwiper: thumbnailSwiper,
  //     spaceBetween: 10,
  //     centeredSlides: true,
  //     slidesPerView: "auto",
  //     touchRatio: 0.2,
  //     slideToClickedSlide: true,
  //   };

  //   useEffect(() => {
  //     if (
  //       gallerySwiper !== null &&
  //       gallerySwiper.controller &&
  //       thumbnailSwiper !== null &&
  //       thumbnailSwiper.controller
  //     ) {
  //       gallerySwiper.controller.control = thumbnailSwiper;
  //       thumbnailSwiper.controller.control = gallerySwiper;
  //     }
  //   }, [gallerySwiper, thumbnailSwiper]);

  //   return (
  //     <div>
  //       <Swiper {...gallerySwiperParams}>
  //         <div
  //           class="swiper-slide bg-black w-60 h-60"
  //           //  style="background-image:url(http://lorempixel.com/600/600/nature/1)"
  //         ></div>
  //         <div
  //           class="swiper-slide bg-blue-500 w-60 h-60"
  //           //  style="background-image:url(http://lorempixel.com/600/600/nature/2)"
  //         ></div>
  //         <div
  //           class="swiper-slide bg-green-500 w-60 h-60 "
  //           //  style="background-image:url(http://lorempixel.com/600/600/nature/3)"
  //         ></div>
  //         <div
  //           class="swiper-slide bg-red-500 w-60 h-60"
  //           //   style="background-image:url(http://lorempixel.com/600/600/nature/4)"
  //         ></div>
  //         <div
  //           class="swiper-slide bg-yellow-500 w-60 h-60"
  //           //  style="background-image:url(http://lorempixel.com/600/600/nature/5)"
  //         ></div>
  //       </Swiper>
  //       <Swiper {...thumbnailSwiperParams}>
  //         <div
  //           class="swiper-slide bg-black w-60 h-60"
  //           //   style="background-image:url(http://lorempixel.com/600/600/nature/1)"
  //         ></div>
  //         <div
  //           class="swiper-slide bg-blue-500 w-60 h-60"
  //           //   style="background-image:url(http://lorempixel.com/600/600/nature/2)"
  //         ></div>
  //         <div
  //           class="swiper-slide bg-green-500 w-60 h-60"
  //           // style="background-image:url(http://lorempixel.com/600/600/nature/3)"
  //         ></div>
  //         <div
  //           class="swiper-slide bg-red-500 w-60 h-60"
  //           // style="background-image:url(http://lorempixel.com/600/600/nature/4)"
  //         ></div>
  //         <div
  //           class="swiper-slide bg-yellow-500 w-60 h-60"
  //           //   style="background-image:url(http://lorempixel.com/600/600/nature/5)"
  //         ></div>
  //       </Swiper>
  //     </div>
  //   );
};

export default Gallery;
