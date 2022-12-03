/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import vincent from '../assets/profile-images/vincent.jpg';
import imam from '../assets/profile-images/imam.jpg';
import ryan from '../assets/profile-images/ryan.jpg';

function AboutUsPage() {
  return (
    <section className="about-us container py-5">
      <h2 className="medium__font fw-bold mx-auto about__title p-2 rounded mb-4">Meet Our Teams</h2>

      <div className="profile__wrapper row row-cols-lg-3 row-cols-md-2 row-cols-1 g-5">
        <div className="col">
          <div className="profile__item card">
            <div className="profile-image__wrapper">
              <img className="mb-3" src={vincent} alt="vincent" />
            </div>
            <div className="card-body text-center">
              <h3 className="medium__font fw-bold">Vincent</h3>
              <p className="profile__universty">Universitas Multimedia Nusantara</p>
            </div>
            <div className="card-footer profile-links text-center">
              <a href="https://www.github.com/" target="_blank" rel="noreferrer"><BsGithub /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><BsInstagram /></a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="profile__item card">
            <div className="profile-image__wrapper">
              <img className="mb-3" src={imam} alt="imam" />
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
        </div>

        <div className="col">
          <div className="profile__item card">
            <div className="profile-image__wrapper">
              <img className="mb-3" src={ryan} alt="ryan" />
            </div>
            <div className="card-body text-center">
              <h3 className="medium__font fw-bold">Ryan Hertanto</h3>
              <p className="profile__universty">Universitas Multimedia Nusantara</p>
            </div>
            <div className="card-footer profile-links text-center">
              <a href="https://www.github.com/" target="_blank" rel="noreferrer"><BsGithub /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><BsInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsPage;
