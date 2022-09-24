import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function resume() {
  return (
    <div className="resume-body" id="resume">
      <h1>Resume</h1>
      <div className="resume-info">*Available soon*</div>

      <a href="#resume">
        <KeyboardDoubleArrowDownIcon
          fontSize="large"
          color="disabled"
          className="down-arrow"
        />
      </a>
    </div>
  );
}

export default resume;
