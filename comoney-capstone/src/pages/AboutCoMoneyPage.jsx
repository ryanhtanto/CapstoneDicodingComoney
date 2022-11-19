import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

const AboutCoMoneyPage = () => {
  return (
    <section className="container mt-4">
      <h4 className="fw-bold my-5">About Co Money</h4>
      <div className="container text-justify">
        <div className="row m-1">
          <div className="col-lg-4 col-md-5 d-flex justify-content-center mb-3 py-5 border rounded">
            <img src={logo} style={{width: "250px"}} />
          </div>
          <div className="col-lg-8 col-md-7 d-flex justify-content-center flex-column mb-6 px-5">
            <p className="summary mb-5">CoMoney is a website-based financial management utility application to help people manage their finances and educate finances with income and expenditure dashboard features, savings targets, automatic calculations and financial news.</p>
            <p className="founder d-flex flex-column mb-3">
              Meet the founders
              <Link to={`/about-us`} className="col-4 my-1 text-decoration-none btn btn-primary btn-color text-light">
                Our Team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoMoneyPage;
