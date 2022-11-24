import React, { useState } from "react";
import savingMoneyIdb from '../data/saving-money-idb';
import { getActiveUser } from "../utils/authentication-user";
import SavingPlanItem from "./SavingPlanItem";
function SavingPlan() {

  const [savings, setSavings] = useState();
  const [loading, setLoading] = useState(true);

  React.useEffect(function () {
    async function getData() {
      const valueFromDb = await savingMoneyIdb.getAllSavingsMoney();
      const userData = await getActiveUser();
      for (let i = 0; i < valueFromDb.length; i++) {
        if (valueFromDb[i].accessToken === userData.accessToken) {
          setSavings(valueFromDb);
          setLoading(false)
        } else {
          setLoading(true)
        }
      }
    }
    getData()
  }, []);

  async function onDeleteHandler(id) {
    await savingMoneyIdb.deleteSavingsMoney(id);
    const valueFromDb = await savingMoneyIdb.getAllSavingsMoney();
    setSavings(valueFromDb);
  }

  if (loading === false) {
    return (
      savings.map((saving) => {
        return (
          <div className='col-sm-6 mb-3'>
            <SavingPlanItem saving={saving} onDelete={onDeleteHandler} />
          </div>
        )
      })
    )
  } else {
    return (
      <h4 className="text-center fw-bold">You don't have savings item</h4>
    )
  }

}

export default SavingPlan;