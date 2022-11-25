import React from "react";
import AddTransactionForm from "../components/AddTransactionForm";
import { Link } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";

const AddExpensePage = () => {
  // const { locale } = React.useContext(LocaleContext);
  const locale = 'en';
  const type = 'expense';

  return (
    <section>
      <div className="container">
        <div className="container text-center my-4  ">
          <div className="row">
            <div className="col">
              <Link to={`/add-income`} className="fs-3 fw-semibold text-decoration-none text-black">
                Income
              </Link>
            </div>
            <div className="col">
              <p className="fs-3 fw-semibold text-decoration-none warnaBar">Expense</p>
            </div>
          </div>
        </div>
        <div className="content">
          <h4 className="fw-bold">{locale === "en" ? "Add your expense, here" : "Tambahkan pengeluaran Anda, di sini"}</h4>
          <p>{locale === "en" ? "Fill your detail expense below" : "Isi detail pengeluaran Anda di bawah ini"}</p>
        </div>
        <AddTransactionForm transactionType={type} />
      </div>
    </section>
  );
};

export default AddExpensePage;
