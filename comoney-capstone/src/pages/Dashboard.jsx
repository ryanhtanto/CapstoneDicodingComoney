import React from 'react';
import CardInformation from '../components/CardInformation';
import { FiPlus } from 'react-icons/fi';
import { Link } from "react-router-dom";
import DailyTransaction from '../components/DailyTransaction';
import MonthlyTransaction from '../components/MonthlyTransaction';

function Dashboard() {
  return (
    <div className="container dashboard__container px-3">
      <CardInformation />
      <DailyTransaction />
      <MonthlyTransaction />
      <Link to={`/add/income`}>
        <button aria-label="add transaction" id="addButton" className="addButton">
          <FiPlus />
        </button>
      </Link>
    </div >
  );
}

export default Dashboard;