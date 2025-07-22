import React from "react";
import Shape from "../Shape/Shape";

const About = () => {
  document.title = "about";
  return (
    <>
      <section id="about" className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-uppercase fw-bolder fs-1">about component</h2>
          <Shape />
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 px-5">
              <p>
                <span className="text-capitalize">freelancer</span> is a free
                bootstrap theme created by Route. The download includes the
                complete source files including HTML, CSS, and JavaScript as
                well as optional SASS stylesheets for easy customization
              </p>
              <p>
                <span className="text-capitalize">freelancer</span>
                is a free bootstrap theme created by Route. The download
                includes the complete source files including HTML, CSS, and
                JavaScript as well as optional SASS stylesheets for easy
                customization
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
