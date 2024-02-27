import SwiSwiperSlider from "@/components/Swiper/SwiperSlider";
import React, { Fragment } from "react";
import "./ourwork.css";

export default function Ourwork() {

    
  return (
    <Fragment>
      <section class="work-section">
        <h1 class="work-heading">Our Work</h1>

        <div class="container">
          <div class="container-inner">
            <div class="slider swiper" id="js-slider">
              <div class="slider__list swiper-wrapper" id="work-slider"></div>
            </div>
            <div class="scroll swiper-scrollbar" id="js-slider__scroll">
              <div class="scroll__growbar" id="js-slider__scrollGrowbar"></div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
