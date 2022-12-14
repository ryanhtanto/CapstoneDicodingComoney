import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AddTransactionForm from '../components/AddTransactionForm';
import LocaleContext from '../context/LocaleContext';
import { putTransaction } from '../utils/transaction';
import UserContext from '../context/UserContext';

function AddTransaction() {
  const { type } = useParams();
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();

  const addTransaction = async (transaction) => {
    Swal.showLoading();
    const data = await putTransaction(
      {
        type: transaction.type,
        name: transaction.name,
        amount: transaction.amount,
        category: transaction.selectedCategory,
        description: transaction.description,
      },
      user.uid,
    );

    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: `${locale === 'en' ? 'Success Add Transaction' : 'Sukses Menambah Transaksi'}`,
        showConfirmButton: false,
        timer: 1000,
      });
      navigate('/');
    } else {
      Swal.fire({
        icon: 'error',
        title: data.message,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <section>
      <div className="container">
        <div className="container text-center my-4  ">
          <div className="row">
            <div className="col">
              <Link to="/add/income" className="fw-semibold medium__font button__no-style text-decoration-none text-dark input__height d-block pt-2">
                <p className={type === 'income' ? 'text-decoration-underline m-0' : 'm-0'}>{locale === 'en' ? 'Income' : 'Pemasukan'}</p>
              </Link>
            </div>
            <div className="col">
              <Link to="/add/expense" className="fw-semibold medium__font button__no-style text-decoration-none text-dark input__height d-block pt-2">
                <p className={type === 'expense' ? 'text-decoration-underline m-0' : 'm-0'}>{locale === 'en' ? 'Expense' : 'Pengeluaran'}</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="content">
          {
            type === 'income'
              ? (
                <>
                  <h4 className="fw-bold medium__font">{locale === 'en' ? 'Add your income, here' : 'Tambahkan pemasukan Anda, di sini'}</h4>
                  <p>{locale === 'en' ? 'Fill your detail income below' : 'Isi detail pemasukan Anda di bawah ini'}</p>
                </>
              )
              : (
                <>
                  <h4 className="fw-bold medium__font">{locale === 'en' ? 'Add your expense, here' : 'Tambahkan pengeluaran Anda, di sini'}</h4>
                  <p>{locale === 'en' ? 'Fill your detail expense below' : 'Isi detail pengeluaran Anda di bawah ini'}</p>
                </>
              )
          }
          <AddTransactionForm onAddHandler={addTransaction} type={type} />
        </div>
      </div>
    </section>
  );
}

export default AddTransaction;
