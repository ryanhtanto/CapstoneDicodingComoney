import React, { useState } from "react";
import SavingPlanItem from "./SavingPlanItem";
import LocaleContext from "../context/LocaleContext";
import { getAllSavings, deleteSavings } from '../utils/savings';
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SavingPlan() {
  const [savings, setSavings] = useState();
  const [loading, setLoading] = useState(true);
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();
  React.useEffect(function () {
    async function getData() {
      const valueFromDb = await getAllSavings(user.uid);
      if(valueFromDb.length !== 0){
        setSavings(valueFromDb);
        setLoading(false)
      }else{
        setLoading(true)
      }
    }
    getData()
  }, []);

  async function onDeleteHandler(id) {
    const deleteHandler = await deleteSavings(id, user.uid);
    const valueFromDb = await getAllSavings(user.uid);
    setSavings(valueFromDb);
    if (deleteHandler.success) {
      Swal.fire({
        icon: 'success',
        title: 'Delete Saving Plan Success',
        showConfirmButton: false,
        timer: 2000
      })
      setSavings(valueFromDb);
      navigate('/saving-planner');
      window.location.reload();
    } else {
      Swal.fire({
        icon: 'error',
        title: deleteHandler.message,
        showConfirmButton: false,
        timer: 2000
      })
    }
    
  }

  if (loading === false) {
    return savings.map((saving) => {
      return (
        <div className="col-sm-6 mb-3" key={saving.id}>
          <SavingPlanItem saving={saving} onDelete={onDeleteHandler} />
        </div>
      );
    });
  } else {
    return <h4 className="text-center fw-bold"> {locale === "en" ? "You don't have savings item" : "Anda tidak memiliki item tabungan"}</h4>;
  }
}

export default SavingPlan;
