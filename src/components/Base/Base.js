import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

const Base = ({ homepage, className, children }) => {
  return (
    <div className="base">
      <Signin />
      <Signup />
      <NavBar homepage={homepage} />
      <div className={className}>{children}</div>
      <Footer />
    </div>
  );
};
export default Base;
