import React from 'react';
import LocaleContext from '../context/LocaleContext';
import piggyBank from '../assets/images/piggy-bank.svg';
import organizer from '../assets/images/online-organizer.svg';
import plans from '../assets/images/plans.svg';
import timeline from '../assets/images/timeline.svg';

function AboutCoMoneyPage() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="container">
      <section className="row about-company my-5 mx-auto">
        <div className="col-lg-6 my-auto">
          <h2 className="medium__font fw-bold mb-4 about__title rounded p-2">{locale === 'en' ? 'About CoMoney' : 'Tentang CoMoney'}</h2>
          <p className="lh-lg">
            {locale === 'en' ? 'CoMoney is a website-based financial management utility application to help people manage their finances and educate finances with income and expenditure dashboard features, savings targets, automatic calculations and daily financial news.' : 'CoMoney adalah aplikasi utilitas pengelolaan keuangan berbasis website untuk membantu masyarakat mengelola keuangannya dan mengedukasi. dengan fitur dashboard pemasukan dan pengeluaran, target tabungan, kalkulasi otomatis dan berita keuangan harian.'}
          </p>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <img src={piggyBank} alt="piggy-bank" className="about-company__image" />
        </div>
      </section>

      <section className="about-feature row mx-auto py-4">
        <h2 className="about-underline__title medium__font fw-bold p-2 col-12 mx-auto mb-5">{locale === 'en' ? 'Why Us' : 'Mengapa Kita?'}</h2>
        <div className="feature-content row col-12">
          <div className="col-lg-4">
            <img className="feature__image mx-auto d-block" src={organizer} alt="organize financial" />
            <h3 className="fw-bold medium__font text-center mt-4">{locale === 'en' ? 'Financial Management' : 'Manajemen Keuangan'}</h3>
            <p className="lh-lg text-center">{locale === 'en' ? 'CoMoney provides a total calculation of all income and expenses that have been input by the user and displayed in the form of a balance. Daily and monthly income and expenses are also displayed so that users can more easily manage their finances' : 'CoMoney menyediakan kalkulasi total dari semua pemasukan dan juga pengeluaran yang sudah di input oleh user dan ditampilkan dalam bentuk saldo. Pemasukan serta pengeluaran harian dan bulanan juga di tampilkan agar user lebih mudah memanage keuangan mereka'}</p>
          </div>
          <div className="col-lg-4">
            <img className="feature__image mx-auto d-block" src={plans} alt="saving plan" />
            <h3 className="fw-bold medium__font text-center mt-4">{locale === 'en' ? 'Income and Expense Log' : 'Catatan Pemasukan dan Pengeluaran'}</h3>
            <p className="lh-lg text-center">{locale === 'en' ? 'CoMoney provides a log of records of all income and expenses inputted by the user. Users can also use the date or month filter to view log on a specific date or month' : 'CoMoney menyediakan catatan dari semua masukan dan juga pengeluaran yang dimasukkan oleh user. User juga dapat menggunakan fitur filter tanggal ataupun bulan untuk melihat catatan pada tanggal atau bulan dengan spesifik'}</p>
          </div>
          <div className="col-lg-4">
            <img className="feature__image mx-auto d-block" src={timeline} alt="saving plan" />
            <h3 className="fw-bold medium__font text-center mt-4">{locale === 'en' ? 'Saving Planner' : 'Perencana Tabungan'}</h3>
            <p className="lh-lg text-center">{locale === 'en' ? 'User can create a savings plan by setting a target month, CoMoney application will automatically calculate how much amount user have to save per month' : 'User dapat membuat rencana tabungan dengan menentukan target bulan, aplikasi akan otomatis mengkalkulasi berapa jumlah yang harus di simpan per bulannya'}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutCoMoneyPage;
