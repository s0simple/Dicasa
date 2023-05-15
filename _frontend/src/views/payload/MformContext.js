import React, { useState } from "react";
import { createContext } from "react";
import { FourStep, Onestep, Threestep, Twostep } from "../../Multiforms/forms";

export const Mformcontextt = createContext();
const initialstate = 0;

export const MformProvider = ({ children }) => {
  const [Inputs, setInputs] = useState({ name: "don" });
  return (
    <Mformcontextt.Provider value={initialstate}>
      <Onestep />
      <Twostep />
      <Threestep />
      <FourStep />
    </Mformcontextt.Provider>
  );
};
