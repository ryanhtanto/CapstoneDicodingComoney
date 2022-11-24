import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import LocaleContext from "../context/LocaleContext";

const AboutCoMoneyPage = () => {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section className="container mt-4">
      <h4 className="fw-bold my-5">{locale === "en" ? "About Co Money" : "Tentang CoMoney"}</h4>
      <div className="container text-justify">
        <div className="row m-1">
          <div className="col-lg-4 col-md-5 d-flex justify-content-center mb-3 py-5 border rounded">
            <img src={logo} style={{width: "250px"}} />
          </div>
          <div className="col-lg-8 col-md-7 d-flex justify-content-center flex-column mb-6 px-5">
            <p className="summary mb-5">{locale === "en" ? "CoMoney is a website-based financial management utility application to help people manage their finances and educate finances with global finance news. With income and expenditure dashboard features, savings targets, automatic calculations and financial news." : "CoMoney adalah aplikasi utilitas manajemen keuangan berbasis situs website untuk membantu orang mengelola keuangan mereka serta memberikan informasi keuangan melalui berita global. Dengan fitur dasbor yang mencakup total pendapatan dan pengeluaran serta detail per-harinya, target tabungan, perhitungan otomatis."}</p>
            <p className="founder d-flex flex-column mb-3">
              {locale === "en" ? " Meet the founders" : "Temui para pendiri"}
              <Link to={`/about-us`} className="col-4 my-1 text-decoration-none btn btn-primary btn-color text-light">
                {locale === "en" ? "Our Team" : "Tim Kami"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoMoneyPage;
