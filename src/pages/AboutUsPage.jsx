/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import vincent from '../assets/profile-images/vincent.jpg';
import imam from '../assets/profile-images/imam.jpg';
import ryan from '../assets/profile-images/ryan.jpg';
import LocaleContext from '../context/LocaleContext';

function AboutUsPage() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section className="about-us container py-5">
      <h2 className="medium__font fw-bold mx-auto about__title p-2 rounded mb-2">{locale === 'en' ? 'Our Teams' : 'Tim Kita'}</h2>

      <div className="profile__wrapper d-flex justify-content-evenly flex-wrap g-4">
        <div className="profile__item card m-3">
          <div className="profile-image__wrapper">
            <img src={vincent} alt="vincent" />
          </div>
          <div className="card-body d-block text-center">
            <h3 className="medium__font fw-bold">Vincent</h3>
            <p className="profile__universty">Universitas Multimedia Nusantara</p>
          </div>
          <div className="card-footer profile-links text-center">
            <a href="https://www.github.com/vincentt14" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/vincent-240775185/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://www.instagram.com/_vincenttlim" target="_blank" rel="noreferrer"><BsInstagram /></a>
          </div>
        </div>

        <div className="profile__item card m-3">
          <div className="profile-image__wrapper">
            <img src={imam} alt="imam" />
          </div>
          <div className="card-body text-center">
            <h3 className="medium__font fw-bold">Imam Faraz Aditya</h3>
            <p className="profile__universty">Universitas Pasundan</p>
          </div>
          <div className="card-footer profile-links text-center">
            <a href="https://www.github.com/imfaditya" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/imfaditya" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://www.instagram.com/imfaditya" target="_blank" rel="noreferrer"><BsInstagram /></a>
          </div>
        </div>

        <div className="profile__item card m-3">
          <div className="profile-image__wrapper">
            <img src={ryan} alt="ryan" />
          </div>
          <div className="card-body text-center">
            <h3 className="medium__font fw-bold">Ryan Hertanto</h3>
            <p className="profile__universty">Universitas Multimedia Nusantara</p>
          </div>
          <div className="card-footer profile-links text-center">
            <a href="https://www.github.com/ryanhtanto" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/ryan-hertanto-06aa531b6/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://www.instagram.com/_ryanhertanto" target="_blank" rel="noreferrer"><BsInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsPage;
