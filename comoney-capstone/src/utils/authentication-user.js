import activeUser from "../data/active-user";
import savingMoneyIdb from "../data/saving-money-idb";
import userIdb from "../data/user-idb";
import newCategoryIdb from "../data/new-category-idb";

const login = async (email, password) => {
  const user = await userIdb.getUser(email);
  if (!user) {
    alert('Email Tidak Ditemukan');
    return false;
  }

  if (user.password !== password) {
    alert('Password Salah');
    return false;
  }

  await activeUser.addActiveUser({
    accessToken: user.data.accessToken,
    name: user.data.name,
  });

  return user.data;
};

const logout = async (accessToken) => {
  await activeUser.delete(accessToken);
};

const register = async (email, password, name) => {
  const userExist = await userIdb.getUser(email);

  if (userExist) {
    alert('Email Telah Terdaftar, Silahkan Login');
    return false;
  }

  userIdb.addUser({
    email,
    password,
    data: {
      name,
      accessToken: +new Date(),
    }
  });
};

const savingsMoney = async (savingsName, amount, targetDate) => {
  const user = await activeUser.getActiveUser();
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
  const user = await activeUser.getActiveUser();
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
  const user = await activeUser.getActiveUser();

  await newCategoryIdb.addCategory({
    accessToken: user.accessToken,
    id: +new Date(),
    data:
      categoryName,
  })
}

const getActiveUser = async () => {
  const user = await activeUser.getActiveUser();
  return user;
};


export { login, logout, register, getActiveUser, savingsMoney, addCategory, editSavingsMoney};
