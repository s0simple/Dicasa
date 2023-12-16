import React from "react";
import "./possibility.css";

const Possibility = ({ data, head }) => {

  return (
    <div className="">

      <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400 ">

        <thead className="text-left border-b ">{head}</thead>
        <tbody className="font-light">{data}</tbody>
      </table>
    </div>
  );
};

export default Possibility;
