import React from "react";
import BoxLarge from "../Assets/box-large.png";

function Left() {
  return (
    <div className="flex flex-col items-center h-full w-2/6 h-screen bg-left-blue">
      <img
        className="h-32  w-48 my-0"
        src="https://relative.fi/images/Logo-Light.svg"
      />
      <img className="my-40" src={BoxLarge} />
    </div>
  );
}

export default Left;
