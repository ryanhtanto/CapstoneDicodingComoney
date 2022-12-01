import React from 'react';
import { FiCalendar, FiCheckSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import savings from '../assets/images/saving-item.png';
import DeleteSavings from './DeleteSavings';
import EditSavingButton from './EditSavingButton';
import LocaleContext from '../context/LocaleContext';

function SavingPlanItem({ saving, onDelete }) {
  const nowDate = new Date(saving.data.currentDate);
  const targetDate = new Date(saving.data.targetDate);

  // eslint-disable-next-line max-len
  const differenceInMonth = targetDate.getMonth() - nowDate.getMonth() + 12 * (targetDate.getFullYear() - nowDate.getFullYear());
  const month = targetDate.toLocaleString('default', { month: 'long' });
  const year = targetDate.getFullYear();

  const [rupias, setRupias] = React.useState([]);
  const [roundedAmount, setRoundedAmount] = React.useState([]);
  const [isOneMonth, setIsOneMonth] = React.useState(false);
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    async function formatRupias() {
      const numberString = saving.data.amount.replace(/[^,\d]/g, '').toString();
      const split = numberString.split(',');
      const sisa = split[0].length % 3;
      let rupiah = split[0].substring(0, sisa);
      const ribuan = split[0].substring(sisa).match(/\d{3}/gi);
      if (ribuan) {
        const separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
      }
      rupiah = split[1] !== undefined ? `${rupiah},${split[1]}` : rupiah;
      setRupias(rupiah);
    }
    async function spendPerMonth() {
      let spend = 0;
      spend = saving.data.amount / differenceInMonth;

      const rounded = Math.round(spend);
      const numberString = rounded.toString();
      const split = numberString.split(',');
      const sisa = split[0].length % 3;
      let rupiah = split[0].substring(0, sisa);
      const ribuan = split[0].substring(sisa).match(/\d{3}/gi);

      if (ribuan) {
        const separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
      }
      rupiah = split[1] !== undefined ? `${rupiah},${split[1]}` : rupiah;
      setRoundedAmount(rupiah);
      if (differenceInMonth === 1) {
        setIsOneMonth(true);
      } else {
        setIsOneMonth(false);
      }
    }
    formatRupias();
    spendPerMonth();
  }, []);

  return (
    <div className="col-md-12 col-lg-6 mb-3">
      <div className="card">
        <div className="card-body d-flex">
          <div className="saving-image__wrapper my-auto">
            <img src={savings} alt="icon-saving-item" className="saving-image-item pe-2" />
          </div>
          <div className="saving-item__wrapper w-100">
            <h2 className="card-title fw-bold small__font mb-4">{saving.data.savingsName}</h2>
            <p className="savings-planning py-2 px-3 mb-2">
              Rp
              {' '}
              {rupias}
            </p>
            <p className="mb-2">
              <FiCalendar className="me-2 mb-1" />
              Target:
              {' '}
              {month}
              ,
              {' '}
              {year}
            </p>
            <p>
              <FiCheckSquare className="me-2 mb-1" />
              {locale === 'en' ? 'Save' : 'Tabung'}
              {' '}
              Rp
              {' '}
              {roundedAmount}
              {' '}
              /
              {' '}
              {locale === 'en' ? 'month' : 'bulan'}
            </p>
          </div>
        </div>
        <div className="card-footer">
          <Link to={`/edit-saving-plan/${saving.id}`}>
            <EditSavingButton />
          </Link>
          <DeleteSavings id={saving.id} onDelete={onDelete} />
          {isOneMonth === true ? <p className="reminderOneMonth fw-bold rounded p-2">{locale === 'en' ? 'One month left!' : 'Tersisa satu bulan!'}</p> : ''}
        </div>
      </div>
    </div>
  );
}

export default SavingPlanItem;
