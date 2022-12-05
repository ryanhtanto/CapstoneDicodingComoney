import React from 'react';
import { BsTranslate } from 'react-icons/bs';
import images from '../assets/images/paper-with-list.png';
import RegisterForm from '../components/RegisterForm';
import LocaleContext from '../context/LocaleContext';

function RegisterPage() {
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (
    <section id="register" className="overflow-hidden">
      <div className="row">
        <article className="col-lg-6 bg-auth">
          <div className="container d-flex flex-column min-vh-100 justify-content-center">
            <h3 className="text-center fw-bold text-white">{locale === 'en' ? 'Make a saving plan!' : 'Buat rencana tabungan!'}</h3>
            <p className="text-center text-white">{locale === 'en' ? 'Achieve all your dreams with consistency' : 'Raih semua impianmu dengan konsistensi'}</p>
            <div className="d-flex justify-content-center align-items-center">
              <img src={images} alt="register" className="auth-image" />
            </div>
          </div>
        </article>
        <div className="col-lg-6 d-flex flex-column min-vh-100 justify-content-center px-5 container">
          <button type="button" className="button__locale button-animate text-dark" title={locale === 'en' ? 'Switch Language' : 'Ganti Bahasa'} onClick={toggleLocale}>
            <BsTranslate className="fs-3" />
          </button>
          <h4 className="fw-bold">{locale === 'en' ? 'Register your account' : 'Daftarkan akun anda'}</h4>
          <p className="font-color">{locale === 'en' ? 'Hey, nice to see you! Please fill your identity' : 'Hey, senang bertemu dengan anda! Silahkan isi identitas anda'}</p>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
