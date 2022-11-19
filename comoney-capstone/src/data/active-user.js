import { openDB } from "idb";
import CONFIG from "../global/config";

const { DATABASE_ACTIVE_USER_NAME, DATABASE_VERSION, OBJECT_STORE_NAME_ACTIVE_USER } = CONFIG;

const dbPromise = openDB(DATABASE_ACTIVE_USER_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME_ACTIVE_USER, { keyPath: 'accessToken' });
  },
});

const activeUser = {
  async addActiveUser(activeUser) {
    return (await dbPromise).add(OBJECT_STORE_NAME_ACTIVE_USER, activeUser);
  },

  async getActiveUser() {
    const user = await (await dbPromise).getAll(OBJECT_STORE_NAME_ACTIVE_USER);
    return user[0];
  },

  async delete(accessToken) {
    return (await dbPromise).delete(OBJECT_STORE_NAME_ACTIVE_USER, accessToken);
  }
}

export default activeUser;