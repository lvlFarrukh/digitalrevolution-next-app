import React from "react";
import "./footer.scss";

import { LinkedIn, Facebook, Instagram, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-contact-section">
        <h3 className="footer-section-heading">
          <span className="footer-heading-light">Let build</span> <br />
          Your Brand world wide
        </h3>

        <h6>Reach out to our team and we'll get back to you within a day.</h6>
        <h6 className="footer-address">Office M-13, The Curve Building, Sheikh Zayed Road, Dubai, UAE</h6>
        <h6 className="footer-address">digitalrevolution@gmail.com</h6>
        <h6 className="footer-address">+92365741589</h6>
        <h6 className="footer-address">+92365741589</h6>
        <section className="footer-col footer-social-link footer-icons">
          <section className="social-links">
            <a href="#">
              <LinkedIn />
            </a>
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Twitter />
            </a>
          </section>
        </section>
      </section>
      <section className="footer-container row">
        <section className="footer-col">
          <h4>Digital Revolution</h4>
          <ul>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Clients</a>
            </li>
            <li>
              <a href="#">Chanels</a>
            </li>
          </ul>
        </section>
        <section className="footer-col">
          <h4>Web Solution</h4>
          <ul>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">UI/UX Design</a>
            </li>
            <li>
              <a href="#">Digital Marketing Services</a>
            </li>
            <li>
              <a href="#">Mobile App Development</a>
            </li>
            <li>
              <a href="#">Branding & Communication</a>
            </li>
          </ul>
        </section>
        <section className="footer-col">
          <h4>Digital Marketing Services</h4>
          <ul>
            <li>
              <a href="#">PPC</a>
            </li>
            <li>
              <a href="#">SEO</a>
            </li>
            <li>
              <a href="#">CRO</a>
            </li>
            <li>
              <a href="#">Content Marketing</a>
            </li>
          </ul>
        </section>
        {/* <section className="footer-col">
          <h4>follow us</h4>
          <section className="social-links">
            <a href="#">
              <LinkedIn />
            </a>
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Twitter/>
            </a>
          </section>
        </section> */}
      </section>
    </footer>
  );
}
