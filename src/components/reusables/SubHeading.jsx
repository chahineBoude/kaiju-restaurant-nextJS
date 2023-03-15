import Image from "next/image";
import React from "react";
import images from "../../../constants/images";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__oswald">{title}</p>
    <Image src={images.spoon} alt="spoon_img" />
  </div>
);

export default SubHeading;
