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
  }
}

export default savingMoneyIdb;