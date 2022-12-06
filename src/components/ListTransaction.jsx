import React from 'react';
import TransactionItem from './TransactionItem';
import LocaleContext from '../context/LocaleContext';

function ListTransaction({ transactions }) {
  const { locale } = React.useContext(LocaleContext);

  if (!transactions.length) {
    return <h2 className="medium__font text-center mt-5 fw-bold">{locale === 'en' ? 'Empty Transactions' : 'Tidak ada Transaksi'}</h2>;
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