import React from "react";
import styles from "../../styles/footerOverlay.module.css";

function FooterOverlay() {
  return (
    <div className={styles.app__footerOverlay}>
      <div className={styles.app__footerOverlay_black} />
      <div className={`${styles.app__footerOverlay_img} app__bg-2`} />
    </div>
  );
}

export default FooterOverlay;
