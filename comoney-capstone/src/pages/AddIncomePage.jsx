import React from "react";
import { FiPlusSquare } from "react-icons/fi";
import AddNewCategoryDropdown from "../components/AddNewCategoryDropdown";
import AddNewCategoryModal from "../components/AddNewCategoryModal";
import newCategoryIdb from "../data/new-category-idb";

const AddIncomePage = () => {
  const [categories, setCategories] = React.useState();

  React.useEffect(function(){
    async function getData(){
      const categoryFromDb = await newCategoryIdb.getAllCategory();
      setCategories(categoryFromDb);
    }
    getData()
  }, []);

  return (
    <div className="content">
      <h4 className="fw-bold">Add your income, here</h4>
      <p>Fill your detail income below</p>
      <form className="my-5">
        <input type="text" className="form-control my-4 input__height" placeholder="Name" aria-label="Name"></input>
        <input type="text" className="form-control my-4 input__height" placeholder="Amount" aria-label="Amount"></input>

        <div className="text-center my-4">
          <div className="row">
            <AddNewCategoryDropdown categories={categories} />
            <div className="col">
              {/* button trigger modal */}
              <button type="button" className="btn btn-primary form-control btn-color input__height" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <FiPlusSquare /> New Category
              </button>
            </div>
          </div>
        </div>

        <textarea className="form-control my-4" placeholder="Description" aria-label="With textarea" style={{ height: "120px" }}></textarea>
        <button type="submit" className="btn btn-primary btn-lg form-control btn-color">
          Add New Income/Expense
        </button>
      </form>
      <AddNewCategoryModal />
    </div>
  );
};

export default AddIncomePage;
