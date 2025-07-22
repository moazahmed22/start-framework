import React from "react";

import { FaPlus } from "react-icons/fa";

const PortfolioCard = ({ cardImg, onClick }) => {
  return (
    <>
      <div
        onClick={() => {
          onClick(cardImg);
        }}
        className="col"
      >
        <div className="img-container overflow-hidden d-flex justify-content-center align-items-center position-relative">
          <img src={cardImg} alt="" className="img-fluid rounded-2" />
          <FaPlus />
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
