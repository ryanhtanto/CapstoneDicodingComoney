import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { BsTranslate } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../assets/logo2-light.svg';
import UserContext from '../context/UserContext';
import { logout } from '../utils/authentication-user';
import LocaleContext from '../context/LocaleContext';

function Navigation({ toggleLocale }) {
  const { user, setUser } = React.useContext(UserContext);
  const { locale } = React.useContext(LocaleContext);

  const onLogout = () => {
    Swal.fire({
      title: `${locale === 'en' ? 'Are You Sure?' : 'Apakah Anda Yakin?'}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: `${locale === 'en' ? 'Log Out' : 'Keluar'}`,
      cancelButtonText: `${locale === 'en' ? 'Cancel' : 'Batal'}`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        logout(user.accessToken);
        setUser(null);
      }
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar__container">
      <div className="container">
        <a className="navbar-brand" href="/" title={locale === 'en' ? 'Back to Dashboard' : 'Kembali ke Dasbor'}>
          <img className="navbar__logo" src={logo} alt="logo comoney" />
        </a>
        <button className="navbar-toggler pedingSaving" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item me-2 active">
              <Link to="/" className="nav-link">
                {locale === 'en' ? 'Dashboard' : 'Dasbor'}
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link to="/news" className="nav-link">
                {locale === 'en' ? 'News' : 'Berita'}
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link to="/saving-planner" className="nav-link">
                {locale === 'en' ? 'Savings Planner' : 'Rencana Tabungan'}
              </Link>
            </li>
            <li className="nav-item me-2">
              <button className="navbar__button d-flex align-items-center pedingNav" title={locale === 'en' ? 'Log Out' : 'Keluar'} type="submit" onClick={onLogout}>
                <FiLogOut />
              </button>
            </li>
            <li className="nav-item me-2">
              <button type="button" className="navbar__button d-flex align-items-center pedingNav" title={locale === 'en' ? 'Switch Language' : 'Ganti Bahasa'} onClick={toggleLocale}>
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
