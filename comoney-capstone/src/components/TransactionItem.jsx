import React from "react";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function TransactionItem({ type, category, amount, id }) {
  return (
    <>
      <Link to={`/detail/${id}`} className="text-decoration-none">
        <li className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex mb-2 align-items-center">
            {type === 'income' ? <BsFillArrowDownCircleFill className="text-dark" /> : <BsFillArrowUpCircleFill className="text-dark" />}
            <p className="fw-bold ms-2 small__font text-dark">{category}</p>
          </div>
          {type === 'income' ?
            <p className="fw-bold green small__font">Rp {amount}</p> :
            <p className="fw-bold red small__font">Rp {amount}</p>
          }
        </li>
      </Link>
    </>
  );
}

export default TransactionItem;
