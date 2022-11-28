import React from "react";
import LocaleContext from "../context/LocaleContext";
import UserContext from "../context/UserContext";
import useInput from "../hooks/UseInput";
import { getMonthYear } from "../utils/date-formatter";
import { getThisMonthTransactions } from "../utils/transaction";
import ListTransaction from "./ListTransaction";
import TransactionItemLoading from "./TransactionItemLoading";

function MonthlyTransaction() {
  const [date, setDate] = useInput(null);
  const [transactions, setTransactions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    const getData = async () => {
      if (date !== null) {
        setTransactions(await getThisMonthTransactions(user.uid, date));
      } else {
        setTransactions(await getThisMonthTransactions(user.uid));
      }

      setLoading(false)
    }
    getData();
  }, [date, user]);

  return (
    <section className="list__transaction mt-4 mb-5">
      <div className="row transaction__header">
        <div className="col-sm-12 col-md-8 mt-2">
          <h2 className='fw-bold'>{locale === "en" ? "Monthly Transaction" : "Transaksi Bulanan"}</h2>
          <p className="small__font">{locale === "en" ? "Click category name to see the detail" : "Klik nama kategori untuk melihat detail transaksi"}</p>
        </div>
        <div className="col-sm-12 col-md-4 mt-2">
          <input className='form-control' type="month" onChange={setDate} />
        </div>
      </div>
      <div className="transaction__content">
        <p className="transaction__date px-3 py-2 mb-3 mt-4 small__font">{date === null ? getMonthYear() : date}</p>
        {
          loading ? <TransactionItemLoading /> : <ListTransaction transactions={transactions} />
        }
      </div>
    </section>
  );


}

export default MonthlyTransaction;