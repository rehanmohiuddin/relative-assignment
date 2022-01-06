import React, { useEffect, useRef, useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BTC from "../../Assets/btc.png";
import MATIC from "../../Assets/matic.png";
import { renderInputs } from "../../constants";

declare interface AppProps {
  text: string;
  setOption: Function;
}

const options = ["BTC", "MATIC"];

function Select({ text, setOption }: AppProps) {
  const [show, setShow] = useState(false);
  const [optionVal, setOptionVal] = useState("");
  useEffect(() => {
    setOptionVal(text);
  }, [text]);
  return (
    <div className="relative">
      <div
        onClick={() => setShow(!show)}
        className="bg-input-color cursor-pointer flex justify-around items-center w-40 h-12 my-3 rounded-lg "
      >
        <div className="flex justify-start">
          <img src={optionVal === "BTC" ? BTC : MATIC} />
          <div className="pl-2">{optionVal}</div>
        </div>
        <FontAwesomeIcon icon={faChevronDown} size="1x" />
      </div>
      {show && (
        <div className="absolute top-10 z-10 bg-input-color cursor-pointer  justify-around items-center w-40 h-18 p-2 my-3 rounded-lg ">
          {options.map((_opt, index) => (
            <div
              onClick={() => {
                setOption(_opt);
                setOptionVal(_opt);
                setShow(false);
              }}
              key={index}
              className="flex justify-start my-2"
            >
              <img src={_opt === "BTC" ? BTC : MATIC} />
              <div className="pl-2">{_opt}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
