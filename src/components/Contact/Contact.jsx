import React from "react";
import Shape from "../Shape/Shape";

const Contact = () => {
  document.title = "contact";
  return (
    <>
      <section id="contact">
        <div className="container text-center p-5">
          <h2 className="text-uppercase fw-bolder">contact section</h2>
          <Shape />
          <div className="container mt-5">
            <form className="d-flex flex-column">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="userName"
                />
                <label htmlFor="floatingInput">userName</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="userAge"
                  min={18}
                />
                <label htmlFor="floatingInput">userAge</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  autoComplete="username"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="align-self-start btn text-white"
              >
                send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
