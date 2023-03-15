import Image from "next/image";
import React, { Fragment } from "react";
import images from "../../../constants/images";
import headStyles from "../../styles/header.module.css";
import SubHeading from "../reusables/SubHeading";

const Header = () => {
  return (
    <div
      className={`${headStyles.app__header} app__wrapper section__padding app__bg`}
      id="home"
    >
      <div className={headStyles.app__headerContainer}>
        <div className="app__wrapper_info">
          <SubHeading title="Random Trendy Tagline" />
          <h1 className={headStyles.app__headerH1}>Random Trendy Bullshit</h1>
          <p className="p__roboto" style={{ margin: "2rem 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button type="button" className="custom__button">
            <a href="#menu">Explore Menu</a>
          </button>
        </div>
        <div className="app__wrapper_img">
          <Image src={images.welcome} alt="welcome" />
        </div>
      </div>
    </div>
  );
};

export default Header;
