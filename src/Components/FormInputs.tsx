import React, { useState } from "react";
import Header from "./Header";
import BoxSmall from "../Assets/box-small.png";
import Input from "./Input";
import BoxVector from "../Assets/box-vector.png";

function FormInputs() {
  const [formObj, setFormObj] = useState({});
  return (
    <div className="flex flex-col h-screen p-24  w-screen	 bg-right-black  text-white">
      <div className="container mx-auto w-full">
        <Header />
      </div>
      <div className=" container mx-auto w-9/12  p-12 ">
        <div className="flex items-center mb-3">
          <img src={BoxSmall} />
          <div className="pl-3 text-xl font-bold">Create Multi User Lot</div>
        </div>
        <Input setFormObject={setFormObj} />
      </div>
      <div
        onClick={() => console.log("FORM OBJ", formObj)}
        className="cursor-pointer container mx-auto flex items-center justify-between rounded-2xl bg-btn-color w-32 h-12 p-4"
      >
        <img src={BoxVector} />
        Create Lot
      </div>
    </div>
  );
}

export default FormInputs;
