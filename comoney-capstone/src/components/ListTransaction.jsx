import React from "react";
import { getFullDate } from "../utils/date-formatter";
import TransactionItem from "./TransactionItem";

function ListTransaction({ transactions }) {
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
