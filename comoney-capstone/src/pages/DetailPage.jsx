import React from "react";
import {FiArrowLeft} from "react-icons/fi";

const DetailPage = () => {
  return(
    <section>
      <div className="container">
        <div className="my-4">
          <h4>
            <a href="" className="text-black text-decoration-none"> <FiArrowLeft className="warna fs-2"/> Back to Dashboard</a>
          </h4>
        </div>

        <div className="content">
          <h4 className="fw-bold">Detail Transaction</h4>

          <div className="my-4">
            <h5>Name</h5>
            <p>Sushi</p>
          </div>
          <div className="my-4">
            <h5>Amount</h5>
            <p>Rp. 300.000</p>
          </div>
          <div className="my-4">
            <h5>Category</h5>
            <p>Foods</p>
          </div>
          <div className="my-4">
            <h5>Description</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          

          <button type="submit" className="btn btn-primary btn-lg form-control btn-color my-4">Edit Income</button>
          <button type="submit" className="btn btn-primary btn-lg form-control btn-color mb-4">Delete Income</button>
        </div>
      </div>
    </section>
  )
}

export default DetailPage