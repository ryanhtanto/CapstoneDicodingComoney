import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import EditSavingsForm from "../components/EditSavingsForm";

const EditSavingPlan = () => {
  return (
    <section>
      <div className="container">
        <div className="my-4">
          <h4>
            <a href="" className="text-black text-decoration-none">
              <FiArrowLeft className="warna fs-2" /> Back to Savings
            </a>
          </h4>
        </div>

        <div className="content">
          <h4 className="fw-bold">Savings money for better future</h4>
          <p>Edit your target by fill the information below</p>
          <EditSavingsForm />
        </div>
      </div>
    </section>
  );
};

export default EditSavingPlan;
