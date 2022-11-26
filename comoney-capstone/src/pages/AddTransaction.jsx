import React from "react";
import TransactionForm from "../components/TransactionForm";
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
              <Link className="fw-semibold medium__font button__no-style text-decoration-none text-dark input__height d-block pt-2" onClick={() => setType('income')}>
                <p className={type === 'income' ? "text-decoration-underline m-0" : 'm-0'}>Income</p>
              </Link>
            </div>
            <div className="col">
              <Link className="fw-semibold medium__font button__no-style text-decoration-none text-dark input__height d-block pt-2" onClick={() => setType('expense')}>
                <p className={type === 'expense' ? "text-decoration-underline m-0" : 'm-0'}>Expense</p>
              </Link>
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
          <TransactionForm transactionType={type} />
        </div>
      </div>
    </section>
  );
};

export default AddTransaction;
