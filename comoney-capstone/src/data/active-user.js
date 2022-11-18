import { openDB } from "idb";
import CONFIG from "../global/config";

const { DATABASE_TOKEN_NAME, DATABASE_VERSION, OBJECT_STORE_NAME_TOKEN } = CONFIG;

const dbPromise = openDB(DATABASE_TOKEN_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME_TOKEN, { keyPath: 'accessToken' });
  },
});

const activeUser = {
  async addActiveUser(activeUser) {
    return (await dbPromise).add(OBJECT_STORE_NAME_TOKEN, activeUser);
  },

  async getActiveUser() {
    const user = await (await dbPromise).getAll(OBJECT_STORE_NAME_TOKEN);
    return user[0];
  },
}

export default activeUser;