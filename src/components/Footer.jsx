import React from "react";
import SocialMedia from "../components/SocialMedia";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

import "./Footer.css";

function Footer(props) {
  return (
    <footer>
      <span>© 2025 Duds&Mo Productions. Todos os direitos reservados.</span>
      <div className="main_footer">
        <div>
          <h2>Contato</h2>
          <ul>
            <li>
              <EmailRoundedIcon className="icon" /> dudsmoproductions@gmail.com
            </li>
            <li>
              <SendRoundedIcon className="icon" />
              Telegram de sugestões
            </li>

            <li>
              <ion-icon name="logo-whatsapp"></ion-icon>Whatsapp
            </li>
          </ul>
        </div>
        <SocialMedia className="icon" width={"300px"} />
        <div>
          <h2>Outras páginas</h2>
          <ul>
            <li>
              <ion-icon name="logo-soundcloud"></ion-icon>Sound Cloud
            </li>
            <li>
              <VideogameAssetIcon className="icon" />
              Itch.io
            </li>
            <li>
              <ion-icon name="logo-linkedin"></ion-icon>LinkedIn
            </li>
            <li>
              <ion-icon name="logo-behance"></ion-icon>Behance
            </li>
            <li>
              <ion-icon name="logo-github"></ion-icon>GitHub
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
