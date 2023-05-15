import React from "react";

function NavLogin() {
  return (
    <div>
      <div className="w-full border sticky top-0 flex  justify-between items-center  p-4 px-4  ">
        <div>
          <h1 className="font-bold text-center  text-4xl text-gray-600">
            Dee<span className="text-gray-600">CaSa</span>
          </h1>
        </div>
        <div className=" rounded flex items-center w-full max-w-xl mr-4 p-2   "></div>

        {/* right nav */}
        <div className="top-right flex items-center ">
          <div className="group inline-block">
            <button className="max-h-[12rem] border space-x-4 flex justify-center items-center px-5 py-3 font-medium  rounded border-gray-400 space-between">
              <div className="text">Sign up</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavLogin;
