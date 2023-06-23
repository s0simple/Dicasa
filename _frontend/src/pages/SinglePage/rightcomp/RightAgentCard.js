import React from "react";

const RightAgentCard = () => {
  return (
    <div className="my-5">
      <div className="top flex my-8">
        <div className="mr-2 h-20 w-20 rounded-full overflow-hidden relative bg-gray-200"></div>
        <div className="right">
          <p>AGENT</p>
          <p className="font-bold text-xl">Agent Name</p>
          <p className="font-normal">Agent company name</p>
        </div>
      </div>
      <hr className="my-2" />
      <div className="bottom">
        <ul>
          <li>
            <div className="flex justify-between">
              <p>Office Phone:</p>
              <p className="font-semibold">+233206362142</p>
            </div>
            <hr className="my-2" />
          </li>
          <li>
            <div className="flex justify-between">
              <p>Mobile Phone:</p>
              <p className="font-semibold">+233206362237</p>
            </div>
            <hr className="my-2" />
          </li>
          <li>
            <div className="flex justify-between">
              <p>Whatsapp phone:</p>
              <p className="font-semibold">+233202632142</p>
            </div>
            <hr className="my-2" />
          </li>
          <li>
            <div className="flex justify-between">
              <p>Email:</p>
              <p className="font-semibold">+233206362142</p>
            </div>
            <hr className="my-2" />
          </li>
        </ul>
      </div>

      <div className="bg-slate-700 w-full py-4 text-center my-6 text-white">
        {" "}
        View my properties
      </div>
    </div>
  );
};

export default RightAgentCard;
