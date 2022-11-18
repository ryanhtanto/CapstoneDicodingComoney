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

  async getUser(email) {
    return (await dbPromise).get(OBJECT_STORE_NAME, email);
  },
}

export default userIdb;