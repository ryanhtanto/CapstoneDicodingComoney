import React from "react";
import logo from "../assets/logo.svg";
import { FiMail, FiPhoneCall } from "react-icons/fi";

function Footer() {
  return (
    <div className="bg__footer py-4">
      <div className="container p-4">
        <div class="text-justify">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center footer__section my-2">
              <div>
                <img className='footer__logo' src={logo} alt="logo comoney" />
                <p className="py-1">Jl Kuala Kumal No 4 Jakarta, Indonesia</p>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center footer__section my-2">
              <div>
                <h5 className="fw-bold">About</h5>
                <p><a href="#" className="py-1 my-1 text-decoration-none text-black">About CoMoney</a></p>
                <p><a href="#" className="py-1 my-1 text-decoration-none text-black">Our Team</a></p>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center  footer__section my-2">
              <div>
                <h5 className="fw-bold">Contacts</h5>
                <p className="py-1"> <FiMail className="fs-5"/> comoney@gmail.com</p>
                <p className="py-1"> <FiPhoneCall className="fs-5"/> 021 123321</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <p className="py-1">© CoMoney 2022</p> 
        </div>
      </div>
    </div>
  );
}

export default Footer;
