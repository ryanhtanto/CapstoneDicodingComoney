import React from "react";

const AboutUsPage = () => {
  return (
    <section className="container mt-4">
      <h4 className="fw-bold my-5">About Us</h4>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-4 d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://via.placeholder.com/350" className="card-img-top" />
              <div className="card-body">
                <p className="card-text">Ryan Hertanto</p>
                <p className="card-text">R271X0637 </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://via.placeholder.com/350" className="card-img-top" />
              <div className="card-body">
                <p className="card-text">Imam Faraz Aditya </p>
                <p className="card-text">R291X0706 </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://via.placeholder.com/350" className="card-img-top" />
              <div className="card-body">
                <p className="card-text">Vincent</p>
                <p className="card-text">R271X0638 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
