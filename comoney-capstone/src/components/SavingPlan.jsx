import React,  { useState }  from "react";
import savingMoneyIdb from '../data/saving-money-idb';
import SavingPlanItem from "./SavingPlanItem";
import userContext from '../context/UserContext';
import { editSavingsMoney, getActiveSavings } from "../utils/authentication-user";
import EditSavingsForm from "./EditSavingsForm";

function SavingPlan() {

  const [ savings, setSavings ] = useState();
  const [ loading, setLoading ] = useState(true);

  React.useEffect(function(){
    async function getData(){
      const valueFromDb = await savingMoneyIdb.getAllSavingsMoney();
      setSavings( valueFromDb );
      setLoading(false)
    }
    getData()
  },[]);

  async function onDeleteHandler(id) {
    await savingMoneyIdb.deleteSavingsMoney(id);
    const valueFromDb = await savingMoneyIdb.getAllSavingsMoney();
    setSavings( valueFromDb );
  }

  async function onEditHandler(id) {
    console.log(id)
  }

  if(loading === false){
    return(
      savings.map((saving) => {
        return(
          <div className='col-sm-6 mb-3'>
            <SavingPlanItem saving = {saving} onDelete = {onDeleteHandler} onEdit={onEditHandler}/>
          </div>
        ) 
      })
    )
  }
  
}

export default SavingPlan;