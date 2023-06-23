import React from "react";
import { RightAgentCard, RightPrice, RightTourSchedule } from "./rightcomp";

const SingleRight = () => {
  return (
    <div>
      <RightPrice />
      <hr class="my-4" />
      <RightAgentCard />
      <RightTourSchedule />
    </div>
  );
};

export default SingleRight;
