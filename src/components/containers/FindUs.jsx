import React from "react";
import SubHeading from "../reusables/SubHeading";
import images from "../../../constants/images";
import Image from "next/image";

const FindUs = () => (
  <div className="app__bg " id="contact">
    <div
      className=" app__wrapper section__padding app__bg-2"
      style={{ margin: "0 2rem" }}
    >
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__oswald" style={{ marginBottom: "1rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__roboto">123 Street Name, City, Country</p>
          <p
            className="p__oswald"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening hours
          </p>
          <p className="p__roboto">Mon - Fri: 10:00 am - 01:00 am</p>
          <p className="p__roboto">Sat - Sun: 10:00 am - 03:00 am </p>
        </div>
      </div>
      <div className="app__wrapper_img ">
        <Image src={images.alley} alt="findus" />
      </div>
    </div>
  </div>
);

export default FindUs;
