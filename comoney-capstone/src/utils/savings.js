import { getFirestore, setDoc, doc, collection, getDocs, deleteDoc, getDoc } from "firebase/firestore";
import app from '../global/firebase-config';

const db = getFirestore(app);

const addSavingsMoney = async (savingsName, amount, targetDate, accessToken) => {
  try {
    const id = +new Date();
    console.log(id);
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    await setDoc(doc(db, 'financials', `${accessToken}`, 'savings', `${id}`), {
      id,
      data: {
        savingsName,
        amount,
        targetDate,
        currentDate,
      }
    });
    return {
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      message: `Failed Add Savings Plan ${error.message}`
    }
  }
}

const getAllSavings = async (accessToken) => {
  const docsRef = collection(db, 'financials', `${accessToken}`, 'savings');
  const docsSnap = await getDocs(docsRef);

  let data = [];
  docsSnap.forEach((doc) => {
    data.push(doc.data());
  })

  return data;
}

const getSavings = async (accessToken, id) => {
  const docRef = doc(db, 'financials', `${accessToken}`, 'savings', `${id}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    alert("No such document!");
  }
}

const deleteSavings = async (id, accessToken) => {
  try {
    await deleteDoc(doc(db, 'financials', `${accessToken}`, 'savings', `${id}`))
    return {
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      message: `Can't Delete Savings Plan ${error.message}`
    }
  }

}

const editSavingsMoney = async (savingsID, savingsName, amount, targetDate, currentDate, accessToken) => {
  const id = savingsID;

  try {
    await setDoc(doc(db, 'financials', `${accessToken}`, 'savings', `${id}`), {
      id,
      data: {
        savingsName,
        amount,
        targetDate,
        currentDate,
      }
    });
    return {
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      message: `Failed Add Savings Plan ${error.message}`
    }
  }
};

export { deleteSavings, addSavingsMoney, getAllSavings, getSavings, editSavingsMoney }
