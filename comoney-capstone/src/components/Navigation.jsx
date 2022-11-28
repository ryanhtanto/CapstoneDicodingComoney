import React from "react";
import logo from "../assets/logo-light.svg";
import { FiLogOut } from "react-icons/fi";
import { BsTranslate } from "react-icons/bs";
import UserContext from "../context/UserContext";
import { logout } from "../utils/authentication-user";
import LocaleContext from "../context/LocaleContext";
import { Link } from "react-router-dom";

function Navigation({ toggleLocale }) {
  const { user, setUser } = React.useContext(UserContext);
  const { locale } = React.useContext(LocaleContext);

  const onLogout = () => {
    logout(user.accessToken);
    setUser(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar__container">
      <div className="container">
        <a className="navbar-brand" href="/" title={locale === 'en' ? 'Back to Dashboard' : 'Kembali ke Dasbor'}>
          <img className="navbar__logo" src={logo} alt="logo comoney" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item me-2 active">
              <Link to={'/'} className="nav-link">
                {locale === "en" ? "Dashboard" : "Dasbor"}
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link to={'/news'} className="nav-link">
                {locale === "en" ? "News" : "Berita"}
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link to={'/saving-planner'} className="nav-link">
                {locale === "en" ? "Savings Planner" : "Perencana Tabungan"}
              </Link>
            </li>
            <li className="nav-item me-2">
              <button className="navbar__button d-flex align-items-center" title={locale === 'en' ? 'Log Out' : 'Keluar'} type="submit" onClick={onLogout}>
                <FiLogOut />
              </button>
            </li>
            <li className="nav-item me-2">
              <button className="navbar__button d-flex align-items-center" title={locale === 'en' ? 'Switch Language' : 'Ganti Bahasa'} onClick={toggleLocale}>
                <BsTranslate />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
