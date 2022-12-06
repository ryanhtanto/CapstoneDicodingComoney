/* eslint-disable no-nested-ternary */
import React from 'react';
import { FiPlusSquare, FiTrash2 } from 'react-icons/fi';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import LocaleContext from '../context/LocaleContext';
import UserContext from '../context/UserContext';
import {
  addCategory, deleteCategory, getCategoryByName, getExpenseCategories, getIncomeCategories,
} from '../utils/category';

function TransactionForm({ type, onAddHandler }) {
  const [refresh, setRefresh] = React.useState(true);
  const [name, setName] = useInput('');
  const [amount, setAmount] = useInput('');
  const [description, setDescription] = useInput('');
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [categories, setCategories] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState('');

  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    async function getData() {
      let data;
      if (type === 'income') {
        data = await getIncomeCategories(user.uid);
      } else {
        data = await getExpenseCategories(user.uid);
      }
      setCategories(data || []);
    }
    getData();
  }, [type, user, selectedCategory, refresh]);

  React.useEffect(() => {
    setSelectedCategory(null);
  }, [type]);

  const onDeleteCategory = async () => {
    if (selectedCategory) {
      Swal.showLoading();
      await deleteCategory(categoryId, user.uid);
      Swal.fire({
        icon: 'success',
        title: `${locale === 'en' ? 'Delete Category Success' : 'Berhasil Menghapus Kategori'}`,
        showConfirmButton: false,
        timer: 1000,
      });
      setSelectedCategory(null);
    } else {
      Swal.fire({
        icon: 'error',
        title: `${locale === 'en' ? 'Select Category First' : 'Pilih Kategori Terlebih Dahulu'}`,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const onAddCategory = async () => {
    const { value: category } = await Swal.fire({
      title: 'Add New Category',
      input: 'text',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!';
        }
      },
    });

    if (category) {
      Swal.showLoading();
      const searchData = await getCategoryByName(category, type, user.uid);

      if (searchData.length) {
        Swal.fire({
          icon: 'error',
          title: `${locale === 'en' ? 'Category Already Exist' : 'Kategori Sudah Ada'}`,
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      const data = await addCategory(category, user.uid, type);

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: `${locale === 'en' ? 'Add Category Success' : 'Kategori Berhasil Ditambahkan'}`,
          showConfirmButton: false,
          timer: 1000,
        });
        if (refresh) {
          setRefresh(false);
        } else {
          setRefresh(true);
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  const setCategoryData = (e) => {
    if (!e.target.value) {
      setSelectedCategory(null);
      return;
    }

    const data = e.target.value.split('^@#');
    setSelectedCategory(data[0]);
    setCategoryId(data[1]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name && amount && selectedCategory) {
      await onAddHandler({
        name, amount, description, selectedCategory, type,
      });
      return;
    }

    Swal.fire({
      icon: 'error',
      title: `${locale === 'en' ? 'You Need To Fill All Required Form' : 'Anda Perlu Mengisi Semua Formulir yang Diperlukan'}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <form className="my-5" onSubmit={(e) => onSubmit(e)}>
      <input type="text" className="form-control mb-4 mt-2 input__height" placeholder={locale === 'en' ? 'Name' : 'Nama'} aria-label={locale === 'en' ? 'Name' : 'Nama'} value={name} onChange={setName} />
      <input type="number" className="form-control my-4 input__height" placeholder={locale === 'en' ? 'Amount' : 'Jumlah'} aria-label={locale === 'en' ? 'Amount' : 'Jumlah'} value={amount} onChange={setAmount} min="0" />

      <div className="text-center">
        <div className="row">
          <div className="col-sm-12 col-lg-8">
            <div className="dropdown">
              <select className="form-select input__height disabled" aria-label="Default select example" onChange={(e) => setCategoryData(e)}>
                <option value="">Select Category</option>
                {categories?.map((category) => (
                  <option value={`${category.categoryName}^@#${category.id}`} key={category.id} className="peding">
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-sm-8 col-lg-3 mb-2">
            <button type="button" className="btn btn-primary form-control btn-color input__height mb-2" onClick={() => onAddCategory()} title={locale === 'en' ? 'Add New Category' : 'Tambah Kategori Baru'}>
              <FiPlusSquare />
              {' '}
              {locale === 'en' ? 'New Category' : 'Kategori Baru'}
            </button>
          </div>
          <div className="col-sm-4 col-lg-1">
            <button type="button" className="btn btn-danger form-control input__height btn-hapus mb-2" title={locale === 'en' ? 'Delete Category' : 'Hapus Kategori'} onClick={() => onDeleteCategory()}>
              <FiTrash2 />
            </button>
          </div>
        </div>
      </div>

      <textarea className="form-control mb-4" placeholder={locale === 'en' ? 'Description' : 'Deskripsi'} aria-label="With textarea" value={description} onChange={setDescription} style={{ height: '120px' }} />
      <button type="submit" className="btn btn-primary input__height form-control btn-color">
        {locale === 'en' ? 'Add' : 'Tambah'}
      </button>
    </form>
  );
}

TransactionForm.propTypes = {
  onAddHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default TransactionForm;
