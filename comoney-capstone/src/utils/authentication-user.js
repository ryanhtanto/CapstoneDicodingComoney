import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile
} from "firebase/auth";
import app from '../global/firebase-config';
const auth = getAuth(app);


const getStatusAuthenticated = () => {
  const state = localStorage.getItem('authenticated');
  return state;
}

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return {
      success: true,
      user: userCredential.user,
    };
  } catch (error) {
    return {
      success: false,
      message: "Wrong Email / Password"
    }
  }
};

const logout = () => {
  signOut(auth);
};

const register = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {
      displayName: name,
    });
    return {
      success: true,
      user: userCredential.user,
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed Create Account ${error.message}`
    }
  }
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

export {
  login,
  logout,
  register,
  getActiveUser,
  getStatusAuthenticated
};
