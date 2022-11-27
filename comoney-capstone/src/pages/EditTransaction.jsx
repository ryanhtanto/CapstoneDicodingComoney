import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import TransactionForm from "../components/TransactionForm";
import LocaleContext from "../context/LocaleContext";
import UserContext from "../context/UserContext";
import { getTransaction, putTransaction } from "../utils/transaction";
import { useNavigate } from "react-router-dom";

const EditTransaction = ({ transactiontype }) => {
  const { id } = useParams();
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);
  const [transaction, setTransaction] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    const getData = async () => {
      const transaction = await getTransaction(user.uid, id);
      setTransaction(transaction);
      setLoading(false);
    }
    getData();
  }, [user, id]);

  const editTransaction = async (transaction) => {
    Swal.showLoading();
    const data = await putTransaction(
      {
        type: transaction.type,
        name: transaction.name,
        amount: transaction.amount,
        category: transaction.selectedCategory,
        description: transaction.description,
      },
      user.uid, id
    );

    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "Transaction Saved",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate('/')
    } else {
      Swal.fire({
        icon: "error",
        title: data.message,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  console.log(transaction)

  if (loading !== true) {
    return (
      <section>
        <div className="container">
          <div className="container">
            <div className="my-4">
              <h4>
                <Link className="text-black text-decoration-none" to={`/detail/${id}`}><FiArrowLeft className="warna fs-2" />{locale === "en" ? "Back to Detail" : "Kembali ke Detail"}</Link>
              </h4>
            </div>
          </div>
          <div className="content">
            {
              transactiontype === 'income' ?
                <>
                  <h4 className="fw-bold medium__font">{locale === "en" ? "Edit your income, here" : "Ubah pemasukan Anda, di sini"}</h4>
                  <p>{locale === "en" ? "Fill your detail income below" : "Isi detail pemasukan Anda di bawah ini"}</p>
                </>
                :
                <>
                  <h4 className="fw-bold medium__font">{locale === "en" ? "Edit your expense, here" : "Ubah pengeluaran Anda, di sini"}</h4>
                  <p>{locale === "en" ? "Fill your detail expense below" : "Isi detail pengeluaran Anda di bawah ini"}</p>
                </>
            }
            <TransactionForm
              type={transaction.type}
              onEditHandler={editTransaction}
              previousValue={transaction}
            />
          </div>
        </div>
      </section>
    );
  }
};

export default EditTransaction;
