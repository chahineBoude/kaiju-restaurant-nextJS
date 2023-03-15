import React, { useState } from "react";
import data from "../../../constants/data";
import MenuItem from "../reusables/MenuItem";
import styles from "../../styles/menuContainer.module.css";

const MenuContainer = () => {
  const [hover1, setHover1] = useState("");
  const [hover2, setHover2] = useState("");
  const [hover3, setHover3] = useState("");
  const [selected, setSelected] = useState("");

  const handleMouseEnter1 = () => {
    setHover1("_hovered");
    setHover2("_unhovered");
    setHover3("_unhovered");
  };

  const handleMouseLeave1 = () => {
    setHover1("_left");
    setHover2("");
    setHover3("");
  };

  const handleMouseEnter2 = () => {
    setHover2("_hovered");
    setHover1("_unhovered");
    setHover3("_unhovered");
  };

  const handleMouseLeave2 = () => {
    setHover2("_left");
    setHover1("");
    setHover3("");
  };

  const handleMouseEnter3 = () => {
    setHover3("_hovered");
    setHover2("_unhovered");
    setHover1("_unhovered");
  };

  const handleMouseLeave3 = () => {
    setHover3("_left");
    setHover2("");
    setHover1("");
  };

  var selection;
  selected == "food"
    ? (selection = data.food)
    : selected == "drinks"
    ? (selection = data.drinks)
    : selected == "desserts"
    ? (selection = data.desserts)
    : (selection = []);

  const hoverState1 =
    styles[`app__mainContainer_menu_items_unselected_picker_item${hover1}`];
  const hoverState2 =
    styles[`app__mainContainer_menu_items_unselected_picker_item${hover2}`];
  const hoverState3 =
    styles[`app__mainContainer_menu_items_unselected_picker_item${hover3}`];

  return (
    <div className={styles.app__mainContainer_menu}>
      {selected == "" ? (
        <></>
      ) : (
        <>
          <div className={styles.app__mainContainer_section}>
            <p
              className={
                selected == "food"
                  ? styles.app__mainContainer_section_selected
                  : styles.app__mainContainer_section_notSelected
              }
              onClick={() => setSelected("food")}
            >
              {" "}
              FOOD{" "}
            </p>
            <p
              className={
                selected == "drinks"
                  ? styles.app__mainContainer_section_selected
                  : styles.app__mainContainer_section_notSelected
              }
              onClick={() => setSelected("drinks")}
            >
              {" "}
              DRINKS{" "}
            </p>
            <p
              className={
                selected == "desserts"
                  ? styles.app__mainContainer_section_selected
                  : styles.app__mainContainer_section_notSelected
              }
              onClick={() => setSelected("desserts")}
            >
              {" "}
              DESSERTS{" "}
            </p>
          </div>
        </>
      )}
      <div className={`${styles.app__mainContainer_menu_section} flex__center`}>
        <div className={styles.app__mainContainer_menu_items}>
          {selected != [] ? (
            selection.map((item, index) => (
              <MenuItem
                key={item.title + index}
                title={item.title}
                price={item.price}
                tags={item.tags}
              />
            ))
          ) : (
            <>
              <div className={styles.app__mainContainer_menu_items_unselected}>
                <div
                  className={
                    styles.app__mainContainer_menu_items_unselected_picker
                  }
                >
                  <div
                    className={hoverState1}
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                    onClick={() => setSelected("food")}
                  >
                    <p className="headtext__oswald">Food</p>
                  </div>
                  <div
                    className={hoverState2}
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                    onClick={() => setSelected("drinks")}
                  >
                    <p className="headtext__oswald">Drinks</p>
                  </div>
                  <div
                    className={hoverState3}
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                    onClick={() => setSelected("desserts")}
                  >
                    <p className="headtext__oswald">Dessert</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
