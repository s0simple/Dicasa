import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import MenuItems from "./sidebarNav";
import { useLocation } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowDownSLine, RiAddLine } from "react-icons/ri";

const Sidebar_items = (props) => {
  const [showdrop, setshowdrop] = useState(false);

  const toggledrop = () => {
    switch (showdrop) {
      case true:
        return setshowdrop(false);
        break;
      case false:
        return setshowdrop(true);
    }
  };

  const active = props.active ? "text-blue-600" : "";
  const subactive = props.sub_active ? "text-blue-600" : "";

  return (
    <>
      <div className="">
        <li
          className={`flex justify-center w-full  py-4 pl-5  hover:text-blue-600  hover:bg-slate-100 ${active}`}
        >
          <span className=" flex pl-2 w-full   items-center align-items-center">
            {props.icon}
            <span className="ml-2">{props.name}</span>
          </span>

          {props.dropdown ? (
            <button
              onClick={toggledrop}
              className="flex pl-2 w-40  items-center align-items-center"
            >
              {" "}
              {showdrop ? <RiArrowDownSLine /> : <RiArrowLeftSLine />}
            </button>
          ) : (
            ""
          )}
        </li>
        {props.dropdown && showdrop ? (
          <li className={`flex pl-7 w-full items-center text-xs ${subactive}`}>
            <span>
              <RiAddLine />
            </span>
            <Link to={props.drop_url} className="">
              New Property
            </Link>
          </li>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const Coolsidebar = (props) => {
  const location = useLocation();
  const active = MenuItems.findIndex((i) => i.url === location.pathname);
  const subactive = MenuItems.findIndex(
    (i) => i.drop_url === location.pathname
  );

  return (
    <div className="  w-1/6 h-screen bg-white shadow ">
      <div className="">
        {" "}
        <div className="">
          {/* Main logo side bar */}
          <div className="logo py-1 h-16  flex justify-center border">
            <div>
              <h1 className="font-bold text-center p-2 text-2xl text-gray-600 ">
                Dee<span className="text-gray-600">CaSa</span>
              </h1>
            </div>
          </div>
          {/* side navigation */}
          <nav className="nav py-10">
            <ul className="flex flex-col  text-gray-800">
              {MenuItems.map((item, index) => (
                <Link to={item.url} key={index}>
                  <Sidebar_items
                    icon={item.icon}
                    name={item.name}
                    url={item.url}
                    active={index === active}
                    dropdown={item.dropdown}
                    drop_name={item.drop_name}
                    drop_url={item.drop_url}
                    sub_active={index === subactive}
                  />
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Coolsidebar;
