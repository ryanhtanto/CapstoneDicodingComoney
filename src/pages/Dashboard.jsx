import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CardInformation from '../components/CardInformation';
import DailyTransaction from '../components/DailyTransaction';
import MonthlyTransaction from '../components/MonthlyTransaction';
import LocaleContext from '../context/LocaleContext';

function Dashboard() {
  const { locale } = React.useContext(LocaleContext);
  // const []

  // const toggleChangeTransaction = () => {

  // };

  return (
    <div className="container dashboard__container px-3">
      <CardInformation />
      <button type="submit" className="btn btn-primary input__height form-control btn-color mt-4 me-3 change-transaction__button">
        {locale === 'en' ? 'Daily Transaction' : 'Transaksi Harian'}
      </button>
      <DailyTransaction />
      <MonthlyTransaction />
      <Link to="/add/income">
        <button type="button" aria-label="add transaction" id="addButton" className="addButton button-animate">
          <FiPlus />
        </button>
      </Link>
    </div>
  );
}

export default Dashboard;
