import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useInput from '../hooks/UseInput';
import { addSavingsMoney } from '../utils/savings';
import LocaleContext from '../context/LocaleContext';
import UserContext from '../context/UserContext';
import { getMonthYear, getNextMonthYear } from '../utils/date-formatter';

function AddSavingForm() {
  const [savingsName, setSavingsName] = useInput('');
  const [amount, setAmount] = useInput('');
  const [targetDate, setTargetDate] = useInput('');
  const [startThisMonth, setStartThisMonth] = React.useState(null);
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (savingsName === '' || amount === '' || savingsName === 0 || amount === 0 || startThisMonth === null) {
      Swal.fire({
        icon: 'warning',
        title: `${locale === 'en' ? 'Please fill all your information' : 'Silakan isi semua informasi Anda'}`,
        showConfirmButton: false,
        timer: 1000,
      });
    }

    let startDate;
    if (startThisMonth) {
      startDate = getMonthYear();
    } else {
      startDate = getNextMonthYear();
    }

    if (startDate < targetDate) {
      const savingsDetail = await addSavingsMoney(
        savingsName,
        amount,
        targetDate,
        user.uid,
        startDate,
      );
      if (savingsDetail.success) {
        Swal.fire({
          icon: 'success',
          title: `${locale === 'en' ? 'Add Saving Plan Success' : 'Berhasil Menambahkan Rencana Tabungan'}`,
          showConfirmButton: false,
          timer: 1000,
        });
        navigate('/saving-planner');
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: `${locale === 'en' ? 'Your target date is before current date' : 'Tanggal target Anda sebelum tanggal saat ini'}`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <form className="my-5" onSubmit={onSubmit}>
      <input type="text" className="form-control my-4 input__height" placeholder={locale === 'en' ? 'Savings Name' : 'Nama Tabungan'} aria-label={locale === 'en' ? 'Savings Name' : 'Nama Tabungan'} value={savingsName} onChange={setSavingsName} />
      <input type="number" className="form-control my-2 input__height" placeholder={locale === 'en' ? 'Amount Target' : 'Jumlah Target'} aria-label={locale === 'en' ? 'Amount Target' : 'Jumlah Target'} value={amount} onChange={setAmount} />
      <label htmlFor="targetDate" className="w-100 mb-4">
        <p className="about__title my-2 px-2 py-1 rounded">{locale === 'en' ? 'Target Date' : 'Tanggal Target'}</p>
        <input id="targetDate" type="month" className="form-control input__height" value={targetDate} onChange={setTargetDate} />
      </label>
      <div className="mb-4">
        <p className="about__title my-2 px-2 py-1 rounded">{locale === 'en' ? 'Start Savings From' : 'Mulai Menabung Dari'}</p>
        <div className="form-check mt-2">
          <label className="form-check-label" htmlFor="startDate">
            {locale === 'en' ? 'This Month' : 'Bulan Ini'}
            <input className="form-check-input" type="radio" name="startDate" id="startDate" onChange={() => setStartThisMonth(true)} />
          </label>
        </div>
        <div className="form-check mt-2">
          <label className="form-check-label" htmlFor="startDate">
            {locale === 'en' ? 'Next Month' : 'Bulan Depan'}
            <input className="form-check-input" type="radio" name="startDate" id="startDate" onChange={() => setStartThisMonth(false)} />
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-lg form-control btn-color">{locale === 'en' ? 'Add New Savings' : 'Tambahkan Tabungan Baru'}</button>
    </form>
  );
}

export default AddSavingForm;
