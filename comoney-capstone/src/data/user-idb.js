import { openDB } from "idb";
import CONFIG from "../global/config";
import activeUser from "./active-user";

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'email' });
  },
});

const userIdb = {
  async addUser(user) {
    return (await dbPromise).add(OBJECT_STORE_NAME, user);
  },

  async getUser(email, inputPassword) {
    const user = await (await dbPromise).get(OBJECT_STORE_NAME, email);
    if (user && user.password === inputPassword) {
      await activeUser.addActiveUser({
        accessToken: user.data.accessToken,
        name: user.data.name,
      });
      return user.data;
    }
  },

  async getUserLogged() {
    const user = await activeUser.getActiveUser();
    if (user) {
      return user;
    }
  }
}

export default userIdb;