import React from "react";
import FooterOverlay from "../reusables/FooterOverlay";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { MdOutlineCopyright } from "react-icons/md";
import styles from "../../styles/footer.module.css";
import images from "../../../constants/images";
import Image from "next/image";

function Footer() {
  return (
    <div className={`${styles.app__footer} section__padding app__bg-2`}>
      <div />
      <div className={styles.app__footer_links}>
        <div className={styles.app__footer_links_contact}>
          <h1 className={styles.app__footer_headtext}>Contact Us</h1>
          <p className="p__roboto">123 Street Name, City, Country</p>
          <p className="p__roboto"> +123456789 </p>
          <p className="p__roboto">+234567890</p>
        </div>
        <div className={styles.app__footer_links_logo}>
          <Image src={images.kaiju} alt="footer_logo" />
          <p className="p__roboto">"Blurb about the restaurant here"</p>
          <div className={styles.app__footer_links_icons}>
            <FiFacebook />
            <a
              href="https://www.linkedin.com/in/chahine-boudemagh-1b1b761b8/"
              target="_blank"
            >
              <FiLinkedin />
            </a>
            <a href="https://github.com/chahineBoude" target="_blank">
              <FiGithub />
            </a>
          </div>
        </div>
        <div className={styles.app__footer_links_work}>
          <h1 className={styles.app__footer_headtext}>Opening hours</h1>
          <p className="p__roboto"> Mon - Fri: 10:00 am - 01:00 am </p>
          <p className="p__roboto">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <MdOutlineCopyright />
        <p className="p__roboto">
          2023 Boudemagh Chahine. Based on the work of youtuber&nbsp;
        </p>
        <a
          className="p__roboto"
          href="https://www.youtube.com/@javascriptmastery"
          target="_blank"
        >
          JavaScript Mastery
        </a>
      </div>
    </div>
  );
}

export default Footer;
