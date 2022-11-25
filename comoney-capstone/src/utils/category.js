import newCategoryIdb from "../data/new-category-idb";
import { getActiveUser } from "./authentication-user";

const addCategory = async (categoryName) => {
  const user = await getActiveUser();
  await newCategoryIdb.addCategory({
    accessToken: user.accessToken,
    id: +new Date(),
    data:
      categoryName,
  })
}

export default addCategory;
