import React from "react";
import AddTransactionForm from "../components/AddTransactionForm";
import { Link } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";

const AddTransaction = () => {
  const [type, setType] = React.useState('income');
  const { locale } = React.useContext(LocaleContext);

  return (
    <section>
      <div className="container">
        <div className="container text-center my-4  ">
          <div className="row">
            <div className="col">
              <button className="fw-semibold medium__font button__no-style" onClick={() => setType('income')}>
                <p className={type === 'income' ? "text-decoration-underline" : ''}>Income</p>
              </button>
            </div>
            <div className="col">
              <button className="fw-semibold medium__font button__no-style" onClick={() => setType('expense')}>
                <p className={type === 'expense' ? "text-decoration-underline" : ''}>Expense</p>
              </button>
            </div>
          </div>
        </div>
        <div className="content">
          {
            type === 'income' ?
              <>
                <h4 className="fw-bold medium__font">{locale === "en" ? "Add your income, here" : "Tambahkan pemasukan Anda, di sini"}</h4>
                <p>{locale === "en" ? "Fill your detail income below" : "Isi detail pemasukan Anda di bawah ini"}</p>
              </>
              :
              <>
                <h4 className="fw-bold medium__font">{locale === "en" ? "Add your expense, here" : "Tambahkan pengeluaran Anda, di sini"}</h4>
                <p>{locale === "en" ? "Fill your detail expense below" : "Isi detail pengeluaran Anda di bawah ini"}</p>
              </>
          }
          <AddTransactionForm transactionType={type} />
        </div>
      </div>
    </section>
  );
};

export default AddTransaction;
