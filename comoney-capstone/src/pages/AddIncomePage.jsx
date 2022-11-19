import React from "react";
import AddIncomeForm from "../components/AddIncomeForm";

const AddIncomePage = () => {
  return (
    <div className="content">
      <h4 className="fw-bold">Add your income, here</h4>
      <p>Fill your detail income below</p>
      <AddIncomeForm />
    </div>
  );
};

export default AddIncomePage;
