import React from "react";
import newCategoryIdb from "../data/new-category-idb";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const AddNewCategoryDropdown = ({ placeHolder, categoryCallback }) => {
  const [categories, setCategories] = React.useState();
  // const [loading, setLoading] = React.useState(true);
  const [showMenu, setShowMenu] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const categoryFromDb = await newCategoryIdb.getAllCategory();
      setCategories(categoryFromDb);
      // setLoading(false);
    }
    getData();
  }, []);

  React.useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.data;
    }
    return placeHolder;
  };

  const onItemClick = (category) => {
    setSelectedValue(category);
    categoryCallback(category);
  };

  const isSelected = (category) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.data === category.data;
  };

  // if (loading === false) {
  return (
    <div className="dropdown-container">
      <div className="dropdown-input input__height" onClick={handleInputClick}>
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menus">
          {categories?.map((category) => (
            <div onClick={() => onItemClick(category)} key={category.id} className={`dropdown-item ${isSelected(category) && "selected"}`}>
              {category.data}
            </div>
          ))}
        </div>
      )}
    </div>
  );
  // }
};

export default AddNewCategoryDropdown;
