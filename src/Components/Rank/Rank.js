import React from "react";
import "../../index.css";
import doglifyLogo from "./doglify-logo.png";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="">
        <img src={doglifyLogo} alt="doglify-logo" width="250" height="250" />
      </div>
      <div className="custom-beige f3 f">{`${name}, so far you have Doglified ${entries} pictures.`}</div>
    </div>
  );
};

export default Rank;
