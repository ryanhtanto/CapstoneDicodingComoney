import { openDB } from "idb";
import CONFIG from "../global/config";

const { DATABASE_FINANCIAL_DATA_NAME, DATABASE_VERSION, OBJECT_STORE_NAME_FINANCIAL_DATA } = CONFIG;

const dbPromise = openDB(DATABASE_FINANCIAL_DATA_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME_FINANCIAL_DATA, { keyPath: 'id' });
  },
});

const financialData = {
  async addFinancialData(financialData) {
    return (await dbPromise).add(OBJECT_STORE_NAME_FINANCIAL_DATA, financialData);
  },

  async getFinancialData(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME_FINANCIAL_DATA, id);
  },

  async delete(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME_FINANCIAL_DATA, id);
  },
};

export default financialData;
