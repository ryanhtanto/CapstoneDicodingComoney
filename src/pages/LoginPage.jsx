import React from 'react';
import { BsTranslate } from 'react-icons/bs';
import images from '../assets/images/people-with-graph.jpeg';
import LoginForm from '../components/LoginForm';
import LocaleContext from '../context/LocaleContext';

function LoginPage() {
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (
    <section id="login" className="overflow-hidden">
      <div className="row">
        <article className="col-lg-6 col-md-6 bg-auth">
          <div className="container d-flex flex-column min-vh-100 justify-content-center">
            <h3 className="text-center fw-bold text-white">{locale === 'en' ? 'Track Your Money' : 'Lacak Uangmu'}</h3>
            <p className="text-center text-white">{locale === 'en' ? 'Do all that in just one simple app' : 'Lakukan semua itu hanya dalam satu aplikasi sederhana'}</p>
            <div className="d-flex justify-content-center align-items-center">
              <img src={images} alt="login" className="auth-image" />
            </div>
          </div>
        </article>
        <div className="col-lg-6 col-md-6 d-flex flex-column min-vh-100 justify-content-center px-5 container">
          <button type="button" className="button__locale button-animate text-dark" title={locale === 'en' ? 'Switch Language' : 'Ganti Bahasa'} onClick={toggleLocale}>
            <BsTranslate className="fs-3" />
          </button>
          <h4 className="fw-bold">{locale === 'en' ? 'Login' : 'Masuk'}</h4>
          <p className="font-color">{locale === 'en' ? 'Welcome back! Please enter your account' : 'Selamat datang kembali! Silahkan masukan akun anda'}</p>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
