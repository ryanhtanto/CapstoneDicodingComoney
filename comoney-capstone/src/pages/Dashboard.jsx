import React from 'react';
import waveHand from '../assets/wavehand.png';
import { BsWallet2, BsGraphUp, BsGraphDown, BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';

function Dashboard() {
  return (
    <div className="container dashboard__container px-3">
      <section className="card mt-4 dashboard__card">
        <div className="card-body">
        <h2 className="col-sm-12 fw-bold">Welcome back Vincent <img src={waveHand} alt="wave hand emoji" /></h2>
            <div className="card-content">
              <article className="card__balance py-3 d-flex align-items-center px-4 mt-3">
                <BsWallet2/>
                <div className="balance__container ms-4">
                  <h3 className="fw-bold">Current Balance</h3>
                  <p>Rp 1.200.000</p>
                </div>
              </article>
              <article className="card__income-expense py-3 px-4 mt-3">
                <div className="income-expense__time mb-2">
                  <p className='ps-3 pe-3 pt-1 pb-1'>Today</p>
                </div>
                <div className="income d-flex align-items-center">
                  <BsGraphUp className='graph-up'/>
                  <div className="income__container ms-4">
                    <h3 className="fw-bold">Income</h3>
                    <p>Rp 500.000</p>
                  </div>
                </div>
                <div className="expense d-flex align-items-center">
                  <BsGraphDown className='graph-down'/>
                  <div className="expense__container ms-4">
                    <h3 className="fw-bold">Expense</h3>
                    <p>Rp 200.000</p>
                  </div>
                </div>
              </article>
              <article className="card__income-expense py-3 px-4 mt-3">
                <div className="income-expense__time mb-2">
                  <p className='ps-3 pe-3 pt-1 pb-1'>This Month</p>
                </div>
                <div className="income d-flex align-items-center">
                  <BsGraphUp className='graph-up'/>
                  <div className="income__container ms-4">
                    <h2 className="fw-bold">Income</h2>
                    <p>Rp 1.000.000</p>
                  </div>
                </div>
                <div className="expense d-flex align-items-center">
                  <BsGraphDown className='graph-down'/>
                  <div className="expense__container ms-4">
                    <h3 className="fw-bold">Expense</h3>
                    <p>Rp 1.200.000</p>
                  </div>
                </div>
              </article>
            </div>
        </div>
      </section>

      <section className="list__transaction">
        <div className="row mt-4 transaction__header">
          <div className="col-sm-12 col-md-8 mt-2">
            <h2 className='fw-bold'>Latest Transaction</h2>
            <p>Click category name to see the detail</p>
          </div>
          <div className="col-sm-12 col-md-4 mt-2">
            <input className="form-control" type="date"/>
          </div>
        </div>

        <div className="transaction__content">
          <p className="transaction__date px-3 py-2 mb-3 mt-4">12 November 2022</p>
          <li className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex mb-2 align-items-center">
              <BsFillArrowDownCircleFill/>
              <p className="fw-bold ms-2">Shopping</p>
            </div>
            <p className="fw-bold green">Rp 800.000</p>
          </li>
          <li className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex mb-2 align-items-center">
              <BsFillArrowUpCircleFill/>
              <p className="fw-bold ms-2">Freelance</p>
            </div>
            <p className="fw-bold red">Rp 200.000</p>
          </li>
        </div>
      </section>
      


    </div>
  );
}

export default Dashboard;