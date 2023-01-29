import React, { useEffect, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import Base from "../../components/Base/Base";
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

  const performRedirect = () => {
    //TODO: do a redirect here
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Navigate to="/dashboard" />;
      } else {
        return <Navigate to="/" />;
      }
    }
    if (isAuthenticated()) {
      return <Navigate to="/" />;
    }
  };

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

  const signinForm = () => {
    return (
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
    );
  };

  return (
    <div id="orders">
      <Base>
        <div className=" container-fluid row m-0 justify-content-center align-items-center h-100 rounded my-auto">
          <div className="my-5 col-md-4 shadow p-4">
            <div className="page-title">Signin</div>
            {errorMessage()}
            {signinForm()}
            {performRedirect()}
          </div>
        </div>
      </Base>
    </div>
  );
};

export default Signin;
