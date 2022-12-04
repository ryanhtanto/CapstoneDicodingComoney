import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useInput from '../hooks/UseInput';
import { editSavingsMoney, getSavings } from '../utils/savings';
import LocaleContext from '../context/LocaleContext';
import UserContext from '../context/UserContext';

function EditSavingsForm({ getId }) {
  const [selectedSaving, setSelectedSaving] = React.useState('');
  const [savingsName, setSavingsName, setDefaultName] = useInput('');
  const [amount, setAmount, setDefaultAmount] = useInput('');
  const [targetDate, setTargetDate, setDefaultTarget] = useInput('');
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function selectedSavings() {
      const detail = await getSavings(user.uid, parseFloat(getId));
      setSelectedSaving({
        name: detail.data.savingsName,
        amount: detail.data.amount,
        targetDate: detail.data.targetDate,
      });

      setDefaultName(detail.data.savingsName);
      setDefaultAmount(detail.data.amount);
      setDefaultTarget(detail.data.targetDate);
    }
    selectedSavings();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (savingsName === '' || amount === '' || savingsName === 0 || amount === 0) {
      Swal.fire({
        icon: 'warning',
        title: `${locale === 'en' ? 'You Need To Fill All Required Form' : 'Anda Perlu Mengisi Semua Formulir yang Diperlukan'}`,
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      const detail = await getSavings(user.uid, parseFloat(getId));
      const parseCurrentDate = detail.data.currentDate.substring(0, 7);
      if (parseCurrentDate < targetDate) {
        const edit = await editSavingsMoney(
          detail.id,
          savingsName,
          amount,
          targetDate,
          detail.data.currentDate,
          user.uid,
        );
        if (edit.success) {
          Swal.fire({
            icon: 'success',
            title: `${locale === 'en' ? 'Saving Plan Saved' : 'Rencana Tabungan Tersimpan'}`,
            showConfirmButton: false,
            timer: 1000,
          });
          navigate('/saving-planner');
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: `${locale === 'en' ? 'Target Date Must Be Greater Than This Month' : 'Tanggal Target Harus Lebih Besar Dari Bulan Ini'}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };

  return (
    <form className="my-5" onSubmit={onSubmit}>
      <input type="text" className="form-control my-4 input__height" placeholder="Name" aria-label="Name" value={savingsName || selectedSaving.name} onChange={setSavingsName} />
      <input type="number" className="form-control my-4 input__height" placeholder="Amount target" aria-label="Amount target" value={amount || selectedSaving.amount} onChange={setAmount} />
      <input className="form-control my-4 input__height" type="month" value={targetDate || selectedSaving.targetDate} onChange={setTargetDate} />
      <button type="submit" className="btn btn-primary input__height form-control btn-color">{locale === 'en' ? 'Edit your Savings' : 'Edit Tabungan Anda'}</button>
    </form>
  );
}

EditSavingsForm.propTypes = {
  getId: PropTypes.string.isRequired,
};

export default EditSavingsForm;
