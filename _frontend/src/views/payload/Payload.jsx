import React, { createContext, useState } from "react";
import { Onestep, Twostep, Threestep, FourStep } from "../../Multiforms/forms";
import axios from "axios";
import { v4 as uuid } from "uuid";

export const Mformcontext = createContext();

function Payload() {
  const [step, setstep] = useState(1);
  const [propInput, setPropInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    return setPropInput((prev) => ({
      ...prev,
      product: uuid(),
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const step = useContext(form_Context);

  const steps = [
    <Threestep
      next={() => next}
      prev={() => prev}
      handleChange={(e) => handleChange(e)}
    />,
    <Twostep
      next={() => next}
      prev={() => prev}
      handleChange={(e) => handleChange(e)}
    />,
    <Onestep
      next={() => next1}
      prev={() => prev}
      handleChange={(e) => handleChange(e)}
    />,
    <FourStep
      next={() => next}
      prev={() => prev}
      handleChange={(e) => handleChange(e)}
    />,
  ];

  const stepper = () => {
    if (step === 1) {
      return steps[0];
    } else if (step === 2) {
      return steps[1];
    } else if (step === 3) {
      return steps[2];
    } else if (step === 4) {
      return steps[3];
    } else {
      console.log("nothing");
    }
  };

  const next = async () => {
    // await axios
    //   .put(`http://localhost:5000/listings/${propInput._id}`, propInput)
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
    localStorage.setItem("Listings", JSON.stringify(propInput));
    const count = steps.length;
    // console.log(propInput);
    if (step < count) {
      return setstep((current) => current + 1);
    } else setstep((current) => current);
  };
  const prev = () => {
    if (step > 1) {
      return setstep((current) => current - 1);
    } else setstep((current) => current);
  };

  const next1 = async () => {
    localStorage.removeItem("Listings");
    // localStorage.setItem("ListingsID", JSON.stringify(propInput.product));

    console.log(propInput);

    await axios
      .post("http://localhost:5000/listings", propInput)
      .then((response) =>
        localStorage.setItem(
          "Listings_ID",
          JSON.stringify(response.data.response._id)
        )
      )
      .catch((err) => console.log(err));

    const count = steps.length;
    // console.log(propInput);
    if (step < count) {
      return setstep((current) => current + 1);
    } else setstep((current) => current);

    setPropInput("");
  };

  return (
    <Mformcontext.Provider value={{ propInput }}>
      <div>
        <div>
          <div className="rounded-full w-4 h-4 "></div>
        </div>

        <div className="flex mb-10 ">
          <button
            onClick={prev}
            className="  border bg-gray-200 rounded w-10 h-10 mx-5 px-20 py-2 flex flex-cols items-center justify-center"
          >
            Prev
          </button>
          <button
            onClick={next}
            className=" button border bg-gray-200 rounded w-10 h-10 mx-5 flex px-20 py-2 flex-cols items-center justify-center"
          >
            Next
          </button>
        </div>
        {/* line */}
        <div className="hidden sm:block" aria-hidden="true">
          <div className="">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div>{stepper()}</div>
      </div>
    </Mformcontext.Provider>
  );
}

export default Payload;
