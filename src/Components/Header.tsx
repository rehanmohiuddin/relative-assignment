import React from "react";
import { faAngleLeft, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="flex justify-between ...">
      <div className="flex items-center">
        <FontAwesomeIcon size={"lg"} icon={faAngleLeft} />
        <div className="pl-2">Back</div>
      </div>
      <div className="flex items-center">
        <div className="pr-2">Close</div>
        <FontAwesomeIcon size={"lg"} icon={faTimesCircle} />
      </div>
    </div>
  );
}

export default Header;
