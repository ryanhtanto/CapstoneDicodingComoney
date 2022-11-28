import React from 'react';

function TransactionItemLoading() {
  const transaction = [];
  for (let i = 0; i < 4; i++) {
    transaction.push(
      <li key={i} className="d-flex justify-content-between align-items-center mb-3 placeholder-glow">
        <div className="d-flex mb-2 align-items-center placeholder-glow">
          <div className="placeholder rounded ">Icon</div>
          <p className="fw-bold ms-2 small__font text-dark placeholder rounded">Default Name</p>
        </div>
        <p className="fw-bold small__font placeholder rounded">Default Amount</p>
      </li>,
    );
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { transaction }
    </>
  );
}

export default TransactionItemLoading;
