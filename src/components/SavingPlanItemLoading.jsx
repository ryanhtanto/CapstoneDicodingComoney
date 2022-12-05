/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function SavingPlanItemLoading() {
  const savingPlan = [];
  for (let i = 0; i < 2; i++) {
    savingPlan.push(
      <div className="col-md-12 col-lg-6 mb-3" key={i}>
        <div className="card">
          <div className="card-body d-flex">
            <p className="placeholder-glow saving-image-item w-25 pe-3 my-5">
              <span className="placeholder rounded w-100 px-2 h-100" />
            </p>
            <div className="saving-item__wrapper w-100">
              <h2 className="card-title mb-3">
                <span className="placeholder rounded col-3" />
              </h2>
              <h2 className="placeholder-glow mb-0">
                <span className="placeholder rounded col-3" />
              </h2>
              <p className="placeholder-glow mb-0">
                <span className="placeholder rounded col-9" />
              </p>
              <p className="placeholder-glow mb-0">
                <span className="placeholder rounded col-9" />
              </p>
              <p className="placeholder-glow mb-4">
                <span className="placeholder rounded col-9" />
              </p>
            </div>
          </div>
          <div className="card-footer placeholder-glow">
            <button type="button" className="btn btn-secondary disabled placeholder me-2 input__height px-4" />
            <button type="button" className="btn btn-secondary disabled placeholder input__height px-4" />
          </div>
        </div>
      </div>,
    );
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { savingPlan }
    </>
  );
}

export default SavingPlanItemLoading;
