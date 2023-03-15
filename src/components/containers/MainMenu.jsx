import React from "react";
import SubHeading from "../reusables/SubHeading";
import MenuContainer from "./MenuContainer";
import styles from "../../styles/mainMenu.module.css";
import { izakaya } from "../../../constants";

const MainMenu = () => {
  return (
    <div className={styles.app__mainMenu} id="menu">
      <div className={styles.app__mainMenu_bg}></div>
      <div className={styles.app__mainMenu_video}>
        <video autoPlay loop muted>
          <source src={izakaya} type="video/mp4" />
        </video>
      </div>
      <div
        className={`${styles.app__mainMenu_container} flex__center section__padding`}
      >
        <div className={`${styles.app__mainMenu_title} flex__center`}>
          <SubHeading title="More trendy Bullshit who cares" />
          <h1 className="headtext__oswald"> Explore Our Menu </h1>
        </div>

        <MenuContainer />
      </div>
    </div>
  );
};

export default MainMenu;
