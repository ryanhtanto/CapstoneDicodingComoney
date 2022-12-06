import React from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-dark.svg';
import LocaleContext from '../context/LocaleContext';

function Footer() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="bg__footer py-1">
      <div className="container p-4">
        <div className="text-justify">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center footer__section my-2">
              <div>
                <img className="footer__logo" src={logo} alt="logo comoney" />
                <p className="py-3 small__font">{locale === 'en' ? 'Kuala Kumal Street, No. 4, Jakarta' : 'Jl Kuala Kumal, No. 4, Jakarta, Indonesia'}</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center footer__section my-2">
              <div>
                <h2 className="fw-bold small__font">{locale === 'en' ? 'About' : 'Tentang'}</h2>
                <p>
                  <Link to="/about/comoney" className="pedingFoot text-decoration-none text-black small__font d-block">
                    {locale === 'en' ? 'About CoMoney' : 'Tentang CoMoney'}
                  </Link>
                </p>
                <p>
                  <Link to="/about/teams" className="pedingFoot text-decoration-none text-black small__font d-block">
                    {locale === 'en' ? 'Our Team' : 'Tim Kami'}
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center footer__section my-2">
              <div>
                <h2 className="fw-bold small__font">{locale === 'en' ? 'Contacts' : 'Kontak'}</h2>
                <p className="pedingFoot">
                  <FiMail className="fs-5" />
                  {' '}
                  comoney@gmail.com
                </p>
                <p className="pedingFoot">
                  <FiPhoneCall className="fs-5" />
                  {' '}
                  021 123321
                </p>
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
