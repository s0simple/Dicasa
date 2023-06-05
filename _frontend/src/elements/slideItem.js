import React from "react";

export default ({ children, ...params }) => {
  return (
    <div className="swiper-slide" {...params}>
      <span>{children}</span>
    </div>
  );
};
