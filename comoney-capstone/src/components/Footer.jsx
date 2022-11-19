import React from "react";
import logo from "../assets/logo.svg";
import { FiMail, FiPhoneCall } from "react-icons/fi";

function Footer() {
  return (
    <div className="bg__footer py-1">
      <div className="container p-4">
        <div className="text-justify">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center footer__section my-2">
              <div>
                <img className='footer__logo' src={logo} alt="logo comoney" />
                <p className="py-1 small__font">Jl Kuala Kumal No 4 Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center footer__section my-2">
              <div>
                <h2 className="fw-bold small__font">About</h2>
                <p ><a href="#" className="py-3 my-1 text-decoration-none text-black small__font">About CoMoney</a></p>
                <p><a href="#" className="py-3 my-1 text-decoration-none text-black small__font">Our Team</a></p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center footer__section my-2">
              <div>
                <h2 className="fw-bold small__font">Contacts</h2>
                <p className="py-1"> <FiMail className="fs-5" /> comoney@gmail.com</p>
                <p className="py-1"> <FiPhoneCall className="fs-5" /> 021 123321</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="py-1">© CoMoney 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
