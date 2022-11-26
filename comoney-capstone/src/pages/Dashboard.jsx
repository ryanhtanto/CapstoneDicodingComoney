import React from 'react';
import CardInformation from '../components/CardInformation';
import ListTransaction from '../components/ListTransaction';
import useInput from '../hooks/UseInput';
import { FiPlus } from 'react-icons/fi';
import { Link } from "react-router-dom";
import LocaleContext from '../context/LocaleContext';

function Dashboard() {
  const [date, setDate] = useInput(null);
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="container dashboard__container px-3">
      <CardInformation />
      <section className="list__transaction">
        <div className="row mt-4 transaction__header">
          <div className="col-sm-12 col-md-8 mt-2">
            <h2 className='fw-bold'>{locale === "en" ? "Latest Transaction" : "Transaksi Terbaru"}</h2>
            <p className="small__font">{locale === "en" ? "Click category name to see the detail" : "Klik nama kategori untuk melihat detail transaksi"}</p>
          </div>
          <div className="col-sm-12 col-md-4 mt-2">
            <input className='form-control' type="date" onChange={setDate} />
          </div>
        </div>
        <ListTransaction dateSelected={date} />
      </section>
      <Link to={`/add/transaction`}>
        <button aria-label="add savings" id="addButton" className="addButton">
          <FiPlus />
        </button>
      </Link>
    </div >
  );
}

export default Dashboard;