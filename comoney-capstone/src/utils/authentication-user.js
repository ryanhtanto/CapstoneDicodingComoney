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

const getActiveUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      }
    });
  })
};

export { login, logout, register, getActiveUser, getStatusAuthenticated };
