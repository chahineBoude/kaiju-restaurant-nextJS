import React, { useState, useEffect } from "react";
import { GiHamburgerMenu, GiChopsticks } from "react-icons/gi";
import images from "../../../constants/images";
import Image from "next/image";
import styles from "../../styles/navbar.module.css";
import config from "./config";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__navbarLogo}>
        <a href="/">
          <Image src={images.kaiju} alt="app-logo" />
        </a>
      </div>
      <ul className={styles.app__navbarLinks}>
        <li className="p__roboto">
          <a href="/#home">Home </a>
        </li>
        <li className="p__roboto">
          <a href="/#about">About </a>
        </li>
        <li className="p__roboto">
          <a href="/#men">Menu</a>
        </li>
        <li className="p__roboto">
          <a href="/#contact">Contact</a>
        </li>
      </ul>
      <div className={styles.app__navbarBooking}>
        <a href="/" className="p__roboto">
          Book a table
        </a>
      </div>
      <div className={styles.app__navbarSmallscreen}>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div
            className={`${styles.app__navbarSmallscreenOverlay} flex__center slide-bottom`}
          >
            <GiChopsticks
              fontSize={27}
              className={styles.overlay__close}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className={styles.app__navbarSmallscreenLinks}>
              <li className="p__roboto">
                <a
                  href="/#home"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Home{" "}
                </a>
              </li>
              <li className="p__roboto">
                <a
                  href="/#about"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  About{" "}
                </a>
              </li>
              <li className="p__roboto">
                <a
                  href="/#men"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Menu
                </a>
              </li>
              <li className="p__roboto">
                <a
                  href="/#contact"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Contact
                </a>
              </li>
              <li
                className="p__roboto"
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <a href="/">Book a table</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
