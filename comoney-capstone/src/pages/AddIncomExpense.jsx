import React from "react";
import { FiPlusSquare } from "react-icons/fi";

const AddIncomeExpense = () => {
  return (
    <section>
      <div className="container">
        <div className="container text-center my-4  ">
          <div className="row">
            <div className="col">
              <a href="" className="fs-3 fw-semibold text-decoration-none text-black">
                Income
              </a>
            </div>
            <div className="col">
              <a href="" className="fs-3 fw-semibold text-decoration-none text-black">
                Expense
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <h4 className="fw-bold">Add your income, here</h4>
          <p>Fill your detail income below</p>
          <form className="my-5">
            <input type="text" className="form-control my-4 input__height" placeholder="Name" aria-label="Name"></input>
            <input type="text" className="form-control my-4 input__height" placeholder="Amount" aria-label="Amount"></input>

            <div className="text-center my-4">
              <div className="row">
                <div className="col-sm-12 col-lg-9 mb-2">
                  <div className="dropdown">
                    <button className="form-control dropdown-toggle input__height" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Category
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  {/* button trigger modal */}
                  <button type="button" className="btn btn-primary form-control btn-color input__height" data-bs-toggle="modal" data-bs-target="#exampleModal"> <FiPlusSquare/> New Category</button>
                </div>
              </div>
            </div>

            {/* modal */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Category</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form action="">
                      <input type="text" className="form-control my-4 input__height" placeholder="New Category" aria-label="New Category"></input>
                      <button type="button" className="btn btn-primary btn-color text-white input__height">Save changes</button>
                    </form>
                  </div>
                  <div className="modal-footer">
                  </div>
                </div>
              </div>
            </div>

            <textarea className="form-control my-4" placeholder="Description" aria-label="With textarea" style={{height: "120px"}}></textarea>
            <button type="submit" className="btn btn-primary btn-lg form-control btn-color">Add New Income/Expense</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddIncomeExpense;