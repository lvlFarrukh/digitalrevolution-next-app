"use client";

import { useMemo, useState, useRef } from "react";
import "./cover.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Cover() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [expendNav, setExpendNav] = useState(false);

  const expendNavbar = 
    windowSize.current[0] <= "428"
      ? { width: "80%", height: "100vh" }
      : { width: "45%", height: "100vh" };

      console.log(windowSize.current[0])
  return (
    <section className="cover-section">
      <video autoPlay muted loop>
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>

      <section className="responsive-nav" style={expendNav ? expendNavbar : {}}>
        <section
          className="navbar-responsive-icon"
          onClick={() => setExpendNav((expendNav) => !expendNav)}
        >
          {expendNav ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </section>

        <section
          class="responsive-nav-list"
          style={expendNav ? { display: "block" } : { display: "none" }}
        >
          <ul>
            <li>HOME</li>
            <li>About</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </section>
      </section>

      <nav className="header caption">
        <section id="header-icon">
          <img src="https://www.digitalgravity.ae/assets/brand-logo.webp" />
        </section>
        <section className="header-nav">
          <ul id="nav-options">
            <li>
              <a className="navbar-list color-red" href="#home">
                HOME
              </a>
            </li>
            <li>
              <a className="navbar-list" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="navbar-list" href="#blog">
                Services
              </a>
            </li>
            <li>
              <a className="navbar-list" href="#blog">
                Case Studies
              </a>
            </li>
            <li>
              <a className="navbar-list" href="#blog">
                Careers
              </a>
            </li>
            <li>
              <a className="navbar-list" href="#blog">
                Blog
              </a>
            </li>
          </ul>
          <section className="header-contact">
            {/* <section className="speak-button">
                            <h3>Speak to an Expert</h3>
                        </section> */}
            <section className="speak-button">
              <img src="https://www.digitalgravity.ae/assets/svg/social/whatsapp.svg" />
            </section>
            <section className="speak-button">
              <img src="https://www.digitalgravity.ae/assets/svg/social/phone.svg" />
            </section>
          </section>
        </section>
      </nav>

      <section className="cover-item-1 caption">
        <section>
          <ul>
            <li>
              <img
                className="cover-item-icon-img"
                src="./assets/icons/social-media/facebook-hover.png"
              />
            </li>
            <li>
              <img
                className="cover-item-icon-img"
                src="./assets/icons/social-media/facebook-hover.png"
              />
            </li>
            <li>
              <img
                className="cover-item-icon-img"
                src="./assets/icons/social-media/facebook-hover.png"
              />
            </li>
            <li>
              <img
                className="cover-item-icon-img"
                src="./assets/icons/social-media/facebook-hover.png"
              />
            </li>
            <li>
              <img
                className="cover-item-icon-img"
                src="./assets/icons/social-media/facebook-hover.png"
              />
            </li>
          </ul>
        </section>

        <section className="cover-text-left">
          <h1 className="text-gradient">CONNECTING BRANDS</h1>
          <h1 className="text-white">WITH GLOBAL</h1>
          <h1 className="text-white">AUDIENCES</h1>
        </section>
      </section>

      <section className="cover-item-2 caption">
        <p className="text-white">
          You have an idea, we have the talent and resources to turn it into a
          reality. Digital Gravity is a globally recognized digital agency
          elevating brands through ground-breaking user experience and
          disruptive digital products.
        </p>

        <section className="wrapper">
          <a className="link" href="#" target="_blank">
            <section className="color"></section>
            <span>Let's Talk</span>
          </a>
        </section>
      </section>
    </section>
  );
}
