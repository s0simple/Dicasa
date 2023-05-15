import React from "react";
//import "./nav.css";
//import { TbSearch } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import dropDownLinks from "./navlinks";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

function Nav() {
  const navigate = useNavigate();
  const userdata = JSON.parse(localStorage.getItem("item"));
  const { username } = userdata;

  let user_name = username.toUpperCase();

  const logout = () => {
    localStorage.removeItem("item");
    navigate("/");
  };

  return (
    <div className="w-full sticky top-0 flex bg-white shadow justify-between items-center  px-4  h-16  ">
      <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
        <button className="outline-none focus:outline-none">
          <svg
            className="w-5 text-gray-600 h-5 cursor-pointer"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
        />
      </div>

      {/* right nav */}
      <div className="top-right flex items-center ">
        <div className="group inline-block">
          <button className="outline-none focus:outline-none  px-2 py-1  rounded-sm flex items-center min-w-32">
            <span className=" rounded-full p-2 bg-blue-200">
              <RxAvatar size={30} />
            </span>
            <span className="pr-1 ml-2 font-semibold flex-1">{user_name}</span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
          >
            {dropDownLinks.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="flex items-center  p-2 hover:text-gray-900 hover:bg-gray-100 "
              >
                <span>{item.icon}</span>
                <li className="rounded-sm px-3 py-1 ">{item.name}</li>
              </Link>
            ))}

            <span
              onClick={logout}
              className="flex items-center  p-2 hover:text-gray-900 hover:bg-gray-100 cursor-pointer"
            >
              <span>
                <MdOutlineLogout />
              </span>
              <li className="rounded-sm px-3 py-1 ">Logout</li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
