import React from "react";

const CategoryList = ({ data }) => {

  return (
    <option className="dropdown-item">
      {data}
    </option>
  );
};

export default CategoryList;
