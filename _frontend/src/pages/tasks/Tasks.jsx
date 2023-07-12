import React, { useState } from "react";
import { Loader } from "../../components";
import Dropper from "./Dropper";

const Tasks = () => {
  const [isloading, setisLoading] = useState(false);

  // if(isloading)
  // return (
  //   <div className="">
  //     <Loader />
  //   </div>
  // );

  return (
    <>
      <div>
        <div>
          <Dropper />
        </div>
      </div>
    </>
  );
};

export default Tasks;
