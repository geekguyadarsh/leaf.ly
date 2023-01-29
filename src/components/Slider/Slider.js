import React from "react";
import "./Slider.css";
import sliderImg from "../../assets/sliderImg.png";
import btnArrow from "../../assets/btnArrow.svg";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div id="slider" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#slider" data-slide-to="0" className="active"></li>
        <li data-target="#slider" data-slide-to="1"></li>
        <li data-target="#slider" data-slide-to="2"></li>
        <li data-target="#slider" data-slide-to="3"></li>
        <li data-target="#slider" data-slide-to="4"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 carousel-bg"
            src={sliderImg}
            alt="First slide"
          />
          <div
            className="carousel-caption d-flex flex-column align-items-baseline"
            style={{
              position: "absolute",
              right: "15%",
              bottom: "20px",
              left: "10%",
              zIndex: "10",
              paddingTop: "20px",
              paddingBottom: "20px",
              color: "#fff",
            }}
          >
            <h5
              style={{
                fontFamily: "PlayfairDisplay",
                letterSpacing: "1.3px",
                textAlign: "initial",
                textTransform: "capitalize",
                fontSize: "23px",
                // color: "black",
                textShadow: "3px 3px 6px #000000",
              }}
            >
              Fresh and Organic crops <br />
              <span style={{ fontSize: "1.2em" }}>
                delivered to your doorstep
              </span>
            </h5>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",

                  fontSize: "13px",
                }}
              >
                SHOP NOW{" "}
                <span
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    paddingLeft: "8px",
                  }}
                >
                  <img
                    src={btnArrow}
                    alt="btn"
                    style={{
                      padding: "10px",
                      background: "#FFBC00",
                      borderRadius: "50%",
                    }}
                  />
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 carousel-bg"
            src={sliderImg}
            alt="First slide"
          />
          <div
            className="carousel-caption d-flex flex-column align-items-baseline"
            style={{
              position: "absolute",
              right: "15%",
              bottom: "20px",
              left: "5%",
              zIndex: "10",
              paddingTop: "20px",
              paddingBottom: "20px",
              color: "#fff",
            }}
          >
            <h5
              style={{
                fontFamily: "PlayfairDisplay",
                letterSpacing: "1.3px",
                textAlign: "initial",
                textTransform: "capitalize",
                fontSize: "23px",
                textShadow: "3px 3px 6px #000000",
              }}
            >
              Fresh and Organic crops <br />
              <span style={{ fontSize: "1.2em" }}>
                delivered to your doorstep
              </span>
            </h5>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                SHOP NOW{" "}
                <span
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    paddingLeft: "8px",
                  }}
                >
                  <img
                    src={btnArrow}
                    alt="btn"
                    style={{
                      padding: "10px",
                      background: "#FFBC00",
                      borderRadius: "50%",
                    }}
                  />
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 carousel-bg"
            src={sliderImg}
            alt="First slide"
          />
          <div
            className="carousel-caption d-flex flex-column align-items-baseline"
            style={{
              position: "absolute",
              right: "15%",
              bottom: "20px",
              left: "5%",
              zIndex: "10",
              paddingTop: "20px",
              paddingBottom: "20px",
              color: "#fff",
            }}
          >
            <h5
              style={{
                fontFamily: "PlayfairDisplay",
                letterSpacing: "1.3px",
                textAlign: "initial",
                textTransform: "capitalize",
                fontSize: "23px",
                textShadow: "3px 3px 6px #000000",
              }}
            >
              Fresh and Organic crops <br />
              <span style={{ fontSize: "1.3em" }}>
                delivered to your doorstep
              </span>
            </h5>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                SHOP NOW{" "}
                <span
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    paddingLeft: "8px",
                  }}
                >
                  <img
                    src={btnArrow}
                    alt="btn"
                    style={{
                      padding: "10px",
                      background: "#FFBC00",
                      borderRadius: "50%",
                    }}
                  />
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 carousel-bg"
            src={sliderImg}
            alt="First slide"
          />
          <div
            className="carousel-caption d-flex flex-column align-items-baseline"
            style={{
              position: "absolute",
              right: "15%",
              bottom: "20px",
              left: "5%",
              zIndex: "10",
              paddingTop: "20px",
              paddingBottom: "20px",
              color: "#fff",
            }}
          >
            <h5
              style={{
                fontFamily: "PlayfairDisplay",
                letterSpacing: "1.3px",
                textAlign: "initial",
                textTransform: "capitalize",
                fontSize: "23px",
                textShadow: "3px 3px 6px #000000",
              }}
            >
              Fresh and Organic crops <br />
              <span style={{ fontSize: "1.2em" }}>
                delivered to your doorstep
              </span>
            </h5>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                SHOP NOW{" "}
                <span
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    paddingLeft: "8px",
                  }}
                >
                  <img
                    src={btnArrow}
                    alt="btn"
                    style={{
                      padding: "10px",
                      background: "#FFBC00",
                      borderRadius: "50%",
                    }}
                  />
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 carousel-bg"
            src={sliderImg}
            alt="First slide"
          />
          <div
            className="carousel-caption d-flex flex-column align-items-baseline"
            style={{
              position: "absolute",
              right: "15%",
              bottom: "20px",
              left: "5%",
              zIndex: "10",
              paddingTop: "20px",
              paddingBottom: "20px",
              color: "#fff",
            }}
          >
            <h5
              style={{
                fontFamily: "PlayfairDisplay",
                letterSpacing: "1.3px",
                textAlign: "initial",
                textTransform: "capitalize",
                fontSize: "23px",
                textShadow: "3px 3px 6px #000000",
              }}
            >
              Fresh and Organic crops <br />
              <span style={{ fontSize: "1.2em" }}>
                delivered to your doorstep
              </span>
            </h5>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                SHOP NOW{" "}
                <span
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    paddingLeft: "8px",
                  }}
                >
                  <img
                    src={btnArrow}
                    alt="btn"
                    style={{
                      padding: "10px",
                      background: "#FFBC00",
                      borderRadius: "50%",
                    }}
                  />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
