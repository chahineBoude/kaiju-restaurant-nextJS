import Image from "next/image";
import React from "react";
import images from "../../../constants/images";
import abstyles from "../../styles/aboutus.module.css";

const AboutUs = () => (
  <div
    className={`${abstyles.app__aboutus} app__bg flex__center section__padding`}
    id="about"
  >
    <div
      className={`${abstyles.app__aboutusContainer} flex__center section__padding`}
    >
      <div className={`${abstyles.app__aboutusOverlay} flex__center`}>
        <Image src={images.G} alt="bg-overlay" />
      </div>
      <div className={`${abstyles.app__aboutusContent} flex__center`}>
        <div className={abstyles.app__aboutusContentAbout}>
          <h1 className="headtext__oswald">About us</h1>
          <Image
            src={images.spoon}
            alt="spoon_img"
            className={abstyles.app__aboutusContentAboutSpoon}
          />
          <p className="p__roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
        <div className={`${abstyles.app__aboutusContentKnife} flex__center`}>
          <Image src={images.knife} alt="knife" />
        </div>
        <div className={abstyles.app__aboutusContentHistory}>
          <h1 className="headtext__oswald">Our Story</h1>
          <Image src={images.spoon} alt="spoon_img" className="spoon__img" />
          <p className="p__roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
