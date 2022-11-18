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
}

export { login, logout };