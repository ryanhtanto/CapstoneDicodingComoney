import React from 'react';
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useRupiah from '../hooks/useRupiah';

function TransactionItem({
  type, category, amount, id,
}) {
  const [rupiah, setRupiah] = useRupiah(amount);

  React.useEffect(() => {
    setRupiah(amount);
  }, [amount]);

  return (
    <Link to={`/detail/${id}`} className="text-decoration-none">
      <li className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex mb-2 align-items-center">
          {type === 'income' ? <BsFillArrowDownCircleFill className="text-dark" /> : <BsFillArrowUpCircleFill className="text-dark" />}
          <p className="fw-bold ms-2 small__font text-dark px-2 m-2">{category}</p>
        </div>
        {type === 'income'
          ? (
            <p className="fw-bold green small__font">
              Rp
              {' '}
              {rupiah}
            </p>
          )
          : (
            <p className="fw-bold red small__font">
              Rp
              {' '}
              {rupiah}
            </p>
          )}
      </li>
    </Link>
  );
}

export default TransactionItem;
