import React from "react";
import "./StickyButtons.css";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

function StickyButtons(props) {
  return (
    <div className="sticky">
      <h3>Suporte</h3>
      <div className="circle yellow">
        <QuestionMarkRoundedIcon />
      </div>
      <h3>Termos de Uso</h3>
      <div className="circle orange">
        <MenuBookRoundedIcon />
      </div>
    </div>
  );
}

export default StickyButtons;
