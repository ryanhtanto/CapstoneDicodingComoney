import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import savingMoneyIdb from "../data/saving-money-idb";
import newCategoryIdb from "../data/new-category-idb";

import app from '../global/firebase-config';
const auth = getAuth(app);

const getStatusAuthenticated = () => {
  const state = localStorage.getItem('authenticated');
  return state;
}

const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

const logout = () => {
  signOut(auth);
};

const register = async (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(userCredential.user, {
        displayName: name
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

const savingsMoney = async (savingsName, amount, targetDate) => {
  const user = await getActiveUser();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;

  await savingMoneyIdb.addSavings({
    accessToken: user.accessToken,
    id: +new Date(),
    data: {
      savingsName,
      amount,
      targetDate,
      currentDate,
    }
  });
};

const editSavingsMoney = async (getId, savingsName, amount, targetDate) => {
  const user = await getActiveUser();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;
  const parseId = JSON.stringify(getId)
  const jsonParse = JSON.parse(parseId);

  await savingMoneyIdb.editSavingsMoney({
    accessToken: user.accessToken,
    id: parseFloat(jsonParse.getId),
    data: {
      savingsName,
      amount,
      targetDate,
      currentDate,
    }
  });
};


const addCategory = async (categoryName) => {
  const user = await getActiveUser();
  await newCategoryIdb.addCategory({
    accessToken: user.accessToken,
    id: +new Date(),
    data:
      categoryName,
  })
}

const getActiveUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      }
    });
  })
};




export { login, logout, register, getActiveUser, savingsMoney, addCategory, editSavingsMoney, getStatusAuthenticated };
