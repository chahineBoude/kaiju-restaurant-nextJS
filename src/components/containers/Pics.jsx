import Image from "next/image";
import React, { useEffect, useState } from "react";
import headStyles from "../../styles/header.module.css";
import images from "../../../constants/images";
import axios from "axios";

function Pics() {
  const [user, setUser] = useState("");
  const [img, setImg] = useState("");

  let ht;
  if (typeof window !== "undefined") {
    ht = localStorage.getItem("insta_token");
  }
  useState(() => {
    console.log(ht);
    const getUser = async () => {
      const response = await axios.get(`/api/getID?token=${ht}`);
      console.log(response.data);
      setUser(response.data.id);
    };
    const getPost = async () => {
      const response = await axios.get(`/api/getPosts?token=${ht}`);
      console.log(response.data.data);
    };
    const getImg = async () => {
      const response = await axios.get(`/api/getImage?token=${ht}`);
      console.log(response.data.media_url);
      setImg(response.data.media_url);
    };
    getUser();
    getPost();
    getImg();
  }, []);

  return (
    <div
      className={`${headStyles.app__header} app__wrapper section__padding app__bg`}
      id="home"
    >
      <div className={headStyles.app__headerContainer}>
        <div className="app__wrapper_img">
          <Image src={img} width="500" height="500" alt="welcome" />
        </div>
      </div>
    </div>
  );
}

export default Pics;
