import financialData from "../data/financial-data-idb";
import { getFullDate } from "./date-formatter";
import userData from './user-data.json';

const dateToday = getFullDate();

const getFinancialData = async (accessToken) => {
  const transactions = userData.filter((transaction) => {
    return transaction.accessToken === accessToken;
  })
  return transactions;
};

const getAllTransactions = async (accessToken) => {
  const transactions = await getFinancialData(accessToken);
  const allTransactions = transactions.map((transactionItems) => {
    return transactionItems.transaction;
  })

  return allTransactions;
}

const getTodayTransactions = async (accessToken, dateSelected = dateToday) => {
  console.log(dateSelected);
  const transactions = await getFinancialData(accessToken);
  const todayTransactions = transactions.filter((transactionItems) => {
    return transactionItems.transaction.date === dateSelected;
  }).map((transactionItems) => {
    return transactionItems.transaction;
  });
  return todayTransactions;
};

const getThisMonthTransactions = async (accessToken) => {
  const transactions = await getFinancialData(accessToken);
  const thisMonthTransactions = transactions.map((transactionItems) => {
    if (transactionItems.transaction.date.slice(5, 7) === dateToday.slice(5, 7)) {
      return transactionItems.transaction;
    }
  });

  return thisMonthTransactions;
}

const addTransaction = async () => {

};

const deleteTransaction = async () => {

}

export {
  addTransaction,
  deleteTransaction, getTodayTransactions,
  getThisMonthTransactions,
  getAllTransactions
};
