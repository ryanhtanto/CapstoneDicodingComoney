import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useParams, Link } from 'react-router-dom';
import EditSavingsForm from "../components/EditSavingsForm";

const EditSavingPlan = () => {
  const { id }  = useParams()

  return (
    <section>
      <div className="container">
        <div className="my-4">
          <h4>
            <Link to={`/saving-planner`}>
              <FiArrowLeft className="warna fs-2" /> Back to Savings
            </Link>
          </h4>
        </div>

        <div className="content">
          <h4 className="fw-bold">Savings money for better future</h4>
          <p>Edit your target by fill the information below</p>
          <EditSavingsForm getId={id} />
        </div>
      </div>
    </section>
  );
};

export default EditSavingPlan;
