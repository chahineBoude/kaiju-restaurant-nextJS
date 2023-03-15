import React from "react";
import styles from "../../styles/mitem.module.css";

const MenuItem = ({ title, price, tags }) => (
  <div className={styles.app__menuItem}>
    <div className={styles.app__menuItem_head}>
      <div className={styles.app__menuItem_name}>
        <p className="p__oswald" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className={styles.app__menuItem_dash} />
      <div className={styles.app__menuItem_price}>
        <p className="p__oswald">{price}</p>
      </div>
    </div>
    <div className={styles.app__menuItem_tags}>
      <p className="p__roboto" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
