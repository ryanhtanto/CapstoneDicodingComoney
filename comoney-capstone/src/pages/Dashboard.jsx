import React from 'react';
import CardInformation from '../components/CardInformation';
import ListTransaction from '../components/ListTransaction';
import useInput from '../hooks/UseInput';

function Dashboard() {
  const [date, setDate] = useInput(null);
  return (
    <div className="container dashboard__container px-3">
      <CardInformation />
      <section className="list__transaction">
        <div className="row mt-4 transaction__header">
          <div className="col-sm-12 col-md-8 mt-2">
            <h2 className='fw-bold'>Latest Transaction</h2>
            <p className="small__font">Click category name to see the detail</p>
          </div>
          <div className="col-sm-12 col-md-4 mt-2">
            <input className='form-control' type="date" onChange={setDate} />
          </div>
        </div>

        <ListTransaction dateSelected={date} />
      </section>
    </div>
  );
}

export default Dashboard;