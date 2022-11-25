import { openDB } from "idb";
import CONFIG from "../global/config";

const { DATABASE_USER_NAME, DATABASE_VERSION, OBJECT_STORE_NAME_USER } = CONFIG;

const dbPromise = openDB(DATABASE_USER_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME_USER, { keyPath: 'email' });
  },
});

const userIdb = {
  async addUser(user) {
    return (await dbPromise).add(OBJECT_STORE_NAME_USER, user);
  },

  async getUser(email) {
    return (await dbPromise).get(OBJECT_STORE_NAME_USER, email);
  },
}

export default userIdb;