import React, { useState, useContext } from "react";
import { Mformcontext } from "../../views/payload/Payload";
import "../form.scss";

const PreviewStep = () => {
  const { propInput } = useContext(Mformcontext);
  console.log(propInput);
  return <div>PreviewStep</div>;
};

export default PreviewStep;
