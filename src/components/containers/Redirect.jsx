import React, { useState, useEffect } from "react";
import axios from "axios";

function Redirect() {
  const [accessCode, setAccessCode] = useState("");
  const getAccess = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      if (code) {
        const response = await axios.get(`/api/instagram?code=${code}`);
        console.log(response.data);
        setAccessCode(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app__gallery app__bg flex__center section__padding">
      <button type="button" className="custom__button" onClick={getAccess}>
        {" "}
        redirect{" "}
      </button>
    </div>
  );
}

export default Redirect;
