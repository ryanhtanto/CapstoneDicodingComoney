import React from "react";
import TransactionForm from "../components/AddTransactionForm";
import { Link } from "react-router-dom";

const AddExpensePage = () => {
  const type = 'expense';

  return (
    <section>
      <div className="container">
        <div className="container text-center my-4  ">
          <div className="row">
            <div className="col">
              <Link to={`/add-income`} className="fs-3 fw-semibold text-decoration-none text-black">
                Income
              </Link>
            </div>
            <div className="col">
              <p className="fs-3 fw-semibold text-decoration-none warnaBar">Expense</p>
            </div>
          </div>
        </div>
        <div className="content">
          <h4 className="fw-bold">Add your expense, here</h4>
          <p>Fill your detail income below</p>
        </div>
        <TransactionForm transactionType={type} />
      </div>
    </section>
  );
};

export default AddExpensePage;
