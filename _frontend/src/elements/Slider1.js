import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import SlideItem from "./slideItem";
import { Pagination, Navigation, Lazy, Controller } from "swiper";

const images = [
  {
    src: "https://picsum.photos/320/240?v1",
  },
  {
    src: "https://picsum.photos/320/240?v2",
  },
  {
    src: "https://picsum.photos/320/240?v3",
  },
  {
    src: "https://picsum.photos/320/240?v4",
  },
];

const Slider1 = () => {
  return (
    <div>
      <div class="container">
        <header>
          <h1 style="text-align: center;">
            <a href="https://idangero.us/swiper/" target="_blank">
              Swiper.js 7
            </a>{" "}
            Gallery with center & Clickable thumbs
          </h1>
          {/* <p style="text-align: center;"><strong>Custom CSS styles: click on the big (top) image (50% right-prev / 50% left-next) ==> </strong> Go to next/prev slide (Like the classic lightbox gallery UX pattern (Great UX on desktop) (Works only from swiper v5+) **disable on mobile</p> */}
        </header>
        {/* <!-- top gallery --> */}
        <main class="swiper gallery">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="swiper-zoom-container">
                <img src="https://picsum.photos/id/14/1600/1000" />
              </div>
              <div>Image 1</div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-zoom-container">
                <img src="https://picsum.photos/id/695/1600/1000" />
              </div>
              <div>Image 2</div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-zoom-container">
                <img src="https://picsum.photos/id/12/1600/1000" />
              </div>
              <div>Image 3</div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-zoom-container">
                <img src="https://picsum.photos/id/119/1600/1000" />
              </div>
              <div>Image 4</div>
            </div>
          </div>
          {/* <!-- Add Arrows --> */}
          <div
            title="next"
            class="swiper-button-next swiper-button-white"
          ></div>
          <div
            title="prev"
            class="swiper-button-prev swiper-button-white"
          ></div>
        </main>

        {/* <!-- thumbs --> */}
        <nav class="swiper gallery-thumbs">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://picsum.photos/id/14/600/300" />
              <div>thumbs 1</div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-zoom-container">
                <img src="https://picsum.photos/id/695/300/200" />
              </div>
              <div>thumbs 2</div>
            </div>
            <div class="swiper-slide">
              <img src="https://picsum.photos/id/12/400/400" />
              <div>thumbs 3</div>
            </div>
            <div class="swiper-slide">
              <img src="https://picsum.photos/id/119/300/200" />
              <div>thumbs 4</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Slider1;
