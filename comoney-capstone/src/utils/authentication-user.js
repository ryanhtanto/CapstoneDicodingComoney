import activeUser from "../data/active-user";
import userIdb from "../data/user-idb";

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

const getActiveUser = async () => {
  const user = await activeUser.getActiveUser();
  return user;
};

export { login, logout, register, getActiveUser };
