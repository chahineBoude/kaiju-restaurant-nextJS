import Image from "next/image";
import React from "react";
import images from "../../../constants/images";
import styles from "@/styles/menusection.module.css";

export const MenuSection = ({ index, tag, title, desc }) => {
  const img =
    tag === "Food"
      ? images.karaage
      : tag === "Drink"
      ? images.ramune
      : images.dango;
  const sectionHeader = styles[`app__menuSectionHeader${tag}`];
  const sectionImage = styles[`app__menuSectionImage${tag}`];

  return (
    <div className={styles.app__menuSection}>
      {index % 2 === 0 ? (
        <>
          <div className={sectionHeader} id="h1">
            <h1 className="headtext__oswald">{title}</h1>
            <p className="p__roboto">{desc}</p>
          </div>
          <div className={sectionImage}>
            <Image id="myImg" alt="menuSectionImage" src={img} />
          </div>
        </>
      ) : (
        <>
          <div className={sectionImage}>
            <Image id="myImg" alt="menuSectionImage" src={img} />
          </div>
          <div className={sectionHeader}>
            <h1 className="headtext__oswald">{title}</h1>
            <p className="p__roboto">{desc}</p>
          </div>
          <div className={styles.app__menuSectionImageSmallscreen}>
            <div className={styles.app__menuSectionHeaderSmDrink} id="h1">
              <h1 className="headtext__oswald">{title}</h1>
              <p className="p__roboto">{desc}</p>
            </div>
            <div className={styles.app__menuSectionImageSmDrink}>
              <Image id="myImg" alt="menuSectionImage" src={img} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
