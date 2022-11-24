import React from "react";
import AddTransactionForm from "../components/AddTransactionForm";
import { Link } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";

const AddIncomePage = () => {
  const { locale } = React.useContext(LocaleContext);
  const type = 'income';

  return (
    <section>
      <div className="container">
        <div className="container text-center my-4  ">
          <div className="row">
            <div className="col">
              <p className="fs-3 fw-semibold text-decoration-none warnaBar">Income</p>
            </div>
            <div className="col">
              <Link to={`/add-expense`} className="fs-3 fw-semibold text-decoration-none text-black">
                Expense
              </Link>
            </div>
          </div>
        </div>
        <div className="content">
          <h4 className="fw-bold">{locale === "en" ? "Add your income, here" : "Tambahkan pemasukan Anda, di sini"}</h4>
          <p>{locale === "en" ? "Fill your detail income below" : "Isi detail pemasukan Anda di bawah ini"}</p>
          <AddTransactionForm />
        </div>
      </div>
    </section>
  );
};

export default AddIncomePage;
