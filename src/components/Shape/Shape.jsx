import React from "react";
import { FaStar } from "react-icons/fa";

const Shape = () => {
  return (
    <>
      <div className="shape text-center d-flex justify-content-center align-items-center gap-3 my-3">
        <div className="line"></div>
        <FaStar className="fs-5" />
        <div className="line"></div>
      </div>
    </>
  );
};

export default Shape;
