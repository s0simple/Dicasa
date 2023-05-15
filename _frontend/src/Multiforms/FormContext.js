import React, { createContext, useState } from "react";
import { MformProvider } from "../views/payload/MformContext";
import Payload from "../views/payload/Payload";
import { Onestep, Twostep, Threestep, FourStep } from "./forms";

function FormContext() {
  return (
    <MformProvider>
      <Onestep />
      <Twostep />
      <Threestep />
      <FourStep />
    </MformProvider>
  );
}

export default FormContext;
