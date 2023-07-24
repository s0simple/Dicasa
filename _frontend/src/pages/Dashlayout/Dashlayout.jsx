import React, { useRef, useState } from "react";
import "./dashlayout.css";
import MenuItems from "./dashlinks";
import Payload from "../../views/payload/Payload";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css";

const Dashlayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const showmenuref = useRef();

  const showmenu = (e) => {
    e.preventDefault();

    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  };
  return (
    <>
      <div class={`sidebar ${isOpen && "close"}`}>
        <div class="logo-details">
          <i
            class="bx bxl-c-plus-plus cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
          <span class="logo_name">D i C a s a</span>
        </div>
        <ul class="nav-links">
          {MenuItems.map((items, index) => (
            <li ref={showmenuref} key={index}>
              <div key={items.id} class="iocn-link">
                <Link to={items.url}>
                  <a href="#">
                    {items.icon}
                    <span class="link_name">{items.name}</span>
                  </a>
                </Link>
                {items.child && (
                  <i
                    onClick={(e) => showmenu(e)}
                    // onClick={() => setshowMenu(!showMenu)}
                    class="bx bxs-chevron-down arrow"
                  ></i>
                )}
              </div>
              <ul class="sub-menu duration-700">
                <li className={``}>
                  <a class="link_name" to={items.url}>
                    {items.name}
                  </a>
                  {/* <a class="link_name" href="#">
                    {items.name}
                  </a> */}
                </li>
                {items.child &&
                  items.child.map((data, index) => (
                    <li key={index}>
                      <Link to={data.drop_url}>
                        <a href="#">{data.name}</a>
                      </Link>
                    </li>
                  ))}
              </ul>
              {/* <div class="profile-details ">
                <div class="profile-content">
                  <img src="image/profile.jpg" alt="profileImg" />
                </div>
                <div class="name-job">
                  <div class="profile_name">Prem Shahi</div>
                  <div class="job">Web Desginer</div>
                </div>

                <i class="bx bx-log-out"></i>
              </div> */}
            </li>
          ))}
          <div class="profile-details  ">
            <div className="flex w-full mr-2 justify-around items-center ">
              <div className="flex ">
                <div class="profile-content ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRX6QzCX2rxKzfmn7VlsMYA0TYTW5Nt6o5g&usqp=CAU"
                    alt="profileImg"
                  />
                </div>
                <div class="name-job ">
                  <div class="profile_name">Prem Shahi</div>
                  <div class="job">Web Desginer</div>
                </div>
              </div>

              <i class="bx bx-log-out text-white text-2xl cursor-pointer"></i>
            </div>
          </div>
        </ul>
      </div>
      <section class="home-section h-screen ">
        <div className="border relative h-full ">
          <div class="home-content">
            <i onClick={() => setIsOpen(!isOpen)} class="bx bx-menu"></i>
            <span class="text">Drop Down Sidebar</span>
          </div>

          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Dashlayout;
