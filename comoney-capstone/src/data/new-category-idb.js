import { openDB } from "idb";
import CONFIG from "../global/config";

const { DATABASE_CATEGORY_NAME, DATABASE_VERSION, OBJECT_STORE_NAME_CATEGORY } = CONFIG;

const dbPromise = openDB(DATABASE_CATEGORY_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME_CATEGORY, { keyPath: 'id' });
  },
});

const newCategoryIdb = {
  async addCategory(detail) {
    return (await dbPromise).add(OBJECT_STORE_NAME_CATEGORY, detail);
  },

  async getAllCategory() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME_CATEGORY)
  },
  async deleteCategory(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME_CATEGORY, id);
  },
}

export default newCategoryIdb;