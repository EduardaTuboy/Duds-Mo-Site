import React from "react";
import "./StickyButtons.css";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import Tooltip from "@mui/material/Tooltip";

function StickyButtons(props) {
  return (
    <div className="sticky column">
      <h3>Suporte</h3>
      <Tooltip
        title="dudsmoproductions@gmail.com"
        arrow
        placement="left"
        slotProps={{
          tooltip: {
            sx: {
              backgroundColor: "black",
              color: "white",
              fontSize: "14px", // Ajuste opcional
              padding: "8px",
              borderRadius: "4px",
              fontFamily: "Josefin Sans",
            },
          },
          arrow: {
            sx: {
              color: "black",
            },
          },
        }}
      >
        <div className="circle yellow">
          <QuestionMarkRoundedIcon />
        </div>
      </Tooltip>
      <h3>Termos de Uso</h3>
      <div className="circle orange">
        <MenuBookRoundedIcon />
      </div>
    </div>
  );
}

export default StickyButtons;
