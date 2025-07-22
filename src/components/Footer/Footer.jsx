import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";

const Footer = () => {
    let year = new Date().getFullYear()
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3">
            <div className="d-flex flex-column text-center">
              <h3 className="text-uppercase">location</h3>
              <p>2215 jon Daniel Drive</p>
              <p className="text-capitalize">
                clark, <span className="text-uppercase">mo</span> 65243
              </p>
            </div>
            <div className="d-flex flex-column text-center">
              <h3 className="text-uppercase">around the web</h3>
              <div className="icons d-flex justify-content-center gap-2">
                <div className="circle">
                  <FaFacebook />
                </div>
                <div className="circle">
                  <FaTwitter />
                </div>
                <div className="circle">
                  <FaLinkedinIn />
                </div>
                <div className="circle">
                  <FaGlobe />
                </div>
              </div>
            </div>
            <div className="d-flex flex-column text-center">
              <h3 className="text-uppercase">about freelancer</h3>
              <p>
                Freelancer is a free to use, licensed Bootstrap theme created by
                me 😊
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="conatiner copyright text-center text-capitalize">
        copyright &copy; your website {year}
      </div>
    </>
  );
};

export default Footer;
