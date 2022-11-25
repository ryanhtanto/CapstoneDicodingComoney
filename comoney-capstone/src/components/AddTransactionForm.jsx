import React from "react";
import { FiPlusSquare } from "react-icons/fi";
import AddNewCategoryDropdown from "./AddNewCategoryDropdown";
import AddNewCategoryModal from "./AddNewCategoryModal";
import useInput from "../hooks/UseInput";
import { FiTrash2 } from "react-icons/fi";
import newCategoryIdb from "../data/new-category-idb";
import LocaleContext from "../context/LocaleContext";
import { addTransaction } from "../utils/transaction";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddTransactionForm = ({ transactionType }) => {
  const [name, setName] = useInput("");
  const [amount, setAmount] = useInput("");
  const [type, setType] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [categoryId, setCategoryId] = React.useState("");
  const [description, setDescription] = useInput("");
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();

  const onDelete = (e) => {
    newCategoryIdb.deleteCategory(categoryId);
    window.location.reload();
  }

  React.useEffect(() => {
    const getData = async () => {
      if (transactionType !== null) {
        setType(transactionType);
      }
    };

    getData();
  }, [transactionType])

  const onSubmit = async (e) => {
    e.preventDefault();
    Swal.showLoading();
    const data = await addTransaction({
      name,
      amount,
      type,
      category: selectedCategory,
      description
    }, user.uid);

    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Add Transaction Success',
        showConfirmButton: false,
        timer: 1000
      })
      navigate('/');
    } else {
      Swal.fire({
        icon: 'error',
        title: data.message,
        showConfirmButton: false,
        timer: 1000
      })
    }
  };

  return (
    <>
      <form className="my-5" onSubmit={onSubmit}>
        <input type="text" className="form-control my-4 input__height" placeholder={locale === "en" ? "Name" : "Nama"} aria-label={locale === "en" ? "Name" : "Nama"} value={name} onChange={setName}></input>
        <input type="text" className="form-control my-4 input__height" placeholder={locale === "en" ? "Amount" : "Jumlah"} aria-label={locale === "en" ? "Amount" : "Jumlah"} value={amount} onChange={setAmount}></input>

        <div className="text-center my-4">
          <div className="row">
            <div className="col-sm-12 col-lg-8 mb-2">
              <div className="dropdown">
                <AddNewCategoryDropdown
                  placeHolder={locale === "en" ? "Select Category" : "Pilih Kategori"}
                  categoryCallback={(value) => {
                    setSelectedCategory(value.data);
                    setCategoryId(value.id);
                  }}
                />
              </div>
            </div>

            <div className="col-sm-8 col-lg-3 mb-2">
              <button type="button" className="btn btn-primary form-control btn-color input__height" data-bs-toggle="modal" data-bs-target="#exampleModal" title={locale === 'en' ? 'Add New Category' : 'Tambah Kategori Baru'}>
                <FiPlusSquare /> New Category
              </button>
            </div>
            <div className="col-sm-4 col-lg-1">
              <button type="button" className="btn btn-danger form-control input__height btn-hapus" title={locale === 'en' ? 'Delete Category' : 'Hapus Kategori'} onClick={() => onDelete()}>
                <FiTrash2 />
              </button>
            </div>
          </div>
        </div>

        <textarea className="form-control my-4" placeholder={locale === "en" ? "Description" : "Deskripsi"} aria-label="With textarea" value={description} onChange={setDescription} style={{ height: "120px" }}></textarea>
        <button type="submit" className="btn btn-primary btn-lg form-control btn-color">
          {locale === "en" ? "Add" : "Tambah"}
        </button>
      </form>
      <AddNewCategoryModal />
    </>
  );
};

export default AddTransactionForm;
