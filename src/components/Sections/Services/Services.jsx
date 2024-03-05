"use client";

import React, { useState, useMemo } from "react";
import "./services.scss";
import {
  Facebook,
  Google,
  Instagram,
  Phone,
  RecentActors,
  Twitter,
  WhatsApp,
  Yard,
} from "@mui/icons-material";
import { mockDataServices } from "../../../../mockdata";

export default function Services() {
  const [activeService, useActiveService] = useState(0);
  let outerCircle = mockDataServices.slice(0, 6);
  let innerCircle = mockDataServices.slice(6, 10);

  const handleChangeService = (serviceId) => {
    useActiveService(serviceId)
  }

  return (
    <section className="services-section" id="Services">
      <section className="service-section-item-1">
        <h1 className="section-heading">Services</h1>
        <div class="g-content">
          <ul class="circle-container-small">
            {outerCircle.map((item) => (
              <li data-id="0" key={item.id}>
                <a
                  className={item.id === activeService && "active-circle"}
                  onMouseEnter={() => handleChangeService(item.id)}
                >
                  <Facebook className="circle-icon" />
                  {/* <img src={item.imageUrl}/> */}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="g-content">
          <ul class="circle-container">
            {innerCircle.map((item) => (
              <li data-id="0" key={item.id}>
                <a
                  className={item.id === activeService && "active-circle"}
                  onMouseEnter={() => handleChangeService(item.id)}
                >
                  <Facebook className="circle-icon" />
                  {/* <img src={item.imageUrl}/> */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-section-2">
        <img id="serviceimg" src={mockDataServices[activeService]?.imageUrl} />
        <section className="slider-item-details">
          <section>
            <p id="servicesDescription">{mockDataServices[activeService]?.description}</p>
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
