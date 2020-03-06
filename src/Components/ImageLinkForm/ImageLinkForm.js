import React from "react";
import "../../index.css";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f4 custom-beige">
        {
          "Enter a URL to Doglify your picture. Give it a try. I know you want to."
        }
      </p>
      <div className="center">
        <div className="form center pa3">
          <input
            className="montreg f4 pa2 w-70 center"
            type="text"
            placeholder="insert URL"
            onChange={onInputChange}
          />
          <button
            className="myButton br2 w-30 grow link "
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
