import React from "react";
import { VscAdd } from "react-icons/vsc";
import image from "../../assets/propsicons1.png";
import "./cards.css";
import Searchform from "../../pages/mainPage/Searchform";
import { Link } from "react-router-dom";

function Cards({ addmodel }) {
  return (
    <>
      <div className="mt-2 flex gap-x-4">
        <div className="flex flex-col gap-y-1">
          <Link
            to={"/dashboard/newproduct"}
            className="card w-32 h-24 border flex justify-center items-center rounded-md  bg-blue-600 hover:bg-blue-700 "
            // onClick={addmodel}
          >
            <div className=" text-gray-100">
              <VscAdd size={30} />
            </div>
          </Link>
          <div className="text-gray-500 text-xs font-medium">
            <span className="ml-1">New Member</span>
          </div>
        </div>

        <div className="flex flex-col gap-y-1 card">
          <button
            className=" w-32 h-24 border flex justify-center items-center rounded-md  bg-color font-medium px-4 hover:bg-gray-200"
            onClick={addmodel}
          >
            <div className=" text-gray-100 ">
              {" "}
              <img src={image} alt="" className="prop_image" />
              {/* <VscAdd size={30} /> */}
            </div>
          </button>
          <div className="text-gray-500 text-xs font-medium flex items-center ">
            <span className="font-medium text-gray-900">
              <VscAdd size={10} />
            </span>
            <span className="ml-1">New Property</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <button
            className="card w-32 h-24 border flex justify-center items-center rounded-md  bg-color font-medium"
            onClick={addmodel}
          >
            <div className=" text-gray-100">
              <VscAdd size={30} />
            </div>
          </button>
          <div className="text-gray-500 text-xs font-medium flex items-center ">
            <span className="font-medium text-gray-900">
              <VscAdd size={10} />
            </span>
            <span className="ml-1">New Users</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <button
            className="card w-32 h-24 border flex justify-center items-center rounded-md  bg-color font-medium"
            onClick={addmodel}
          >
            <div className=" text-gray-100">
              <VscAdd size={30} />
            </div>
          </button>
          <div className="text-gray-500 text-xs font-medium flex items-center ">
            <span className="font-medium text-gray-900">
              <VscAdd size={10} />
            </span>
            <span className="ml-1">New Member</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
