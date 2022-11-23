import React from "react";
import { BsGraphDown, BsGraphUp, BsWallet2 } from "react-icons/bs";
import waveHand from '../assets/wavehand.png';
import UserContext from '../context/UserContext';
import { getAllTransactions, getThisMonthTransactions, getTodayTransactions } from "../utils/user-financial";

function CardInformation() {
  const { user } = React.useContext(UserContext);
  const [incomeDaily, setIncomeDaily] = React.useState(0);
  const [expenseDaily, setExpenseDaily] = React.useState(0);
  const [incomeMonthly, setIncomeMonthly] = React.useState(0);
  const [expenseMonthly, setExpenseMonthly] = React.useState(0);
  const [currentBalance, setCurrentBalance] = React.useState(0);

  React.useEffect(() => {
    const getDailyIncome = async () => {
      const transactions = await getTodayTransactions(user.accessToken);

      if (transactions === undefined) {
        return false;
      }

      let total = 0;
      transactions.forEach((transaction) => {
        if (transaction.type === 'income') {
          total += transaction.amount;
        }
      });
      setIncomeDaily(total);
    };

    const getMonthlyIncome = async () => {
      const monthlyTransactions = await getThisMonthTransactions(user.accessToken);
      let total = 0;

      monthlyTransactions.forEach((transaction) => {
        if (transaction.type === 'expense') {
          total += transaction.amount;
        }
      });
      setIncomeMonthly(total);
    };

    const getDailyExpense = async () => {
      const transactions = await getTodayTransactions(user.accessToken);

      if (transactions === undefined) {
        return false;
      }

      let total = 0;
      transactions.forEach((transaction) => {
        if (transaction.type === 'expense') {
          total += transaction.amount;
        }
      });
      setExpenseDaily(total);
    };

    const getMonthlyExpense = async () => {
      const monthlyTransactions = await getThisMonthTransactions(user.accessToken);
      let total = 0;

      monthlyTransactions.forEach((transaction) => {
        if (transaction.type === 'expense') {
          total += transaction.amount;
        }
      });
      setExpenseMonthly(total);
    };

    const getCurrentBalance = async () => {
      let income = 0;
      let expense = 0;

      const transactions = await getAllTransactions(user.accessToken);

      transactions.forEach((transaction) => {
        if (transaction.type === 'income') {
          income += transaction.amount;
        } else {
          expense += transaction.amount;
        }
      })

      setCurrentBalance(income - expense);
    }

    getDailyIncome();
    getMonthlyIncome();
    getDailyExpense();
    getMonthlyExpense();
    getCurrentBalance();
  }, [user]);

  return (
    <section className="card mt-4 dashboard__card">
      <div className="card-body">
        <h2 className="col-sm-12 fw-bold">Welcome back {user.name} <img src={waveHand} alt="wave hand emoji" /></h2>
        <div className="card-content">
          <article className="card__balance py-3 d-flex align-items-center px-4 mt-3">
            <BsWallet2 />
            <div className="balance__container ms-4">
              <h3 className="fw-bold small__font">Current Balance</h3>
              <p className="small__font">Rp {currentBalance}</p>
            </div>
          </article>
          <article className="card__income-expense py-3 px-4 mt-3">
            <div className="income-expense__time mb-2">
              <p className="ps-3 pe-3 pt-1 pb-1 small__font">Today</p>
            </div>
            <div className="income d-flex align-items-center">
              <BsGraphUp className='graph-up' />
              <div className="income__container ms-4">
                <h3 className="fw-bold small__font">Income</h3>
                <p className="small__font">Rp {incomeDaily}</p>
              </div>
            </div>
            <div className="expense d-flex align-items-center">
              <BsGraphDown className='graph-down' />
              <div className="expense__container ms-4">
                <h3 className="fw-bold small__font">Expense</h3>
                <p className="small__font">Rp {expenseDaily}</p>
              </div>
            </div>
          </article>
          <article className="card__income-expense py-3 px-4 mt-3">
            <div className="income-expense__time mb-2">
              <p className="ps-3 pe-3 pt-1 pb-1 small__font">This Month</p>
            </div>
            <div className="income d-flex align-items-center">
              <BsGraphUp className='graph-up' />
              <div className="income__container ms-4">
                <h3 className="fw-bold small__font">Income</h3>
                <p className="small__font">Rp {incomeMonthly}</p>
              </div>
            </div>
            <div className="expense d-flex align-items-center">
              <BsGraphDown className='graph-down' />
              <div className="expense__container ms-4">
                <h3 className="fw-bold small__font">Expense</h3>
                <p className="small__font">Rp {expenseMonthly}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CardInformation;