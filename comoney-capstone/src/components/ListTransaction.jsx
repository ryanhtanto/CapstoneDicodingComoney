import React from "react";
import UserContext from "../context/UserContext";
import { getFullDate, getFullDateText } from "../utils/date-formatter";
import { getTodayTransactions } from "../utils/user-financial";
import TransactionItem from "./TransactionItem";

function ListTransaction({ dateSelected }) {
  const [listTransactions, setListTransactions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    const getData = async () => {
      if (dateSelected !== null) {
        const transactions = await getTodayTransactions(user.accessToken, dateSelected);
        console.log(transactions);
        setListTransactions(transactions);
      } else {
        const transactions = await getTodayTransactions(user.accessToken);
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
            listTransactions.map((transaction) => {
              return <TransactionItem key={transaction.id} type={transaction.type} category={transaction.category} amount={transaction.amount} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default ListTransaction;
