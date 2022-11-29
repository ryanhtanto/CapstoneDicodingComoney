/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import LocaleContext from '../context/LocaleContext';

function AboutCoMoneyPage() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section className="container mt-4">
      <h4 className="fw-bold my-5">{locale === 'en' ? 'About Co Money' : 'Tentang CoMoney'}</h4>
      <div className="container text-justify">
        <div className="row m-1">
          <div className="col-lg-4 col-md-5 d-flex justify-content-center mb-3 py-5 border rounded">
            <img src={logo} style={{ width: '250px' }} alt="CoMoney" />
          </div>
          <div className="col-lg-8 col-md-7 d-flex justify-content-center flex-column mb-3 px-5">
            <p className="summary mb-3">
              {locale === 'en' ? 'CoMoney is a website-based financial management utility application to help people manage their finances and educate finances with income and expenditure dashboard features, savings targets, automatic calculations and daily financial news.' : 'CoMoney adalah aplikasi utilitas pengelolaan keuangan berbasis website untuk membantu masyarakat mengelola keuangannya dan mengedukasi. dengan fitur dashboard pemasukan dan pengeluaran, target tabungan, kalkulasi otomatis dan berita keuangan harian.'}
            </p>
            <Link to="/about-us" className="btn btn-primary input__height form-control btn-color">
              {locale === 'en' ? 'Meet the founders' : 'Lihat para penemu'}
            </Link>
          </div>
        </div>
      </div>
      <h4 className="fw-bold my-3">{locale === 'en' ? 'Our Main Features' : 'Fitur Utama Kami'}</h4>
      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-lg-4 col-md-4 d-flex justify-content-center mb-4">
            <div className="card" style={{ width: '24rem' }}>
              <div className="card-body">
                <p className="card-text fw-bold">{locale === 'en' ? 'Financial Management' : 'Manajemen Keuangan'}</p>
                <p className="card-text">{locale === 'en' ? 'CoMoney provides a total calculation of all income and expenses that have been input by the user and displayed in the form of a balance. Daily and monthly income and expenses are also displayed so that users can more easily manage their finances' : 'CoMoney menyediakan kalkulasi total dari semua pemasukan dan juga pengeluaran yang sudah di input oleh user dan ditampilkan dalam bentuk saldo. Pemasukan serta pengeluaran harian dan bulanan juga di tampilkan agar user lebih mudah memanage keuangan mereka'}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 d-flex justify-content-center mb-4">
            <div className="card" style={{ width: '24rem' }}>
              <div className="card-body">
                <p className="card-text fw-bold">{locale === 'en' ? 'Income and Expense Log' : 'Catatan Pemasukan dan Pengeluaran'}</p>
                <p className="card-text">{locale === 'en' ? 'CoMoney provides a log of records of all income and expenses inputted by the user. Users can also use the date or month filter to view log on a specific date or month' : 'CoMoney menyediakan catatan dari semua masukan dan juga pengeluaran yang dimasukkan oleh user. User juga dapat menggunakan fitur filter tanggal ataupun bulan untuk melihat catatan pada tanggal atau bulan dengan spesifik'}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 d-flex justify-content-center mb-4">
            <div className="card" style={{ width: '24rem' }}>
              <div className="card-body">
                <p className="card-text fw-bold">{locale === 'en' ? 'Saving Planner' : 'Perencana Tabungan'}</p>
                <p className="card-text">{locale === 'en' ? 'User can create a savings plan by setting a target month, CoMoney application will automatically calculate how much amount user have to save per month' : 'User dapat membuat rencana tabungan dengan menentukan target bulan, aplikasi akan otomatis mengkalkulasi berapa jumlah yang harus di simpan per bulannya'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCoMoneyPage;
