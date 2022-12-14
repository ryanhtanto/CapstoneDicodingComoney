import React from 'react';
import { BsGraphDown, BsGraphUp, BsWallet2 } from 'react-icons/bs';
import waveHand from '../assets/images/wavehand.png';
import UserContext from '../context/UserContext';
import { getAllTransactions, getThisMonthTransactions, getTodayTransactions } from '../utils/transaction';
import LocaleContext from '../context/LocaleContext';
import useRupiah from '../hooks/useRupiah';

function CardInformation() {
  const { user } = React.useContext(UserContext);
  const [incomeDaily, setIncomeDaily] = useRupiah(0);
  const [expenseDaily, setExpenseDaily] = useRupiah(0);
  const [incomeMonthly, setIncomeMonthly] = useRupiah(0);
  const [expenseMonthly, setExpenseMonthly] = useRupiah(0);
  const [currentBalance, setCurrentBalance] = useRupiah(0);
  const [loading, setLoading] = React.useState(true);
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    const getDailyIncome = async () => {
      const transactions = await getTodayTransactions(user.uid);

      if (!transactions) {
        return false;
      }

      let total = 0;
      transactions.forEach((transaction) => {
        if (transaction.type === 'income') {
          total = transaction.amount;
        }
      });

      setIncomeDaily(total);
    };

    const getMonthlyIncome = async () => {
      const monthlyTransactions = await getThisMonthTransactions(user.uid);

      if (!monthlyTransactions) {
        return false;
      }

      let total = 0;

      monthlyTransactions.forEach((transaction) => {
        if (transaction.type === 'income') {
          total += transaction.amount;
        }
      });
      setIncomeMonthly(total);
    };

    const getDailyExpense = async () => {
      const transactions = await getTodayTransactions(user.uid);

      if (!transactions) {
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
      const monthlyTransactions = await getThisMonthTransactions(user.uid);

      if (!monthlyTransactions) {
        return false;
      }

      let total = 0;

      monthlyTransactions.forEach((transaction) => {
        if (transaction.type === 'expense') {
          total += transaction.amount;
        }
      });

      setExpenseMonthly(total);
    };

    const getCurrentBalance = async () => {
      const transactions = await getAllTransactions(user.uid);

      if (!transactions) {
        return false;
      }

      let income = 0;
      let expense = 0;

      transactions.forEach((transaction) => {
        if (transaction.type === 'income') {
          income += transaction.amount;
        } else {
          expense += transaction.amount;
        }
      });

      setCurrentBalance(income - expense);
    };

    const getData = async () => {
      await getDailyIncome();
      await getMonthlyIncome();
      await getDailyExpense();
      await getMonthlyExpense();
      await getCurrentBalance();
      setLoading(false);
    };

    getData();
  }, [user]);

  return (
    <section className="card mt-4 dashboard__card">
      <div className="card-body placeholder-glow">
        <h2 className="col-sm-12 fw-bold">
          {locale === 'en' ? 'Welcome back ' : 'Selamat datang kembali '}
          {user.displayName}
          <img className="ms-2" src={waveHand} alt="wave hand emoji" />
        </h2>
        <div className="card-content">
          <article className="card__balance py-3 d-flex align-items-center px-4 mt-3">
            <BsWallet2 />
            <div className="balance__container ms-4">
              <h3 className="fw-bold small__font">{locale === 'en' ? 'Current Balance' : 'Saldo Saat Ini'}</h3>
              <p className={loading ? 'placeholder rounded mt-1' : 'small__font mt-1'}>
                Rp
                {' '}
                {currentBalance}
              </p>
            </div>
          </article>
          <article className="card__income-expense py-3 px-4 mt-3">
            <div className="income-expense__time mb-2">
              <p className="ps-3 pe-3 pt-1 pb-1 small__font">{locale === 'en' ? 'Today' : 'Hari ini'}</p>
            </div>
            <div className="income d-flex align-items-center">
              <BsGraphUp className="graph-up" />
              <div className="income__container ms-4">
                <h3 className="fw-bold small__font">{locale === 'en' ? 'Income' : 'Pemasukan'}</h3>
                <p className={loading ? 'placeholder rounded w-100 mt-1' : 'small__font mt-1'}>
                  Rp
                  {' '}
                  { incomeDaily }
                </p>
              </div>
            </div>
            <div className="expense d-flex align-items-center">
              <BsGraphDown className="graph-down" />
              <div className="expense__container ms-4 mt-1">
                <h3 className="fw-bold small__font">{locale === 'en' ? 'Expense' : 'Pengeluaran'}</h3>
                <p className={loading ? 'placeholder rounded w-100 mt-1' : 'small__font mt-1'}>
                  Rp
                  {' '}
                  {expenseDaily}
                </p>
              </div>
            </div>
          </article>
          <article className="card__income-expense py-3 px-4 mt-3">
            <div className="income-expense__time mb-2">
              <p className="ps-3 pe-3 pt-1 pb-1 small__font">{locale === 'en' ? 'This Month' : 'Bulan ini'}</p>
            </div>
            <div className="income d-flex align-items-center">
              <BsGraphUp className="graph-up" />
              <div className="income__container ms-4 mt-1">
                <h3 className="fw-bold small__font">{locale === 'en' ? 'Income' : 'Pemasukan'}</h3>
                <p className={loading ? 'placeholder rounded w-100 mt-1' : 'small__font mt-1'}>
                  Rp
                  {' '}
                  {incomeMonthly}
                </p>
              </div>
            </div>
            <div className="expense d-flex align-items-center">
              <BsGraphDown className="graph-down" />
              <div className="expense__container ms-4 mt-1">
                <h3 className="fw-bold small__font">{locale === 'en' ? 'Expense' : 'Pengeluaran'}</h3>
                <p className={loading ? 'placeholder rounded w-100 mt-1' : 'small__font mt-1'}>
                  Rp
                  {' '}
                  {expenseMonthly}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CardInformation;
