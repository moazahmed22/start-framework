import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <section id="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container text-uppercase fw-bolder">
            <Link className="navbar-brand text-white  fs-3" to="/">
              start framework
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item ">
                  <NavLink className="nav-link" aria-current="page" to="about">
                    about
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="portfolio"
                  >
                    portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="contact"
                  >
                    contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
