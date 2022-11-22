import React from "react";
import CategoryList from "./CategoryList";
import newCategoryIdb from "../data/new-category-idb";

const AddNewCategoryDropdown = () => {
  const [categories, setCategories] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(function () {
    async function getData() {
      const categoryFromDb = await newCategoryIdb.getAllCategory();
      setCategories(categoryFromDb);
      setLoading(false);
    }
    getData();
  }, []);

  if (loading === false) {
    return (
      <ul className="dropdown-menu">
        {categories?.map((category) => {
          return <CategoryList key={category.id} data={category.data} />;
        })}
      </ul>
    );
  }
};

export default AddNewCategoryDropdown;
