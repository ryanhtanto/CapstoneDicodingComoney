import { openDB } from "idb";
import CONFIG from "../global/config";

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'email' });
  },
});

const userIdb = () => {
  const addUser = async (user) => {
    return (await dbPromise).add(OBJECT_STORE_NAME, user);
  }

  const getUser = async (email) => {
    return (await dbPromise).get(OBJECT_STORE_NAME, email);
  }
}

export default userIdb;