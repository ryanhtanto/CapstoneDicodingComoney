import React from 'react';
import { FiCalendar, FiCheckSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import savings from '../assets/images/saving-item.png';
import DeleteSavings from './DeleteSavings';
import EditSavingButton from './EditSavingButton';
import LocaleContext from '../context/LocaleContext';
import { getMonthYear } from '../utils/date-formatter';
// import { getMonthYear } from '../utils/date-formatter';

function SavingPlanItem({ saving, onDelete }) {
  const [rupias, setRupias] = React.useState([]);
  const [roundedAmount, setRoundedAmount] = React.useState([]);
  const [savingMessage, setSavingMessage] = React.useState(null);
  const [progressInMonth, setProgressInMonth] = React.useState(0);
  const { locale } = React.useContext(LocaleContext);
  const targetMonth = saving.data.targetDate.slice(5, 7);
  const startMonth = saving.data.startDate.slice(5, 7);
  const targetYear = saving.data.targetDate.slice(0, 4);
  const startYear = saving.data.startDate.slice(0, 4);
  const differenceInMonth = (targetMonth - startMonth) + 1 + (12 * (targetYear - startYear));
  const tahunIni = getMonthYear().slice(0, 4);
  const bulanIni = getMonthYear().slice(5, 7);

  React.useEffect(() => {
    const formatRupias = async () => {
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
    };
    const savingProgressInMonth = async () => {
      if (`${tahunIni}-${bulanIni}` === `${startYear}-${startMonth}`) {
        setProgressInMonth(1);
        return;
      }

      if (`${tahunIni}-${bulanIni}` === `${targetYear}-${targetMonth}`) {
        setProgressInMonth(differenceInMonth);
        setSavingMessage(`${locale === 'en' ? 'Last Month' : 'Bulan Terakhir'}`);
        return;
      }

      if (`${tahunIni}-${bulanIni}` > `${targetYear}-${targetMonth}`) {
        setSavingMessage(`${locale === 'en' ? 'Saving Plan Have Been Completed' : 'Rencana Tabungan Telah Selesai'}`);
        setProgressInMonth(-1);
        return;
      }

      if (`${tahunIni}-${bulanIni}` > `${startYear}-${startMonth}`) {
        const progressCount = (targetMonth - bulanIni) + 1 + (12 * (targetYear - tahunIni));
        setProgressInMonth(progressCount);
        return;
      }

      if (`${tahunIni}-${bulanIni}` < `${startYear}-${startMonth}`) {
        setSavingMessage(`${locale === 'en' ? 'Saving Plan Has Not Been Started' : 'Rencana Tabungan Belum Dimulai'}`);
      }
    };
    const spendPerMonth = async () => {
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
    };

    formatRupias();
    spendPerMonth();
    savingProgressInMonth();
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
              Start:
              {' '}
              {startMonth}
              ,
              {' '}
              {startYear}
            </p>
            <p className="mb-2">
              <FiCalendar className="me-2 mb-1" />
              Target:
              {' '}
              {targetMonth}
              ,
              {' '}
              {targetYear}
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
          {progressInMonth !== -1 ? (
            <Link to={`/edit-saving-plan/${saving.id}`}>
              <EditSavingButton />
            </Link>
          ) : ''}
          <DeleteSavings id={saving.id} onDelete={onDelete} />
          {savingMessage !== null ? <p className="reminderOneMonth fw-bold rounded p-2">{savingMessage}</p> : ''}
          {progressInMonth !== 0 && progressInMonth !== -1 ? (
            <p className="d-inline">
              {progressInMonth}
              {' '}
              /
              {' '}
              {differenceInMonth}
            </p>
          ) : ''}
        </div>
      </div>
    </div>
  );
}

export default SavingPlanItem;
