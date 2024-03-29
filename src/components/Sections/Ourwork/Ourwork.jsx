import SwiSwiperSlider from "@/components/Swiper/SwiperSlider";
import React, { Fragment } from "react";
import "./ourwork.scss";
import SwiperSlider from "@/components/Swiper/SwiperSlider";

export default function Ourwork() {
  return (
    <Fragment>
      <section className="work-section" id="Portfolio">
        <h1 className="work-heading">Our Work</h1>

        <section className="work-slider-container">
          <SwiperSlider type="WORK"/>
        </section>
      </section>
    </Fragment>
  );
}
