import React from "react";
import { FiPlusSquare } from "react-icons/fi";
import AddNewCategoryDropdown from "./AddNewCategoryDropdown";
import AddNewCategoryModal from "./AddNewCategoryModal";
import useInput from "../hooks/UseInput";
import { FiTrash2 } from "react-icons/fi";
import newCategoryIdb from "../data/new-category-idb";

const AddIncomeForm = () => {
  const [name, setName] = useInput("");
  const [amount, setAmount] = useInput("");
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [categoryId, setCategoryId] = React.useState("");
  const [description, setDescription] = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, amount, selectedCategory, categoryId, description);
  };

  const onDelete = () => {
    newCategoryIdb.deleteCategory(categoryId);
    window.location.reload();
  };

  return (
    <>
      <form className="my-5" onSubmit={onSubmit}>
        <input type="text" className="form-control my-4 input__height" placeholder="Name" aria-label="Name" value={name} onChange={setName}></input>
        <input type="text" className="form-control my-4 input__height" placeholder="Amount" aria-label="Amount" value={amount} onChange={setAmount}></input>

        <div className="text-center my-4">
          <div className="row">
            <div className="col-sm-12 col-lg-8 mb-2">
              <div className="dropdown">
                <AddNewCategoryDropdown
                  placeHolder="Select Category"
                  categoryCallback={(value) => {
                    setSelectedCategory(value.data);
                    setCategoryId(value.id);
                  }}
                />
              </div>
            </div>

            <div className="col-sm-8 col-lg-3 mb-2">
              {/* button trigger modal */}
              <button type="button" className="btn btn-primary form-control btn-color input__height" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <FiPlusSquare /> New Category
              </button>
            </div>
            <div className="col-sm-4 col-lg-1">
              <button type="submit" className="btn btn-danger form-control input__height btn-hapus" onClick={() => onDelete()}>
                <FiTrash2 />
              </button>
            </div>
          </div>
        </div>

        <textarea className="form-control my-4" placeholder="Description" aria-label="With textarea" value={description} onChange={setDescription} style={{ height: "120px" }}></textarea>
        <button type="submit" className="btn btn-primary btn-lg form-control btn-color">
          Add
        </button>
      </form>
      <AddNewCategoryModal />
    </>
  );
};

export default AddIncomeForm;
