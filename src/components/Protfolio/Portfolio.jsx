import React, { useState } from "react";
import Shape from "../Shape/Shape";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const Portfolio = () => {
  document.title = "portfolio";
  let arrayOfImages = [
    "src/assets/port1.png",
    "src/assets/port2.png",
    "src/assets/port3.png",
  ];
  const [lightBox, setLightBox] = useState(false);
  const [lightBoxImage, setLightBoxImage] = useState("src/assets/port1.png");
  const displayLightBox = (imageSrc) => {
    setLightBox(true);
    setLightBoxImage(imageSrc);
  };

  return (
    <>
      <section id="portfolio">
        <div className="container text-center p-5">
          <h2 className="text-uppercase fw-bolder">portfolio component</h2>
          <Shape />
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {arrayOfImages.map((img, index) => (
              <PortfolioCard
                onClick={displayLightBox}
                key={index}
                cardImg={img}
              />
            ))}
            {arrayOfImages.map((img, index) => (
              <PortfolioCard
                onClick={displayLightBox}
                key={index}
                cardImg={img}
              />
            ))}
          </div>
        </div>
        {lightBox && (
          <div
            onClick={() => setLightBox(false)}
            className="light-box bg-primary bg-opacity-25"
          >
            <div className="content-box position-absolute bg-info w-25 rounded-2 overflow-hidden">
              <div className="img-wrapper">
                <img src={lightBoxImage} alt="" className="w-100" />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Portfolio;
