import React, { useState } from 'react';
import UserContext from '../context/UserContext';
import { getAllSavings } from '../utils/savings';
import LocaleContext from '../context/LocaleContext';

function SavingBarCount() {
  const [target, setTarget] = useState('');
  const [total, setTotal] = useState('');
  const [loading, setLoading] = useState(true);
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    async function getData() {
      const valueFromDb = await getAllSavings(user.uid);
      if (valueFromDb) {
        let totalAmount = 0;
        valueFromDb.forEach((doc) => {
          totalAmount += parseFloat(doc.data.amount);
          const numberString = totalAmount.toString().replace(/[^,\d]/g, '');
          const split = numberString.split(',');
          const sisa = split[0].length % 3;
          let rupiah = split[0].substring(0, sisa);
          const ribuan = split[0].substring(sisa).match(/\d{3}/gi);

          if (ribuan) {
            const separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
          }
          rupiah = split[1] !== undefined ? `${rupiah},${split[1]}` : rupiah;
          setTotal(rupiah);
          setTarget(valueFromDb.length);
        });
      }
      setLoading(false);
    }
    getData();
  }, []);

  if (loading) {
    return (
      <h4 className="mx-4 my-auto placeholder-glow w-100">
        <span className="w-75 placeholder placeholder-lg rounded" />
        <span className="placeholder rounded placeholder-lg w-50" />
      </h4>
    );
  }

  if (total && target) {
    return (
      <div className="mx-4 my-auto">
        <p className="fw-bold mb-1">
          {locale === 'en' ? 'You have ' : 'Kamu mempunyai '}
          {' '}
          {target}
          {' '}
          {locale === 'en' ? 'savings target!' : 'target tabungan!'}
        </p>
        <p>
          Total Rp
          {total}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-4 my-auto">
      <p className="fw-bold mb-1">
        {' '}
        {locale === 'en' ? "You don't have savings target!" : 'Anda tidak memiliki target tabungan!'}
      </p>
      <p>
        {' '}
        {locale === 'en' ? 'Go on! Make your target' : 'Ayo! Buat target Anda'}
      </p>
    </div>
  );
}

export default SavingBarCount;
