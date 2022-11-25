import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { deleteTransaction, getTransaction } from "../utils/transaction";

const DetailPage = () => {
  const { id } = useParams();
  const { user } = React.useContext(UserContext);
  const [transaction, setTransaction] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

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
              <a href="/" className="text-black text-decoration-none"> <FiArrowLeft className="warna fs-2" />Back to Dashboard</a>
            </h4>
          </div>

          <div className="content">
            <h4 className="fw-bold">Detail Transaction</h4>

            <div className="my-4">
              <h5>Date</h5>
              <p>{transaction.date}</p>
            </div>
            <div className="my-4">
              <h5>Name</h5>
              <p>{transaction.name}</p>
            </div>
            <div className="my-4">
              <h5>Amount</h5>
              <p>Rp. {transaction.amount}</p>
            </div>
            <div className="my-4">
              <h5>Category</h5>
              <p>{transaction.category}</p>
            </div>
            <div className="my-4">
              <h5>Description</h5>
              <p>{transaction.description}</p>
            </div>


            <button type="submit" className="btn btn-primary btn-lg form-control btn-color my-4" onClick={() => navigate(`/edit/${id}`)}>Edit Income</button>
            <button type="submit" className="btn btn-primary btn-lg form-control btn-color mb-4" onClick={() => onDelete(transaction.id)}>Delete Income</button>
          </div>
        </div>
      </section>
    )
  }
}

export default DetailPage