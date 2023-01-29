import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo-black.png";

const Footer = () => {
  return (
    <section id="footer" className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-8">
                <a
                  href="/"
                  className="nav-link navbar-brand pl-0"
                  style={{
                    fontFamily: "FortuneCookieNF",
                    color: " #000 !important",
                  }}
                >
                  <img
                    className="brandlogo"
                    src={Logo}
                    alt="logo"
                    height="60px"
                  ></img>
                  Leafly
                </a>
                <p style={{ color: "#808080" }}>
                  Leafly is a company that connects farmers and consumers
                  directly, eliminating the need of middleman which helps both
                  farmers and consumers cutting extra-cost
                </p>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                    <ul
                      className="list-unstyled list-inline social text-left"
                      style={{ color: "#C5C5C5 !important" }}
                    >
                      <li className="list-inline-item">
                        <a href="#!">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" target="_blank">
                          <i className="fa fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="container">
              <div className="row text-left text-xs-center text-sm-left text-md-left ">
                <div className="col-xs-12 col-sm-4 col-6 col-md-4">
                  <h5 className="footer-head">Shopping online</h5>
                  <ul className="list-unstyled quick-links">
                    <li>
                      <a href="/orders">Order Status</a>
                    </li>
                    <li>
                      <a href="#!">Shipping and Delivery</a>
                    </li>
                    <li>
                      <a href="#!">Returns</a>
                    </li>
                    <li>
                      <a href="#!">Payment Options</a>
                    </li>
                    <li>
                      <a href="#!">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4 col-6 col-md-4">
                  <h5 className="footer-head">Information</h5>
                  <ul className="list-unstyled quick-links">
                    <li>
                      <a href="#!">Gift Cards</a>
                    </li>
                    <li>
                      <a href="#!">Find our store</a>
                    </li>
                  </ul>
                  <h5 className="footer-head d-md-none d-block">Contact</h5>
                  <ul className="list-unstyled quick-links d-md-none d-block">
                    <li>
                      <a>store@leafly.in</a>
                    </li>
                    <li>
                      <a>Ph no. +91 9523532523</a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4 col-6 col-md-4 d-none d-md-block">
                  <h5 className="footer-head">Contact</h5>
                  <ul className="list-unstyled quick-links">
                    <li>
                      <a>store@leafly.in</a>
                    </li>
                    <li>
                      <a>Ph no. +91 9523532523</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center mb-3"
            style={{ color: "#AEAEAE" }}
          >
            <p className="h6">Leafly - © 2020. ALL RIGHTS RESERVED</p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};
export default Footer;
