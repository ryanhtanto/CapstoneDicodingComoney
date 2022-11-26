import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useParams, useNavigate, Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { deleteTransaction, getTransaction } from "../utils/transaction";
import LocaleContext from '../context/LocaleContext';

const DetailPage = () => {
  const { id } = useParams();
  const { user } = React.useContext(UserContext);
  const [transaction, setTransaction] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    const getData = async () => {
      const transaction = await getTransaction(user.uid, id);
      console.log(transaction)
      setTransaction(transaction);
      setLoading(false);
    }

    getData();
  }, [user, id]);

  const onDelete = async (id) => {
    await deleteTransaction(id, user.uid);
    navigate('/');
  }

  if (loading !== true) {
    return (
      <section>
        <div className="container">
          <div className="my-4">
            <h4>
              <Link className="text-black text-decoration-none" to={'/'}><FiArrowLeft className="warna fs-2" />{locale === "en" ? "Back to Dashboard" : "Kembali ke Dasbor"}</Link>
            </h4>
          </div>

          <div className="content">
            <h4 className="fw-bold">{locale === "en" ? "Detail Transaction" : "Detail Transaksi"}</h4>

            <div className="my-4">
              <h5>{locale === "en" ? "Date" : "Tanggal"}</h5>
              <p>{transaction.date}</p>
            </div>
            <div className="my-4">
              <h5>{locale === "en" ? "Name" : "Nama"}</h5>
              <p>{transaction.name}</p>
            </div>
            <div className="my-4">
              <h5>{locale === "en" ? "Amount" : "Nominal"}</h5>
              <p>Rp. {transaction.amount}</p>
            </div>
            <div className="my-4">
              <h5>{locale === "en" ? "Category" : "Kategori"}</h5>
              <p>{transaction.category}</p>
            </div>
            <div className="my-4">
              <h5>{locale === "en" ? "Description" : "Deskripsi"}</h5>
              <p>{transaction.description}</p>
            </div>
            <button type="submit" className="btn btn-primary btn-lg form-control btn-color my-4" onClick={() => navigate(`/edit/transaction/${id}`)}>Edit</button>
            <button type="submit" className="btn btn-primary btn-lg form-control btn-color mb-4" onClick={() => onDelete(transaction.id)}>Delete</button>
          </div>
        </div>
      </section>
    )
  }
}

export default DetailPage