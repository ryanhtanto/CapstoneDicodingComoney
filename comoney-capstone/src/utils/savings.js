import savingMoneyIdb from "../data/saving-money-idb";
import { getActiveUser } from "./authentication-user";

const savingsMoney = async (savingsName, amount, targetDate) => {
  const user = await getActiveUser();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;

  await savingMoneyIdb.addSavings({
    accessToken: user.accessToken,
    id: +new Date(),
    data: {
      savingsName,
      amount,
      targetDate,
      currentDate,
    }
  });
};

const editSavingsMoney = async (getId, savingsName, amount, targetDate) => {
  const user = await getActiveUser();
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;
  const parseId = JSON.stringify(getId)
  const jsonParse = JSON.parse(parseId);

  await savingMoneyIdb.editSavingsMoney({
    accessToken: user.accessToken,
    id: parseFloat(jsonParse.getId),
    data: {
      savingsName,
      amount,
      targetDate,
      currentDate,
    }
  });
};

export { savingsMoney, editSavingsMoney }
