import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const AddEditSavingPlan = () => {
  return (
    <section>
      <div className="container">
        <div className="my-4">
          <h4>
            <a href="" className="text-black text-decoration-none">
              <FiArrowLeft className="warna" /> Back to Savings
            </a>
          </h4>
        </div>

        <div className="content">
          <h4 className="fw-bold">Savings money for better future</h4>
          <p>Get your target by fill the information below</p>
          <form className="my-5">
            <input type="text" className="form-control my-4" placeholder="Name" aria-label="Name"></input>
            <input type="text" className="form-control my-4" placeholder="Amount target" aria-label="Amount target"></input>
            <input className="form-control my-4" type="date"/>
            <button type="submit" className="btn btn-primary btn-lg form-control btn-color">
              Add New Savings / Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddEditSavingPlan;
