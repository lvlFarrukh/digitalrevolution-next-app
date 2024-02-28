"use client";

import { Fragment } from "react";
import Carousel from "react-elastic-carousel";
import "./SwiSwiperSlider.css";
import { mockDataClient, mockDataourWork } from "../../../mockdata";
import Image from "next/image";

const WorkSliderbreakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 220, itemsToShow: 1, itemsToScroll: 1 },
  { width: 440, itemsToShow: 2 },
  { width: 660, itemsToShow: 3 },
  // { width: 880, itemsToShow: 4 },
  // { width: 1000, itemsToShow: 5 },
  // { width: 1220, itemsToShow: 6 },
  // { width: 1440, itemsToShow: 7 },
];

const ClientSliderbreakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 150, itemsToShow: 1, itemsToScroll: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 450, itemsToShow: 3 },
  { width: 600, itemsToShow: 4 },
  { width: 750, itemsToShow: 5 },
  { width: 900, itemsToShow: 6 },
  { width: 1050, itemsToShow: 7 },
];

const WorkSliderItem = ({ titleImage, logoImage, description }) => {
  return (
    <section className="ourWork-slider-item">
      <section className="ourWork-slider-item-Image1">
        <Image src={titleImage} />
      </section>
      <section className="ourWork-slider-item-Image2">
        <Image src={logoImage} />
      </section>
      <p>{description}</p>
    </section>
  );
};

const ClientSliderItem = ({ Image1, Image2 }) => {
  return (
    <section className="client-slider-item">
      <section className="client-slider-item-Image1">
        <Image src={Image1} />
      </section>
      <section className="client-slider-item-Image1">
        <Image src={Image2} />
      </section>
    </section>
  );
};

export default function SwiperSlider({ type }) {
  return (
    <Fragment>
      <Fragment>
        {type === "WORK" && (
          <Carousel breakPoints={WorkSliderbreakPoints}>
            {mockDataourWork.map((item, index) => (
              <WorkSliderItem
                key={index}
                titleImage={item.titleImage}
                logoImage={item.logoImage}
                description={item.description}
              />
            ))}
          </Carousel>
        )}
      </Fragment>
      <Fragment>
        {type === "CLIENT" && (
          <Carousel breakPoints={ClientSliderbreakPoints}>
            {mockDataClient.map((item, index) => (
              <ClientSliderItem
                key={index}
                Image1={item.image1}
                Image2={item.image2}
              />
            ))}
          </Carousel>
        )}
      </Fragment>
    </Fragment>
  );
}
