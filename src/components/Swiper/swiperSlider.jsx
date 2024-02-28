"use client";

import Carousel from "react-elastic-carousel";
import { mockDataOurWork, mockDataourWork } from "../../../mockdata";
import "./SwiSwiperSlider.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 220, itemsToShow: 1, itemsToScroll: 1 },
  { width: 440, itemsToShow: 2 },
  { width: 660, itemsToShow: 3 },
  { width: 880, itemsToShow: 4 },
  { width: 1000, itemsToShow: 5 },
  { width: 1220, itemsToShow: 6 },
  { width: 1440, itemsToShow: 7 },
];

const SliderItem = ({titleImage, logoImage, description}) => {
  return (
    // <section className='ourWork-slider-item'>
    //     <section className='ourWork-slider-item-img1'>
    //         <img src={titleImage} />
    //     </section>
    //     <section className='ourWork-slider-item-img2'>
    //         <img src={logoImage} />
    //     </section>
    //     <p>{description}</p>
    // </section>

    <section className='client-slider-item'>
        <section className='client-slider-item-img1'>
            <img src={titleImage} />
        </section>
        <section className='client-slider-item-img1'>
            <img src={titleImage} />
        </section>
    </section>
  );
};

export default function SwiperSlider() {
  return (
    <Carousel breakPoints={breakPoints}>
        {
            mockDataourWork.map(item => (
                <SliderItem titleImage={item.titleImage} logoImage={item.logoImage} description={item.description}/>
            ))
        }
    </Carousel>
  );
}
