import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { editSavingsMoney, getSavings } from '../utils/savings';
import LocaleContext from '../context/LocaleContext';
import UserContext from '../context/UserContext';

function EditSavingsForm({ getId }) {
  const [selectedSaving, setSelectedSaving] = React.useState('');
  const [savingsName, setSavingsName, setDefaultSavingName] = useInput('');
  const [loading, setLoading] = React.useState(true);
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
        startDate: detail.data.startDate,
      });
      setDefaultSavingName(detail.data.savingsName);
      setLoading(false);
    }
    selectedSavings();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (savingsName === '') {
      Swal.fire({
        icon: 'warning',
        title: `${locale === 'en' ? 'Savings Name Cannot Be Empty' : 'Nama Rencana Tabungan Tidak Boleh Kosong'}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const edit = await editSavingsMoney(
        getId,
        savingsName,
        selectedSaving.amount,
        selectedSaving.targetDate,
        selectedSaving.startDate,
        user.uid,
      );
      if (edit.success) {
        Swal.fire({
          icon: 'success',
          title: `${locale === 'en' ? 'Saving Plan Saved' : 'Rencana Tabungan Tersimpan'}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/saving-planner');
      }
    }
  };

  if (loading) {
    return;
  }

  return (
    <form className="my-5" onSubmit={onSubmit}>
      <input type="text" className="form-control my-4 input__height" placeholder="Name" aria-label="Name" value={savingsName} onChange={setSavingsName} />
      <input type="number" className="form-control my-4 input__height" placeholder="Amount target" aria-label="Amount target" value={selectedSaving.amount} disabled />
      <input className="form-control my-4 input__height" type="month" value={selectedSaving.targetDate} disabled />
      <input className="form-control my-4 input__height" type="month" value={selectedSaving.startDate} disabled />
      <button type="submit" className="btn btn-primary input__height form-control btn-color">{locale === 'en' ? 'Save' : 'Simpan'}</button>
    </form>
  );
}

EditSavingsForm.propTypes = {
  getId: PropTypes.string.isRequired,
};

export default EditSavingsForm;
