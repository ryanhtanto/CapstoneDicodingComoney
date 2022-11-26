import React from "react";
import { FiPlusSquare } from "react-icons/fi";
import CategoryModal from "./CategoryModal";
import useInput from "../hooks/UseInput";
import { FiTrash2 } from "react-icons/fi";
import LocaleContext from "../context/LocaleContext";
import { addTransaction } from "../utils/transaction";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteCategory, getExpenseCategories, getIncomeCategories } from "../utils/category";

const TransactionForm = ({ transactionType, transactionData }) => {
  const [name, setName, setDefaultName] = useInput("");
  const [amount, setAmount, setDefaultAmount] = useInput("");
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [categoryId, setCategoryId] = React.useState("");
  const [description, setDescription, setDefaultDescription] = useInput("");
  const [categories, setCategories] = React.useState([]);
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getData() {
      if (transactionType === "income") {
        console.log("income");
        const data = await getIncomeCategories(user.uid);
        setCategories(data);
      } else {
        console.log("expense")
        const data = await getExpenseCategories(user.uid);
        setCategories(data);
      }
    }
    getData();
  }, [transactionType, user]);

  React.useEffect(() => {
    if (transactionData) {
      setDefaultName(transactionData.name);
      setDefaultAmount(transactionData.amount);
      setDefaultDescription(transactionData.description);
    }
  }, []);

  const onDeleteCategory = async () => {
    if (selectedCategory !== null) {
      await deleteCategory(categoryId, user.uid);
      console.log(19291)
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
        type: transactionType,
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

  const setCategoryData = (e) => {
    if (e.target.value === null) {
      return;
    }

    console.log(e.target.value)
    const data = e.target.value.split("^");
    setSelectedCategory(data[0]);
    setCategoryId(data[1]);
  };

  // console.log(selectedCategory);

  return (
    <>
      <form className="my-5" onSubmit={onSubmit}>
        <input type="text" className="form-control my-4 input__height" placeholder={locale === "en" ? "Name" : "Nama"} aria-label={locale === "en" ? "Name" : "Nama"} value={name} onChange={setName} required></input>
        <input type="text" className="form-control my-4 input__height" placeholder={locale === "en" ? "Amount" : "Jumlah"} aria-label={locale === "en" ? "Amount" : "Jumlah"} value={amount} onChange={setAmount} required></input>
        <div className="text-center my-4">
          <div className="row">
            <div className="col-sm-12 col-lg-8 mb-2">
              <div className="dropdown">
                <select
                  className="form-select input__height"
                  aria-label="Default select example"
                  onChange={(e) => setCategoryData(e)}
                  required>
                  <option value="">Select Category</option>
                  {
                    categories?.map((category) => (
                      <option value={`${category.categoryName}^${category.id}`} key={category.id}>
                        {category.categoryName}
                      </option>
                    ))
                  }
                </select>
              </div>
            </div>

            <div className="col-sm-8 col-lg-3 mb-2">
              <button type="button" className="btn btn-primary form-control btn-color input__height" data-bs-toggle="modal" data-bs-target="#exampleModal" title={locale === "en" ? "Add New Category" : "Tambah Kategori Baru"}>
                <FiPlusSquare /> New Category
              </button>
            </div>
            <div className="col-sm-4 col-lg-1">
              <button type="button" className="btn btn-danger form-control input__height btn-hapus" title={locale === "en" ? "Delete Category" : "Hapus Kategori"} onClick={() => onDeleteCategory()}>
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
      <CategoryModal transactionType={transactionType} />
    </>
  );
};

export default TransactionForm;
