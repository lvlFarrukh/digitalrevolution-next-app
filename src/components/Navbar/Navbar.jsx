import React from "react";
import './navbar.css'

export default function Navbar() {
  return (
    <nav class="header caption">
      <section id="header-icon">
        <img src="https://www.digitalgravity.ae/assets/brand-logo.webp" />
      </section>
      <section class="header-nav">
        <ul id="nav-options">
          <li>
            <a class="navbar-list color-red" href="#home">
              HOME
            </a>
          </li>
          <li>
            <a class="navbar-list" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="navbar-list" href="#blog">
              Services
            </a>
          </li>
          <li>
            <a class="navbar-list" href="#blog">
              Case Studies
            </a>
          </li>
          <li>
            <a class="navbar-list" href="#blog">
              Careers
            </a>
          </li>
          <li>
            <a class="navbar-list" href="#blog">
              Blog
            </a>
          </li>
        </ul>
        <section class="header-contact">
          {/* <section class="speak-button">
                            <h3>Speak to an Expert</h3>
                        </section> */}
          <section class="speak-button">
            <img src="https://www.digitalgravity.ae/assets/svg/social/whatsapp.svg" />
          </section>
          <section class="speak-button">
            <img src="https://www.digitalgravity.ae/assets/svg/social/phone.svg" />
          </section>
        </section>
      </section>
    </nav>
  );
}
