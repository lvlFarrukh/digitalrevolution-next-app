import React from "react";
import "./client.css";
import SwiperSlider from "@/components/Swiper/SwiperSlider";

export default function Clients() {
  return (
    <section class="ourclient-section">
      <section class="ourClient-section-heading">
        <h3>We are ready to uplift your</h3>
        <h3 class="red-color-font">brand like many others in</h3>
        <h3>the past!</h3>
      </section>

      <section className='client-slider-container'>
        <SwiperSlider type="CLIENT" />
      </section>
    </section>
  );
}
