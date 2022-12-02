import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../context/UserContext';
import { deleteTransaction, getTransaction } from '../utils/transaction';
import LocaleContext from '../context/LocaleContext';

function DetailPage() {
  const { id } = useParams();
  const { user } = React.useContext(UserContext);
  const [transaction, setTransaction] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    const getData = async () => {
      const data = await getTransaction(user.uid, id);
      setTransaction(data);
      setLoading(false);
    };

    getData();
  }, [user, id]);

  const successDelTrans = locale === 'en' ? 'Delete Transaction Success' : 'Berhasil Menghapus Transaksi';
  const askDelTrans = locale === 'en' ? 'Delete This Transaction?' : 'Hapus Transaksi ini?';
  const deleteTrans = locale === 'en' ? 'Delete' : 'Hapus';
  const cancelTrans = locale === 'en' ? 'Cancel' : 'Batalkan';

  const onDelete = (idCategory) => {
    Swal.fire({
      title: askDelTrans,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#013496',
      cancelButtonColor: '#DC3545',
      confirmButtonText: deleteTrans,
      cancelButtonText: cancelTrans,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteTransaction(idCategory, user.uid);
        Swal.fire({
          icon: 'success',
          title: successDelTrans,
          showConfirmButton: false,
          timer: 1000,
        });
        navigate('/');
      }
    });
  };

  if (loading !== true) {
    return (
      <section>
        <div className="container">
          <div className="my-4">
            <h4>
              <Link className="text-black text-decoration-none pedingBack" to="/">
                <FiArrowLeft className="warna fs-2" />
                {locale === 'en' ? 'Back to Dashboard' : 'Kembali ke Dasbor'}
              </Link>
            </h4>
          </div>

          <div className="content">
            <h4 className="fw-bold">{locale === 'en' ? 'Detail Transaction' : 'Detail Transaksi'}</h4>

            <div className="my-4">
              <h5>{locale === 'en' ? 'Date' : 'Tanggal'}</h5>
              <p>{transaction.date}</p>
            </div>
            <div className="my-4">
              <h5>{locale === 'en' ? 'Name' : 'Nama'}</h5>
              <p>{transaction.name}</p>
            </div>
            <div className="my-4">
              <h5>{locale === 'en' ? 'Amount' : 'Nominal'}</h5>
              <p>
                Rp.
                {transaction.amount}
              </p>
            </div>
            <div className="my-4">
              <h5>{locale === 'en' ? 'Category' : 'Kategori'}</h5>
              <p>{transaction.category}</p>
            </div>
            <div className="my-4">
              <h5>{locale === 'en' ? 'Description' : 'Deskripsi'}</h5>
              <p>{transaction.description}</p>
            </div>
            <button type="submit" className="btn btn-primary input__height form-control btn-color my-4" onClick={() => navigate(`/edit/transaction/${id}`)}>
              {locale === 'en' ? 'Edit' : 'Sunting'}
            </button>
            <button type="submit" className="btn btn-primary input__height form-control btn-color mb-4" onClick={() => onDelete(transaction.id)}>
              {locale === 'en' ? 'Delete' : 'Hapus'}
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default DetailPage;
