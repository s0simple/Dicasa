import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import MenuItems from "./sidebarNav";
import { useLocation } from "react-router-dom";
import { RiArrowUpSLine, RiArrowDownSLine, RiAddLine } from "react-icons/ri";

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
          className={`flex justify-between items-center w-full h-10 pl-5   hover:text-blue-600 ${active}`}
        >
          <div>
            <div className="flex justify-between items-center h-full ">
              <Link to={props.url}>
                <span className=" flex pl-2 w-full   items-center ">
                  {props.icon}
                  <span className="ml-2">{props.name}</span>
                </span>
              </Link>
            </div>
          </div>
          {props.dropdown ? (
            <button
              onClick={toggledrop}
              className=" items-center mr-2 px-2 h-full "
            >
              {showdrop ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </button>
          ) : null}
        </li>
        {props.dropdown && showdrop ? (
          <li
            className={`   bg-gray-100  py-2 w-full items-center text-xs ${subactive}`}
          >
            <div className=" ">
              <div className="flex flex-col gap-1 mx-5   ">
                {props.item.child &&
                  props.item.child.map((i) => (
                    <Link to={i.drop_url} key={i.id}>
                      <div className="h-8">
                        <div className="flex pl-5 rounded hover:bg-gray-200 h-full gap-2 items-center">
                          <span>{i.icon}</span>
                          <p>{i.name}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </li>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const Sidebar = (props) => {
  const location = useLocation();
  const active = MenuItems.findIndex((i) => i.url === location.pathname);
  const subactive = MenuItems.findIndex(
    (i) => i.drop_url === location.pathname
  );

  return (
    <div className="  w-1/6  bg-white shadow overflow-y-hidden hover:overflow-y-auto scroll-smooth">
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
          <nav className="nav mt-5">
            <ul className="flex flex-col gap-2 text-gray-800">
              {MenuItems.map((item, index) => (
                <div key={index}>
                  <Sidebar_items
                    icon={item.icon}
                    name={item.name}
                    url={item.url}
                    active={index === active}
                    dropdown={item.child}
                    sub_active={index === subactive}
                    item={item}
                  />
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
