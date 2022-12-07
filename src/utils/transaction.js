import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { getFullDate, getMonthYear } from './date-formatter';
import app from '../global/firebase-config';

const thisDay = getFullDate();
const thisMonth = getMonthYear();
const db = getFirestore(app);

const getAllTransactions = async (accessToken) => {
  const docsRef = collection(db, 'financials', `${accessToken}`, 'transactions');
  const docsSnap = await getDocs(docsRef);

  const data = [];
  docsSnap.forEach((docItem) => {
    data.push(docItem.data());
  });

  return data;
};

const getTransaction = async (accessToken, id) => {
  const docRef = doc(db, 'financials', `${accessToken}`, 'transactions', `${id}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }
  alert('No such document!');
};

const getTodayTransactions = async (accessToken, dateSelected = thisDay) => {
  const todayQuery = query(collection(db, 'financials', `${accessToken}`, 'transactions'), where('date', '==', dateSelected));
  const querySnapshot = await getDocs(todayQuery);

  const data = [];
  querySnapshot.forEach((docItem) => {
    data.push(docItem.data());
  });

  return data;
};

const getThisMonthTransactions = async (accessToken, monthSelected = thisMonth) => {
  const docsRef = collection(db, 'financials', `${accessToken}`, 'transactions');
  const docsSnap = await getDocs(docsRef);

  const data = [];
  docsSnap.forEach((docItem) => {
    if (docItem.data().date.slice(0, 7) === monthSelected) {
      data.push(docItem.data());
    }
  });

  return data;
};

const putTransaction = async (transaction, accessToken, id = +new Date()) => {
  try {
    await setDoc(doc(db, 'financials', `${accessToken}`, 'transactions', `${id}`), {
      id,
      date: getFullDate(),
      type: transaction.type,
      name: transaction.name,
      amount: Number(transaction.amount),
      category: transaction.category,
      description: transaction.description,
    });
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed Add Transaction ${error.message}`,
    };
  }
};

const deleteTransaction = async (id, accessToken) => {
  await deleteDoc(doc(db, 'financials', `${accessToken}`, 'transactions', `${id}`));
};

export {
  putTransaction,
  deleteTransaction,
  getTodayTransactions,
  getTransaction,
  getThisMonthTransactions,
  getAllTransactions,
};
