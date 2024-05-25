import React from "react";

const GridContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4 justify-items-center ">
      {children}
    </div>
  );
};

export default GridContainer;
