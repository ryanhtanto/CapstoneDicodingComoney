import React from "react";
import AddIncomePage from "./AddIncomePage";

const AddIncomeExpense = () => {
  return (
    <section>
      <div className="container">
        <div className="container text-center my-4  ">
          <div className="row">
            <div className="col">
              <a href="" className="fs-3 fw-semibold text-decoration-none text-black">
                Income
              </a>
            </div>
            <div className="col">
              <a href="" className="fs-3 fw-semibold text-decoration-none text-black">
                Expense
              </a>
            </div>
          </div>
        </div>
        <AddIncomePage />
      </div>
    </section>
  );
}

export default AddIncomeExpense;
