import React from "react";
import logo from "../assets/logo-light.svg";
import { FiMoon, FiLogOut } from "react-icons/fi";
import UserContext from "../context/UserContext";
import { logout } from "../utils/authentication-user";

function Navigation() {
  const { user, setUser } = React.useContext(UserContext);

  const onLogout = () => {
    logout(user.accessToken);
    setUser(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar__container">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="navbar__logo" src={logo} alt="logo comoney" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item me-2 active">
              <a className="nav-link" href="/">
                Dashboard
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link" href="/news">
                News
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link" href="/saving-planner">
                Savings Planner
              </a>
            </li>
            <li className="nav-item me-2">
              <button className="navbar__button d-flex align-items-center" type="submit" onClick={onLogout}>
                <FiLogOut />
              </button>
            </li>
            <li className="nav-item me-2">
              <button className="navbar__button d-flex align-items-center">
                <FiMoon />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
