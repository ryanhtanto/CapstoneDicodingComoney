import React from "react";
import TransactionItem from "./TransactionItem";

function ListTransaction({ transactions }) {
  if (!transactions.length) {
    return <h2 className="medium__font text-center mt-5 fw-bold">Empty Transactions</h2>
  }

  return (
    <ul className="m-0 p-0">
      {
        transactions.length ?
          transactions.map((transaction) => {
            return <TransactionItem
              id={transaction.id}
              key={transaction.id}
              type={transaction.type}
              category={transaction.category}
              amount={transaction.amount} />
          }) : null
      }
    </ul>
  );
}

export default ListTransaction;