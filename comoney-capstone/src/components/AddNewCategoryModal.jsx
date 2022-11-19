import React from "react";
import useInput from "../hooks/UseInput";
import { addCategory } from "../utils/authentication-user";

const AddNewCategoryModal = () => {
  const [categoryName, setCategoryName] = useInput("");

  const onSubmit = async (e) => {
    e.preventDefault();
    addCategory(categoryName);
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Category</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <input type="text" className="form-control my-4 input__height" placeholder="New Category" aria-label="New Category" value={categoryName} onChange={setCategoryName}></input>
              <button type="submit" className="btn btn-primary btn-color text-white input__height">
                Save changes
              </button>
            </form>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCategoryModal;
