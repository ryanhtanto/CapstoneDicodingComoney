/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

function SavingPlanItemLoading() {
  const savingPlan = [];
  for (let i = 0; i < 2; i++) {
    savingPlan.push(
      <div className="col-sm-12 col-md-6 mb-3 ">
        <div className="card ">
          <div className="d-flex placeholder-glow">
            <div className="my-auto">
              <p className="placeholder rounded mb-0 mx-4 peding">Placeholder</p>
            </div>
            <div className="card-body">
              <h6 className="card-title fw-bold">
                <p className="placeholder rounded mb-0">Placeholder</p>
              </h6>
              <p className="placeholder rounded mb-0">Rp 3000000000</p>
              <h6 className="mt-2">
                <p className="placeholder rounded mb-0">00</p>
                <span className="mx-2">
                  <p className="placeholder rounded mb-0">Target: Janyary 2023</p>
                </span>
              </h6>
              <h6 className="mt-2">
                <p className="placeholder rounded mb-0">00</p>
                <span className="mx-2">
                  <p className="placeholder rounded mb-0">Tabung Rp 10.661 / bulan</p>
                </span>
              </h6>
              <p className="placeholder rounded mb-0 pedingSaving">but</p>
              <p className="placeholder rounded ms-2 mb-0 pedingSaving">but</p>
            </div>
          </div>
        </div>
      </div>,
    );
  }

  return <>{savingPlan}</>;
}

export default SavingPlanItemLoading;
