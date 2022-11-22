import React,  { useState }  from "react";
import savingMoneyIdb from '../data/saving-money-idb';
import activeUser from "../data/active-user";

function SavingBarCount() {

  const [ target, setTarget ] = useState();
  const [ total, setTotal ] = useState();
  const [ loading, setLoading ] = useState(true);

  React.useEffect(function(){
    async function getData(){
      const valueFromDb = await savingMoneyIdb.getAllSavingsMoney();
      const userData = await activeUser.getActiveUser();
      for(let  i = 0; i < valueFromDb.length; i++){
        if(valueFromDb[i].accessToken === userData.accessToken){
                setTarget(valueFromDb.length)
                console.count(valueFromDb[i].data.amount)
                setLoading(false)
        }else{
                setLoading(true)
        }
      }
    }
    getData()
  },[]);

  if(loading === false){
        return(
                <div className='mx-4 my-auto'>
                        <p className='fw-bold mb-0'>You have {target} savings target!</p>
                        <p>Total Rp {total}</p>
                </div>
        )
  }else{
        return(
                <div className='mx-4 my-auto'>
                        <p className='fw-bold mb-0'>You  don't have savings target!</p>
                        <p>Go on! Make your target</p>
                </div>
        )
  }
}

export default SavingBarCount;