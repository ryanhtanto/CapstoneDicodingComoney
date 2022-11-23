import React from "react";
import AddTransactionForm from "../components/AddTransactionForm";
import { Link } from "react-router-dom";

const AddIncomePage = () => {
  return (
    <section>
      <div className="container">
        <div className="container text-center my-4  ">
          <div className="row">
            <div className="col">
              <p className="fs-3 fw-semibold text-decoration-none warnaBar">Income</p>
            </div>
            <div className="col">
              <Link to={`/add-expense`} className="fs-3 fw-semibold text-decoration-none text-black">
                Expense
              </Link>
            </div>
          </div>
        </div>
        <div className="content">
          <h4 className="fw-bold">Add your income, here</h4>
          <p>Fill your detail income below</p>
          <AddTransactionForm />
        </div>
      </div>
    </section>
  );
};

export default AddIncomePage;
