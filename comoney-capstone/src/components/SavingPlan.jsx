import React,  { useState }  from "react";
import savingMoneyIdb from '../data/saving-money-idb';
import SavingPlanItem from "./SavingPlanItem";

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

  if(loading === false){
    return(
      savings.map((saving) => {
        return(
          <div className='col-sm-6 mb-3'>
            <SavingPlanItem saving = {saving} onDelete = {onDeleteHandler}/>
          </div>
        ) 
      })
    )
  }
  
}

export default SavingPlan;