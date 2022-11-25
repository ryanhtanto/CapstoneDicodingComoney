import React from "react";
import UserContext from "../context/UserContext";
import { getFullDate } from "../utils/date-formatter";
import { getTodayTransactions } from "../utils/transaction";
import TransactionItem from "./TransactionItem";

function ListTransaction({ dateSelected }) {
  const [listTransactions, setListTransactions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    const getData = async () => {
      if (dateSelected !== null) {
        const transactions = await getTodayTransactions(user.uid, dateSelected);
        console.log(transactions);
        setListTransactions(transactions);
      } else {
        const transactions = await getTodayTransactions(user.uid);
        console.log(transactions);
        setListTransactions(transactions);
      }
      setLoading(false)
    }
    getData();
  }, [dateSelected, user]);

  if (!loading) {
    return (
      <div className="transaction__content">
        <p className="transaction__date px-3 py-2 mb-3 mt-4 small__font">{dateSelected === null ? getFullDate() : dateSelected}</p>
        <ul className="m-0 p-0">
          {
            listTransactions.length ?
              listTransactions.map((transaction) => {
                return <TransactionItem
                  id={transaction.id}
                  key={transaction.id}
                  type={transaction.type}
                  category={transaction.category}
                  amount={transaction.amount} />
              }) : console.log(1)
          }
        </ul>
      </div>
    );
  }
}

export default ListTransaction;
