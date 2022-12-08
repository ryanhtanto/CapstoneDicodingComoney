import React from 'react';
import TransactionItem from './TransactionItem';
import LocaleContext from '../context/LocaleContext';
import nodata from '../assets/images/no-data.svg';

function ListTransaction({ transactions }) {
  const { locale } = React.useContext(LocaleContext);

  if (!transactions.length) {
    return (
      <div className="empty-data mt-5 pt-4">
        <img className="empty-data__image d-block mx-auto" src={nodata} alt="no data" />
        <h2 className="medium__font text-center mt-3 fw-bold">{locale === 'en' ? 'Empty Transactions' : 'Tidak Ada Transaksi'}</h2>
      </div>
    );
  }

  return (
    <ul className="m-0 p-0">
      {
        transactions.length
          ? transactions.map((transaction) => (
            <TransactionItem
              id={transaction.id}
              key={transaction.id}
              type={transaction.type}
              category={transaction.category}
              amount={transaction.amount}
            />
          )) : null
      }
    </ul>
  );
}

export default ListTransaction;
