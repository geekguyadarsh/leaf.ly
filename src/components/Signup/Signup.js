import React, { useState } from "react";
import { redirect } from "react-router-dom";
import { signup } from "../../helper/authAPICalls";

const Signup = () => {
  const [values, setValues] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: 0,
    error: "",
    loading: false,
    didRedirect: false,
  });

  const {
    fullName,
    phoneNumber,
    email,
    role,
    password,
    error,
    loading,
    didRedirect,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false, loading: true });

    signup({ fullName, phoneNumber, email, role, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          didRedirect: true,
        });
      }
    });
  };

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label ml-1">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            placeholder="example@mail.com"
            style={{ borderRadius: "10px" }}
            onChange={handleChange("fullName")}
            value={fullName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label ml-1">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="example@mail.com"
            style={{ borderRadius: "10px" }}
            onChange={handleChange("phoneNumber")}
            value={phoneNumber}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label ml-1">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="example@mail.com"
            style={{ borderRadius: "10px" }}
            onChange={handleChange("email")}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="form-select" className="form-label ml-1">
            User type
          </label>
          <select
            className="form-control"
            aria-label="Default select example"
            onChange={handleChange("role")}
            value={role}
          >
            <option value="0">Customer</option>
            <option value="1">Farmer</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label ml-1">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
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
            ? "Signup successful"
            : loading
            ? "Signing up..."
            : "Signup"}
        </button>
      </form>
    );
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
      id="signupModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="signupModalLabel"
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
              Signup
            </h4>
            {errorMessage()}
            {signupForm()}

            <div
              className="signin-prompt my-3 text-center"
              style={{ fontSize: "12px" }}
            >
              <span
                style={{ fontWeight: "600", fontSize: "12px" }}
                className="btn p-0"
                data-toggle="modal"
                data-dismiss="modal"
                data-target="#signinModal"
              >
                Sign in here
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
