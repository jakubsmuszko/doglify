import React from "react";
import "../../index.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signout")}
          className="custom-dbrown f3 link dim underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("Signin")}
          className="custom-dbrown f3 link dim underline pa3 pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("Register")}
          className="custom-dbrown f3 link dim underline pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};
export default Navigation;
