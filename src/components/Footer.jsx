import React from "react";

import SocialMedia from "../components/SocialMedia";
import "./Footer.css";

function Footer(props) {
  return (
    <footer>
      <span>© 2025 Duds&Mo Productions. Todos os direitos reservados.</span>
      <div className="main_footer">
        <div>
          <h4>Contato</h4>
          <ul>
            <li>✉️ dudsmoproductions@gmail.com</li>
            <li>✈ ️Telegram de sugestões</li>
            <li>📞 Whatsapp</li>
          </ul>
        </div>
        <SocialMedia width={"300px"} />
        <div>
          <h4>Outras páginas</h4>
          <ul>
            <li>Sound Cloud</li>
            <li>Itch.io</li>
            <li>LinkedIn</li>
            <li>Behance</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
