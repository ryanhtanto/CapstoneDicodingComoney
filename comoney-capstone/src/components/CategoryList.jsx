import React from "react";

const CategoryList = ({ data }) => {
  return (
    <li>
      <a className="dropdown-item" href="#">{data}</a>
    </li>
  );
};

export default CategoryList;
