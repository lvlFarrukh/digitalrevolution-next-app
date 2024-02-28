import React from "react";
import './navbar.css'
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="header caption">
      <section id="header-icon">
        <Image src="https://www.digitalgravity.ae/assets/brand-logo.webp" />
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
            <Image src="https://www.digitalgravity.ae/assets/svg/social/whatsapp.svg" />
          </section>
          <section className="speak-button">
            <Image src="https://www.digitalgravity.ae/assets/svg/social/phone.svg" />
          </section>
        </section>
      </section>
    </nav>
  );
}
