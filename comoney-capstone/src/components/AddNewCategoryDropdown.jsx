import React from "react";
import CategoryList from "./CategoryList";

const AddNewCategoryDropdown = ({ categories }) => {
  return (
    <div className="col-sm-12 col-lg-9 mb-2">
      <div className="dropdown">
        <button className="form-control dropdown-toggle input__height" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Category
        </button>
        <ul className="dropdown-menu">
          {categories?.map((category) => {
            return <CategoryList key={category.id} data={category.data} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default AddNewCategoryDropdown;
