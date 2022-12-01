import React, { useState } from 'react';
import Swal from 'sweetalert2';
import SavingPlanItem from './SavingPlanItem';
import LocaleContext from '../context/LocaleContext';
import { getAllSavings, deleteSavings } from '../utils/savings';
import UserContext from '../context/UserContext';
import SavingPlanItemLoading from './SavingPlanItemLoading';

function SavingPlan() {
  const [savings, setSavings] = useState(null);
  const [loading, setLoading] = useState(true);
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    const getData = async () => {
      const valueFromDb = await getAllSavings(user.uid);
      if (valueFromDb.length !== 0) {
        setSavings(valueFromDb);
      }
      setLoading(false);
    };
    getData();
  }, []);

  const onDeleteHandler = async (id) => {
    const deleteHandler = await deleteSavings(id, user.uid);
    const valueFromDb = await getAllSavings(user.uid);
    setSavings(valueFromDb);
    if (deleteHandler.success) {
      Swal.fire({
        icon: 'success',
        title: 'Delete Saving Plan Success',
        showConfirmButton: false,
        timer: 2000,
      });
      setSavings(valueFromDb);
      window.location.reload();
    } else {
      Swal.fire({
        icon: 'error',
        title: deleteHandler.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  if (loading) {
    return (
      <SavingPlanItemLoading />
    );
  }

  if (savings === null) {
    return (
      <h4 className="text-center fw-bold medium__font">
        {locale === 'en' ? "You don't have savings item" : 'Anda tidak memiliki item tabungan'}
      </h4>
    );
  }

  if (savings !== null) {
    return (
      savings.map((saving) => (
        // eslint-disable-next-line max-len
        <SavingPlanItem key={saving.id} saving={saving} onDelete={() => onDeleteHandler(saving.id)} />
      ))
    );
  }
}

export default SavingPlan;
