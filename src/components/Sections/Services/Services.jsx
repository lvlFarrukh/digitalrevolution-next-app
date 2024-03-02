"use client";

import React, { useState, useMemo } from "react";
import "./services.scss";
import { mockDataServices } from "../../../../mockdata";

const SliderItem = ({ index, name, changeSlider }) => {
  return (
    <h3 id={`slider-item-${index}`} onClick={changeSlider}>
      {name}
    </h3>
  );
};

export default function Services() {
  const [sliderLists, setSliderLists] = useState(mockDataServices);

  const initiateSlider = () => {
    let currentItems = [];
    sliderLists.map((item, index) => {
      currentItems.push(item);
    });
    setSliderLists(currentItems);
  };

  const onChangeSlider = (index) => {
    let serviceName;

    if (index > 2) {
      //down

      serviceName = sliderLists
        .slice(index - 2)
        .concat(sliderLists.slice(0, index - 2));
    } else if (index < 2) {
      //up
      serviceName = sliderLists
        .slice(sliderLists.length - (2 - index), sliderLists.length)
        .concat(sliderLists.slice(0, sliderLists.length - (2 - index)));
    } else {
      serviceName = sliderLists;
    }

    let currentItems = [];
    serviceName?.map((item, index) => {
      currentItems.push(item);
    });
    setSliderLists(currentItems);
  };

  useMemo(() => initiateSlider(), []);

  return (
    <section className="services-section" id="Services">
      <section className="service-section-item-1">
        <h1 className="section-heading">Services</h1>

        <section className="slider-list">
          <section className="scroll-indicator">
            <section>
              <section></section>
            </section>
            <h6>Click</h6>
          </section>

          <section
            id="slider"
            // onscroll="onChangeSlider(1)"
          >
            {sliderLists.map(
              (item, index) =>
                index < 5 && (
                  <SliderItem
                    key={index}
                    index={index}
                    name={item.name}
                    changeSlider={() => onChangeSlider(index)}
                  />
                )
            )}
          </section>
        </section>
      </section>

      <section className="service-section-2">
        <img id="serviceimg" src={sliderLists[2]?.imageUrl} />
        <section className="slider-item-details">
          <section>
            <p id="servicesDescription">{sliderLists[2]?.description}</p>
            <br />
            {/* <p ref={servicesListText} id="servicesListText"></p> */}
          </section>
          {/* <section className="slider-items-features">
            <ul ref={servicesNameList} id="services-name-list"></ul>
          </section> */}
        </section>
      </section>
    </section>
  );
}
