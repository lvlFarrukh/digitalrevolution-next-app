"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import "./cover.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";


export default function Cover() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [expendNavbar, setexpendNavbar] = useState({
    width: "80%",
    height: "100vh",
  });
  const [expendNav, setExpendNav] = useState(false);

  useEffect(() => {
    if (Number(window.innerWidth) <= 425) {
      setexpendNavbar({ width: "100%", height: "100vh" });
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="cover-section" id="Home">
      
      <video autoPlay muted loop>
        <source src={"./assets/videos/company_video.webm"} type="video/mp4" />
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
          className="responsive-nav-list"
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

      <nav
        className={`navbar ${
          isScrolled ? "header caption sticky" : "header caption"
        }`}
      >
        <section id="header-icon">
          <img src={"./assets/logo.png"} />
        </section>
        <section className="header-nav">
          <ul id="nav-options">
            <li>
              <a className="navbar-list color-red" href="#Home">
                HOME
              </a>
            </li>
            {/* <li>
              <a className="navbar-list" href="#about">
                About
              </a>
            </li> */}
            <li>
              <a className="navbar-list" href="#Services">
                Services
              </a>
            </li>
            <li>
              <a className="navbar-list" href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="navbar-list" href="#Clients">
                Clients
              </a>
            </li>
            <li>
              <a className="navbar-list" href="#Faq">
                Faq
              </a>
            </li>
            <li>
              <a className="navbar-list" href="#Channel">
                channels
              </a>
            </li>
          </ul>
          {/* <section className="header-contact">
            <section class="speak-button">
              <a href="#">
                <WhatsApp fontSize="large" />
              </a>
            </section>
            <section className="speak-button">
              <Phone fontSize="large" />
            </section>
          </section> */}
        </section>
      </nav>

      <section className="cover-section-content-container">
        <section className="cover-item-1 caption">
          <section className="cover-text-left">
            <h1 className="text-white">
              <span className="text-gradient">CONNECTING BRANDS</span>
              <br />
              WITH GLOBAL
              <br />
              AUDIENCES
            </h1>
          </section>

          <section className="cover-social-icons">
            <ul>
              <li class="cover-social-links">
                <a href="#">
                  <Facebook />
                </a>
              </li>

              <li class="cover-social-links">
                <a href="#">
                  <Instagram />
                </a>
              </li>

              <li class="cover-social-links">
                <a href="#">
                  <LinkedIn />
                </a>
              </li>

              <li class="cover-social-links">
                <a href="#">
                  <Twitter />
                </a>
              </li>
            </ul>
          </section>

          <section className="cover-item-2 caption">
            <p className="text-white">
              You have an idea, we have the talent and resources to turn it into
              a reality. Digital Gravity is a globally recognized digital agency
              elevating brands through ground-breaking user experience and
              disruptive digital products.
            </p>

            <section className="wrapper">
              <a className="link" href="#" target="_blank">
                <section className="color"></section>
                <span>Let&apos;s Talk</span>
              </a>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
