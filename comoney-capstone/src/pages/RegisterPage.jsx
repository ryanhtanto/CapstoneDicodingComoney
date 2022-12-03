import React from 'react';
import images from '../assets/images/paper-with-list.png';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
  return (
    <section id="register" className="overflow-hidden">
      <div className="row">
        <article className="col-lg-6 bg-auth">
          <div className="container d-flex flex-column min-vh-100 justify-content-center">
            <h3 className="text-center fw-bold text-white">On the go!</h3>
            <p className="text-center text-white">Do incredible things anywhere in the world</p>
            <div className="d-flex justify-content-center align-items-center">
              <img src={images} alt="register" className="auth-image" />
            </div>
          </div>
        </article>
        <div className="col-lg-6 d-flex flex-column min-vh-100 justify-content-center px-5 container">
          <h4 className="fw-bold">Register your account</h4>
          <p className="font-color">Hey, Nice to see you! Please fill your identity</p>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
