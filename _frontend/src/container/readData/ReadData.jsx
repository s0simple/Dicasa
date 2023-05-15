import React from "react";

const ReadData = ({ newData }) => {
  console.log(newData);
  return (
    <>
      <div className="">
        <h1 className=" text-center mb-5 md:text-[20px] font-medium text-gray-800">
          Preview Record
        </h1>
        <div className="flex flex-col items-center justify-between mt-2">
          <div>
            <span className="font-medium text-gray-800">Full Name:</span>{" "}
            {newData.first_name} {newData.last_name}
          </div>
          <div>
            <span className="font-medium text-gray-800">Age:</span>{" "}
            {newData.age}
          </div>
          <div>
            <span className="font-medium text-gray-800">DOB:</span>{" "}
            {newData.dateOfBirth}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadData;
