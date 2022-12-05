import React from 'react';
import Swal from 'sweetalert2';
import SavingPlanItem from './SavingPlanItem';
import LocaleContext from '../context/LocaleContext';
import { getAllSavings, deleteSavings } from '../utils/savings';
import UserContext from '../context/UserContext';
import SavingPlanItemLoading from './SavingPlanItemLoading';

function SavingPlan() {
  const [savings, setSavings] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [refresh, setRefresh] = React.useState(true);
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    const getData = async () => {
      const valueFromDb = await getAllSavings(user.uid);
      setSavings(valueFromDb);
      setLoading(false);
    };
    getData();
  }, [refresh]);

  const onDeleteHandler = async (id) => {
    Swal.showLoading();
    const deleteHandler = await deleteSavings(id, user.uid);
    if (deleteHandler.success) {
      Swal.fire({
        icon: 'success',
        title: `${locale === 'en' ? 'Delete Saving Plan Success' : 'Berhasil Menghapus Rencana Tabungan'}`,
        showConfirmButton: false,
        timer: 1500,
      });

      if (refresh) {
        setRefresh(false);
        return;
      }
      setRefresh(true);
    } else {
      Swal.fire({
        icon: 'error',
        title: deleteHandler.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (loading) {
    return (
      <SavingPlanItemLoading />
    );
  }

  if (savings.length) {
    return (
      savings.map((saving) => (
        <SavingPlanItem
          key={saving.id}
          saving={saving}
          onDelete={() => onDeleteHandler(saving.id)}
        />
      ))
    );
  }

  return (
    <h4 className="text-center fw-bold medium__font">
      {locale === 'en' ? "You don't have savings item" : 'Anda tidak memiliki item tabungan'}
    </h4>
  );
}

export default SavingPlan;
