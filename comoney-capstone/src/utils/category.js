import { collection, deleteDoc, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import app from "../global/firebase-config";

const db = getFirestore(app);

const addCategory = async (categoryName, accessToken, type) => {
  try {
    const id = +new Date();
    await setDoc(doc(db, 'financials', `${accessToken}`, 'categories', `${id}`), {
      id,
      type,
      categoryName
    })
    return {
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      message: `Add Category Failed ${error.message}`
    }
  }
}

const deleteCategory = async (id, accessToken) => {
  await deleteDoc(doc(db, 'financials', `${accessToken}`, 'categories', `${id}`))
}

const getIncomeCategories = async (accessToken) => {
  const categoryIncomeQuery = query(collection(db, 'financials', `${accessToken}`, 'categories'), where("type", "==", "income"));
  const querySnapshot = await getDocs(categoryIncomeQuery);

  let data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  })

  return data;
}

const getExpenseCategories = async (accessToken) => {
  const categoryExpenseQuery = query(collection(db, 'financials', `${accessToken}`, 'categories'), where("type", "==", "expense"));
  const querySnapshot = await getDocs(categoryExpenseQuery);

  let data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  })

  return data;
}


export { addCategory, deleteCategory, getIncomeCategories, getExpenseCategories };
