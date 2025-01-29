import React, { useState } from "react";
import "./SocialMedia.css";
import insta from "../assets/insta.png";
import tiktok from "../assets/tiktok.png";
import yt from "../assets/yt.png";
import x from "../assets/x.png";
import telegram from "../assets/telegram.png";

function SocialMedia() {
  return (
    <div className="social_media">
      <h2>Redes Sociais</h2>
      <div className="social_media_links">
        <a
          target="_blank"
          href="https://www.instagram.com/duds_mo?igsh=MTk2ejBsMHM4ODhzdg=="
        >
          <img src={insta} />
        </a>
        <a target="_blank" href="https://www.tiktok.com/@duds_mo">
          <img src={tiktok} />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCGYyPDQwVu0wZw6ApNvMPrw"
        >
          <img src={yt} />
        </a>
        <a target="_blank" href="https://x.com/duds_mo_art">
          <img src={x} />
        </a>
        <a target="_blank" href="https://t.me/+4jie6M1Y1egwNmEx">
          <img src={telegram} />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
