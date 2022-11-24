import React from "react";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function TransactionItem({ type, category, amount, id }) {
  const navigate = useNavigate();

  return (
    <>
      <li className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex mb-2 align-items-center">
          {type === 'income' ? <BsFillArrowDownCircleFill /> : <BsFillArrowUpCircleFill />}
          <p onClick={() => navigate(`/detail/${id}`)} className="fw-bold ms-2 small__font">{category}</p>
        </div>
        {type === 'income' ?
          <p className="fw-bold green small__font">Rp {amount}</p> :
          <p className="fw-bold red small__font">Rp {amount}</p>
        }
      </li>
    </>
  );
}

export default TransactionItem;
