import { openDB } from "idb";
import CONFIG from "../global/config";

const { DATABASE_SAVINGS_NAME, DATABASE_VERSION, OBJECT_STORE_NAME_SAVINGS } = CONFIG;

const dbPromise = openDB(DATABASE_SAVINGS_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME_SAVINGS, { keyPath: 'id' });
  },
});

const savingMoneyIdb = {
  async addSavings(detail) {
    return (await dbPromise).add(OBJECT_STORE_NAME_SAVINGS, detail);
  },
  async getAllSavingsMoney() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME_SAVINGS)
  },
  async deleteSavingsMoney(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME_SAVINGS, id);
  },
  async editSavingsMoney(detail) {
    return (await dbPromise).put(OBJECT_STORE_NAME_SAVINGS, detail);
  },
}

export default savingMoneyIdb;