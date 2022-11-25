import { getFullDate } from "./date-formatter";
import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import app from '../global/firebase-config';

const dateToday = getFullDate();
const db = getFirestore(app);

const getAllTransactions = async (accessToken) => {
  console.log(accessToken);
  const docsRef = collection(db, 'financials', `${accessToken}`, 'transactions');
  const docsSnap = await getDocs(docsRef);

  let data = [];
  docsSnap.forEach((doc) => {
    data.push(doc.data());
  })

  return data;
}

const getTransaction = async (accessToken, id) => {
  const docRef = doc(db, 'financials', `${accessToken}`, 'transactions', `${id}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    alert("No such document!");
  }
}

const getTodayTransactions = async (accessToken, dateSelected = dateToday) => {
  const todayQuery = query(collection(db, 'financials', `${accessToken}`, 'transactions'), where("date", "==", dateSelected));
  const querySnapshot = await getDocs(todayQuery);

  let data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  })

  return data;
};

const getThisMonthTransactions = async (accessToken) => {
  const docsRef = collection(db, 'financials', `${accessToken}`, 'transactions');
  const docsSnap = await getDocs(docsRef);

  let data = [];
  docsSnap.forEach((doc) => {
    if (doc.data().date.slice(0, 7) === dateToday.slice(0, 7)) {
      data.push(doc.data());
    }
  })

  return data;
}

const addTransaction = async (transaction, accessToken) => {
  try {
    const id = +new Date();
    await setDoc(doc(db, 'financials', `${accessToken}`, 'transactions', `${id}`), {
      id,
      date: getFullDate(),
      type: transaction.type,
      name: transaction.name,
      amount: Number(transaction.amount),
      category: transaction.category,
      description: transaction.description,
    });
  } catch (error) {
    alert(error);
  }
};

const deleteTransaction = async (id, accessToken) => {
  await deleteDoc(doc(db, 'financials', `${accessToken}`, 'transactions', `${id}`))
}

export {
  addTransaction,
  deleteTransaction,
  getTodayTransactions,
  getTransaction,
  getThisMonthTransactions,
  getAllTransactions
};
