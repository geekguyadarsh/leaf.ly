import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import {
  authenticate,
  isAuthenticated,
  signin,
} from "../../helper/authAPICalls";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });
  const { user } = isAuthenticated();

  const navigate = useNavigate();

  const { email, password, error, loading, didRedirect } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            didRedirect: true,
          });
        });
      }
    });
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-outline d-flex align-items-center text-danger p-0"
        role="alert"
        style={{
          animation: "fromTop 0.5s linear",
          display: error ? "" : "none",
        }}
      >
        {error}
      </div>
    );
  };

  return (
    <div
      className="modal fade"
      id="signinModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="signinModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" style={{ borderRadius: "12px" }}>
          <div className="modal-header border-0 p-0">
            <button
              type="button"
              className="close text-black"
              data-dismiss="modal"
              aria-label="Close"
              style={{ padding: "1rem 1rem", margin: "0rem 0rem -1rem auto" }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body pt-0 border-0 px-5">
            <h4
              style={{ fontWeight: 600 }}
              className="modal-title text-center my-2"
              id="signinModalLabel"
            >
              Signin
            </h4>
            {errorMessage()}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label ml-1">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="example@mail.com"
                  style={{ borderRadius: "10px" }}
                  onChange={handleChange("email")}
                  value={email}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label ml-1">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  style={{ borderRadius: "10px" }}
                  onChange={handleChange("password")}
                  value={password}
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-block my-3"
                style={{
                  backgroundColor: "#FBB03B",
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                {didRedirect
                  ? "Signin successful"
                  : loading
                  ? "Signing in..."
                  : "Signin"}
              </button>
            </form>

            <div
              className="signup-prompt my-3 text-center"
              style={{ fontSize: "12px" }}
            >
              Not a member yet?{" "}
              <span
                style={{ fontWeight: "600", fontSize: "12px" }}
                className="btn p-0"
                data-toggle="modal"
                data-dismiss="modal"
                data-target="#signupModal"
              >
                Sign up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
