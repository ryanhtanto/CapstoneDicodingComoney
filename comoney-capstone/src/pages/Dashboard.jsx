import React from 'react';
import CardInformation from '../components/CardInformation';
import ListTransaction from '../components/ListTransaction';
import useInput from '../hooks/UseInput';
import { FiPlus } from 'react-icons/fi';
import { Link } from "react-router-dom";
import LocaleContext from '../context/LocaleContext';
import UserContext from '../context/UserContext';
import { getThisMonthTransactions, getTodayTransactions } from '../utils/transaction';
import { getFullDate, getMonthYear } from '../utils/date-formatter';

function Dashboard() {
  const [date, setDate] = useInput(null);
  const [month, setMonth] = useInput(null);
  const { locale } = React.useContext(LocaleContext);
  const [dailyTransaction, setDailyTransaction] = React.useState([]);
  const [monthlyTransaction, setMonthlyTransaction] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    const getData = async () => {
      if (date !== null) {
        setDailyTransaction(await getTodayTransactions(user.uid, date));
      } else {
        setDailyTransaction(await getTodayTransactions(user.uid));
      }

      if (month !== null) {
        setMonthlyTransaction(await getThisMonthTransactions(user.uid, month));
      } else {
        setMonthlyTransaction(await getThisMonthTransactions(user.uid))
      }

      setLoading(false)
    }
    getData();
  }, [date, month, user]);

  if (loading) {
    return;
  }

  return (
    <div className="container dashboard__container px-3">
      <CardInformation />
      <section className="list__transaction">
        <div className="row mt-4 transaction__header">
          <div className="col-sm-12 col-md-8 mt-2">
            <h2 className='fw-bold'>{locale === "en" ? "Daily Transaction" : "Transaksi Harian"}</h2>
            <p className="small__font">{locale === "en" ? "Click category name to see the detail" : "Klik nama kategori untuk melihat detail transaksi"}</p>
          </div>
          <div className="col-sm-12 col-md-4 mt-2">
            <input className='form-control' type="date" onChange={setDate} />
          </div>
        </div>
        <div className="transaction__content">
          <p className="transaction__date px-3 py-2 mb-3 mt-4 small__font">{date === null ? getFullDate() : date}</p>
          <ListTransaction transactions={dailyTransaction} />
        </div>
      </section>
      <section className="list__transaction">
        <div className="row mt-4 transaction__header">
          <div className="col-sm-12 col-md-8 mt-2">
            <h2 className='fw-bold'>{locale === "en" ? "Monthly Transaction" : "Transaksi Bulanan"}</h2>
            <p className="small__font">{locale === "en" ? "Click category name to see the detail" : "Klik nama kategori untuk melihat detail transaksi"}</p>
          </div>
          <div className="col-sm-12 col-md-4 mt-2">
            <input className='form-control' type="month" onChange={setMonth} />
          </div>
        </div>
        <div className="transaction__content">
          <p className="transaction__date px-3 py-2 mb-3 mt-4 small__font">{month === null ? getMonthYear() : month}</p>
          <ListTransaction transactions={monthlyTransaction} />
        </div>
      </section>
      <Link to={`/add/income`}>
        <button aria-label="add transaction" id="addButton" className="addButton">
          <FiPlus />
        </button>
      </Link>
    </div >
  );
}

export default Dashboard;