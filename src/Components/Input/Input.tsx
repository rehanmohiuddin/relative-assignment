import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BTC from "../../Assets/btc.png";

declare interface AppProps {
  text: string;
  setText: Function;
}
function TextInput({ text, setText }: AppProps) {
  return (
    <input
      defaultValue={text}
      onChange={(e) => setText(e.target.value)}
      className="bg-input-color p-3 flex justify-around items-center  h-12 my-3 rounded-lg max-w-xl "
    />
  );
}

export default TextInput;
