import React from "react";
import { FiPlusSquare } from "react-icons/fi";
import CategoryDropdown from "./CategoryDropdown";
import CategoryModal from "./CategoryModal";
import useInput from "../hooks/UseInput";
import { FiTrash2 } from "react-icons/fi";
import newCategoryIdb from "../data/new-category-idb";
import LocaleContext from "../context/LocaleContext";
import { addTransaction } from "../utils/transaction";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TransactionForm = ({ transactionType, transactionData }) => {
  const [name, setName, setDefaultName] = useInput("");
  const [amount, setAmount, setDefaultAmount] = useInput("");
  const [type, setType] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [categoryId, setCategoryId] = React.useState("");
  const [description, setDescription, setDefaultDescription] = useInput("");
  const [categories, setCategories] = React.useState();
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getData() {
      const categoryFromDb = await newCategoryIdb.getAllCategory();
      setCategories(categoryFromDb);
    }
    getData();
  }, []);

  React.useEffect(() => {
    const getData = async () => {
      if (transactionType !== null) {
        setType(transactionType);
      }
    };
    getData();
  }, [transactionType]);

  React.useEffect(() => {
    if (transactionData) {
      setDefaultName(transactionData.name);
      setDefaultAmount(transactionData.amount);
      setDefaultDescription(transactionData.description);
      setSelectedCategory(transactionData.category);
      setType(transactionData.type);
    }
  }, []);

  const deleteCategory = () => {
    if (selectedCategory !== null) {
      newCategoryIdb.deleteCategory(categoryId);
      setSelectedCategory(null);
      Swal.fire({
        icon: "success",
        title: "Delete Category Success",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Select Category First",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    Swal.showLoading();
    const data = await addTransaction(
      {
        name,
        amount,
        type,
        category: selectedCategory,
        description,
      },
      user.uid
    );

    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "Add Transaction Success",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: data.message,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  console.log(selectedCategory);

  return (
    <>
      <form className="my-5" onSubmit={onSubmit}>
        <input type="text" className="form-control my-4 input__height" placeholder={locale === "en" ? "Name" : "Nama"} aria-label={locale === "en" ? "Name" : "Nama"} value={name} onChange={setName}></input>
        <input type="text" className="form-control my-4 input__height" placeholder={locale === "en" ? "Amount" : "Jumlah"} aria-label={locale === "en" ? "Amount" : "Jumlah"} value={amount} onChange={setAmount}></input>

        <div className="text-center my-4">
          <div className="row">
            <div className="col-sm-12 col-lg-8 mb-2">
              <div className="dropdown">
                <select className="form-select" aria-label="Default select example" onChange={(e) => {setSelectedCategory(e.target.value); setCategoryId(e.target.key)}}>
                  <option value>{selectedCategory === null ? locale === "en" ? "Choose Category" : "Pilih Kategori" : selectedCategory}</option>
                  {categories?.map((category) => (
                    <option value={category.data} key={category.id}>
                      {category.data}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-sm-8 col-lg-3 mb-2">
              <button type="button" className="btn btn-primary form-control btn-color input__height" data-bs-toggle="modal" data-bs-target="#exampleModal" title={locale === "en" ? "Add New Category" : "Tambah Kategori Baru"}>
                <FiPlusSquare /> New Category
              </button>
            </div>
            <div className="col-sm-4 col-lg-1">
              <button type="button" className="btn btn-danger form-control input__height btn-hapus" title={locale === "en" ? "Delete Category" : "Hapus Kategori"} onClick={() => deleteCategory()}>
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
      <CategoryModal />
    </>
  );
};

export default TransactionForm;
