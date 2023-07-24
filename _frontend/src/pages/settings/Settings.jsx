import React from "react";
import { Loader } from "../../components";

function Settings() {
  return (
    // <div className="">
    //   {/* <Loader /> */}
    //   <div class="flex h-screen items-center justify-center">
    //     <div class="relative">
    //       <div
    //         class="w-16 h-16 rounded-full absolute
    //                         border-4 border-solid border-blue-100"
    //       ></div>

    //       <div
    //         class="w-16 h-16 rounded-full animate-spin absolute
    //                         border-4 border-solid border-blue-400 border-t-transparent"
    //       ></div>
    //     </div>
    //   </div>
    // </div>
    <div class="w-full flex flex-col overflow-hidden  h-screen justify-center items-center ">
      <div className="relative">
        <div class="w-20 h-20 border-blue-200 border-2 rounded-full"></div>
        <div class="w-20 h-20 border-blue-500 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
      </div>
    </div>
  );
}

export default Settings;
