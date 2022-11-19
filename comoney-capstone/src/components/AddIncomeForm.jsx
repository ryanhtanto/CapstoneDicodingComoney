import React from "react";
import { FiPlusSquare } from "react-icons/fi";
import AddNewCategoryDropdown from "../components/AddNewCategoryDropdown";
import AddNewCategoryModal from "../components/AddNewCategoryModal";
import newCategoryIdb from "../data/new-category-idb";
import useInput from "../hooks/UseInput";

const AddIncomeForm = () => {
  const [categories, setCategories] = React.useState();
  const [name, setName] = useInput('');
  const [amount, setAmount] = useInput('');
  const [description, setDescription] = useInput('');

  // nah masalah yang berkaitan sama useEffect dibawah
  // jadi tiap ada user nge buat category baru dia kan masuk ke db, baru di tampilin di dropdown
  // nah itu tuh perlu waktu, jadi si render ini uda keburu jalan duluan, jadi usernya harus refresh page itu baru muncul si category yg baru dia bikin
  // aku uda coba bikin parameter ke 2 dari useEffect jadi categories (state yg nampung semua karegori yg dibuat) tapi malah nge abuse WKWKWK, langsung muncul sih gaperlu user refresh pagenya, tapi malah nge abuse

  React.useEffect(function(){
    async function getData(){
      const categoryFromDb = await newCategoryIdb.getAllCategory();
      setCategories(categoryFromDb);
    }
    getData()
  }, []);

  // ini belum kelar :v, lagi pikir cara ambil value dari si category yg di tekan sama user (detailnya aku ada tulis di CategoryList.jsx)
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, amount, description);
  }
  console.log(name, amount, description);

  return (
    <>
      <form className="my-5" onSubmit={onSubmit}>
        <input type="text" className="form-control my-4 input__height" placeholder="Name" aria-label="Name" value={name} onChange={setName}></input>
        <input type="text" className="form-control my-4 input__height" placeholder="Amount" aria-label="Amount" value={amount} onChange={setAmount}></input>

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

        <textarea className="form-control my-4" placeholder="Description" aria-label="With textarea" value={description} onChange={setDescription} style={{ height: "120px" }}></textarea>
        <button type="submit" className="btn btn-primary btn-lg form-control btn-color">
          Add New Income/Expense
        </button>
      </form>
      <AddNewCategoryModal />
    </>
  );
};

export default AddIncomeForm;
