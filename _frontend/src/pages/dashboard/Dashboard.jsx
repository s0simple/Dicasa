import React from "react";
import { Sidebar } from "../../components";
//import { AiOutlineDashboard, AiTwotoneBug } from "react-icons/ai";
import { Member } from "../../pages";
import { Outlet } from "react-router-dom";
import { Nav } from "../../container";

function Dashboard() {
  return (
    <div>
      <div className="flex  h-screen">
        <Sidebar />

        {/* sidebar column */}
        {/* right column */}
        <div className="w-5/6 max-w-full overflow-y-auto ">
          {/* right wrap */}
          <div className="flex flex-col">
            {/* right nav */}
            <Nav />

            {/* right body */}
            <div className="mt-10 px-5">
              <div className="">
                {/* everything goes here */}
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
