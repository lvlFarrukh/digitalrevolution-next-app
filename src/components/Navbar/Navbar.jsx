"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// importing data
import { menus } from "./navbarContent.json";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const router = useRouter();
  const pathname = usePathname();

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
    <header>
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
            {menus.map((item) => (
              <li key={item.id} onClick={() => router.push(item.pageUrl)}>
                <Link href={item.pageUrl}>
                  {item.title}
                </Link>
              </li>
            ))}
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
            {menus.map((item) => (
              <li key={item.id}>
                <Link
                  className={
                    pathname === item.pageUrl
                      ? "navbar-list color-red"
                      : "navbar-list"
                  }
                  href={item.pageUrl}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </header>
  );
}
