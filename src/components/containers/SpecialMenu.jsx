import React from "react";
import { MenuSection } from "./MenuSection";
import data from "../../../constants/data";
import SubHeading from "../reusables/SubHeading";
import styles from "@/styles/specialmenu.module.css";

const SpecialMenu = () => {
  return (
    <div
      className={`${styles.app__specialMenu} section__padding app__bg`}
      id="menu"
    >
      <div
        className={`${styles.app__specialMenuContainer} flex__center section__padding`}
      >
        <div className={styles.app__specialMenuTitle}>
          <SubHeading title="Experience authenticity" />
          <h1 className="headtext__oswald"> Explore Our Menu </h1>
        </div>
        <div className={styles.app__specialMenuMenu}>
          <div className={styles.app__specialMenuMenuSection}>
            {data.menu_page.map((page, index = 1) => (
              <MenuSection
                key={index}
                index={index}
                tag={page.tag}
                title={page.title}
                desc={page.description}
              />
            ))}
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <button type="button" className="custom__button">
            <a href="/menu">View Full Menu</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
