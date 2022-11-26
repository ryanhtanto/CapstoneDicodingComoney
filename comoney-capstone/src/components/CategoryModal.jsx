import React from "react";
import useInput from "../hooks/UseInput";
import { addCategory } from "../utils/category";
import LocaleContext from "../context/LocaleContext";
import UserContext from "../context/UserContext";
import Swal from "sweetalert2";

const CategoryModal = ({ transactionType }) => {
  const [categoryName, setCategoryName] = useInput("");
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);

  const onSubmit = async (e) => {
    console.log(categoryName, user.uid, transactionType)
    e.preventDefault();
    Swal.showLoading();
    const data = await addCategory(categoryName, user.uid, transactionType);
    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "Add Category Success",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: data.message,
        showConfirmButton: false,
        timer: 20000,
      });
    }
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {locale === "en" ? "Add New Category" : "Tambah Kategori Baru"}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <input type="text" className="form-control my-4 input__height" placeholder={locale === "en" ? "New Category" : "Kategori Baru"} aria-label={locale === "en" ? "New Category" : "Kategori Baru"} value={categoryName} onChange={setCategoryName}></input>
              <button type="submit" className="btn btn-primary btn-color text-white input__height" data-bs-dismiss="modal">
                {locale === "en" ? "Save Category" : "Simpan Kategori"}
              </button>
            </form>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
