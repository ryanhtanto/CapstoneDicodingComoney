import React from 'react';
import Swal from 'sweetalert2';
import SavingPlanItem from './SavingPlanItem';
import LocaleContext from '../context/LocaleContext';
import { deleteSavings } from '../utils/savings';
import UserContext from '../context/UserContext';
import SavingPlanItemLoading from './SavingPlanItemLoading';
import nodata from '../assets/images/no-data.svg';

function SavingPlan({ savings, loading, refresh }) {
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);

  const onDeleteHandler = async (id) => {
    Swal.fire({
      title: `${locale === 'en' ? 'Delete This Saving Plan?' : 'Hapus Rencana Tabungan?'}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#013496',
      cancelButtonColor: '#DC3545',
      confirmButtonText: `${locale === 'en' ? 'Delete' : 'Hapus'}`,
      cancelButtonText: `${locale === 'en' ? 'Cancel' : 'Batalkan'}`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.showLoading();
        const deleteHandler = await deleteSavings(id, user.uid);
        if (deleteHandler.success) {
          Swal.fire({
            icon: 'success',
            title: `${locale === 'en' ? 'Delete Saving Plan Success' : 'Berhasil Menghapus Rencana Tabungan'}`,
            showConfirmButton: false,
            timer: 1500,
          });
          refresh();
        } else {
          Swal.fire({
            icon: 'error',
            title: deleteHandler.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
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
    <div className="empty-data mt-5 pt-4">
      <img className="empty-data__image d-block mx-auto" src={nodata} alt="no data" />
      <h2 className="medium__font text-center mt-3 fw-bold">{locale === 'en' ? "You Don't Have Savings Item" : 'Anda Tidak Memiliki Item Tabungan'}</h2>
    </div>
  );
}

export default SavingPlan;
