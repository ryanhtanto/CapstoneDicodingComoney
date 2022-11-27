import React from "react";
import { FiPlusSquare } from "react-icons/fi";
import CategoryModal from "./CategoryModal";
import useInput from "../hooks/UseInput";
import { FiTrash2 } from "react-icons/fi";
import LocaleContext from "../context/LocaleContext";
import UserContext from "../context/UserContext";
import Swal from "sweetalert2";
import { deleteCategory, getExpenseCategories, getIncomeCategories } from "../utils/category";

const TransactionForm = ({ type, onAddHandler, onEditHandler, previousValue }) => {
  const [useDefaultValue, setUseDefaultValue] = React.useState(onEditHandler ? true : false);
  const [name, setName, setDefaultName] = useInput("");
  const [amount, setAmount, setDefaultAmount] = useInput("");
  const [description, setDescription, setDefaultDescription] = useInput();
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [categories, setCategories] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState("");

  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    async function getData() {
      let data;
      if (type === "income") {
        data = await getIncomeCategories(user.uid);
      } else {
        data = await getExpenseCategories(user.uid);
      }
      setCategories(data || []);
      console.log(10000)
    }
    getData();
  }, [type, user, selectedCategory]);

  React.useEffect(() => {
    if (previousValue) {
      setDefaultName(previousValue.name);
      setDefaultAmount(previousValue.amount);
      setDefaultDescription(previousValue.description);
      setSelectedCategory(previousValue.category)
    }
  }, [])

  const onDeleteCategory = async () => {
    if (selectedCategory !== null) {
      await deleteCategory(categoryId, user.uid);
      Swal.fire({
        icon: "success",
        title: "Delete Category Success",
        showConfirmButton: false,
        timer: 1000,
      });
      setSelectedCategory(null)
    } else {
      Swal.fire({
        icon: "error",
        title: "Select Category First",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const setCategoryData = (e) => {
    setUseDefaultValue(false);
    if (e.target.value === null) {
      return;
    }

    const data = e.target.value.split("^@#");
    setSelectedCategory(data[0]);
    setCategoryId(data[1]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (onAddHandler) {
      await onAddHandler({ name, amount, description, selectedCategory, type });
      return;
    }

    if (onEditHandler) {
      await onEditHandler({ name, amount, description, selectedCategory, type });
      return;
    }

  }

  return (
    <>
      <form className="my-5" onSubmit={(e) => onSubmit(e)}>
        <div className="text-center my-4">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <div className="dropdown">
                <select
                  className="form-select input__height mb-2 disabled"
                  aria-label="Default select example"
                  onChange={(e) => setCategoryData(e)}
                >
                  <option value="">Select Category</option>
                  {
                    categories?.map((category) => (
                      <option value={`${category.categoryName}^@#${category.id}`} key={category.id}>
                        {category.categoryName}
                      </option>
                    ))
                  }
                </select>
                <p className={useDefaultValue ? "rounded prev-category py-1 px-3 mb-2" : "d-none"}>Previous Category : {selectedCategory}</p>
              </div>
            </div>

            <div className="col-sm-8 col-lg-3 mb-2">
              <button type="button" className="btn btn-primary form-control btn-color input__height mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal" title={locale === "en" ? "Add New Category" : "Tambah Kategori Baru"}>
                <FiPlusSquare /> New Category
              </button>
            </div>
            <div className="col-sm-4 col-lg-1">
              <button type="button" className="btn btn-danger form-control input__height btn-hapus mb-2" title={locale === "en" ? "Delete Category" : "Hapus Kategori"} onClick={() => onDeleteCategory()}>
                <FiTrash2 />
              </button>
            </div>
          </div>
        </div>
        <input type="text" className="form-control my-4 input__height" placeholder={locale === "en" ? "Name" : "Nama"} aria-label={locale === "en" ? "Name" : "Nama"} value={name} onChange={setName} required></input>
        <input type="number" className="form-control my-4 input__height" placeholder={locale === "en" ? "Amount" : "Jumlah"} aria-label={locale === "en" ? "Amount" : "Jumlah"} value={amount} onChange={setAmount} required></input>

        <textarea className="form-control mb-4" placeholder={locale === "en" ? "Description" : "Deskripsi"} aria-label="With textarea" value={description} onChange={setDescription} style={{ height: "120px" }}></textarea>
        <button type="submit" className="btn btn-primary btn-lg form-control btn-color">
          {
            onAddHandler ? locale === "en" ? "Add" : "Tambah" : locale === "en" ? "Save" : "Simpan"
          }
        </button>
      </form>
      <CategoryModal transactionType={type} />
    </>
  );
};

export default TransactionForm;
