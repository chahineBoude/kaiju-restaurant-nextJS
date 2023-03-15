import React, { useState, useEffect } from "react";

import config from "./config";
import axios from "axios";

const Gallery = () => {
  const [accessCode, setAccessCode] = useState("");
  const [userID, setUserID] = useState("");

  const goToInsta = () => {
    const clientID = config.INSTA_API_ID;
    const redirectURI = "https://localhost:3001/gallery";
    const scope = "user_profile,user_media";
    const authURL = `https://api.instagram.com/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scope}&response_type=code`;
    window.location.href = authURL;
  };

  useEffect(() => {
    const getAccess = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        if (code) {
          const response = await axios.get(`/api/instagram?code=${code}`);
          console.log(response.data);
          localStorage.setItem("insta_token", response.data.access_token);
          localStorage.setItem("user_id", response.data.user_id);
          setAccessCode(localStorage.getItem("insta_token"));
          setUserID(localStorage.getItem("user_id"));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAccess();
  }, []);

  return (
    <div>
      <div className="app__gallery app__bg flex__center section__padding">
        <button type="button" className="custom__button" onClick={goToInsta}>
          {" "}
          Connect to instagram{" "}
        </button>
      </div>
      <div className="app__gallery app__bg flex__center section__padding">
        <p className="p__roboto">user ID is: {userID}</p>
      </div>
      <div className="app__gallery app__bg flex__center section__padding">
        <p className="p__roboto">token is: {accessCode}</p>
      </div>
    </div>
  );
};

export default Gallery;
