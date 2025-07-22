import React from "react";
import avatarImage from "../../assets/avatar.svg";

import Shape from "../Shape/Shape";

const Home = () => {
  document.title = "home";
  return (
    <section
      id="home"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container">
        <div className="text-center">
          <img src={avatarImage} alt="" width={250} />
          <div className="details text-center">
            <h2 className="text-uppercase fw-bolder fs-1">start framework</h2>
            <Shape />
            <p className="text-capitalize ">
              graphic artist
              <span> - </span>
              web designer
              <span> - </span>
              illustrator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
