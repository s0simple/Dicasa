import React, { useState, useContext } from "react";
import { Mformcontext } from "../../views/payload/Payload";
import { Link } from "react-router-dom";

const SuccessStep = () => {
  return (
    <div>
      <div class="success-animation">
        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            class="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>

        <div className="mt-10  flex justify-center">
          <div className=" text-center leading-10">
            <h1 className="text-lg font-bold ">Thank you</h1>
            <div>
              <p>
                Your Property submission was successful..{" "}
                <Link
                  to={"/dashboard/mainpage"}
                  className="font-bold text-blue-500"
                >
                  Go to dashboard
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStep;
