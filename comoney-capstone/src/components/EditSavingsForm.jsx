import React from 'react';
import useInput from '../hooks/UseInput';
import { editSavingsMoney, getSavings } from '../utils/savings';
import LocaleContext from '../context/LocaleContext';
import UserContext from "../context/UserContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function EditSavingsForm(getId) {
        const [selectedSaving, setSelectedSaving] = React.useState('')
        const [savingsName, setSavingsName, setDefaultName] = useInput('');
        const [amount, setAmount, setDefaultAmount] = useInput('');
        const [targetDate, setTargetDate, setDefaultTarget] = useInput('');
        const { locale } = React.useContext(LocaleContext);
        const { user } = React.useContext(UserContext);
        const navigate = useNavigate();

        React.useEffect(function () {
                async function selectedSavings() {
                        const parseId = JSON.stringify(getId)
                        const jsonParse = JSON.parse(parseId);
                        const detail = await getSavings(user.uid, parseFloat(jsonParse.getId))
                        setSelectedSaving({
                                name: detail.data.savingsName,
                                amount: detail.data.amount,
                                targetDate: detail.data.targetDate,
                        })

                        setDefaultName(detail.data.savingsName);
                        setDefaultAmount(detail.data.amount);
                        setDefaultTarget(detail.data.targetDate)
                }
                selectedSavings()
        }, []);

        const onSubmit = async (event) => {
                event.preventDefault()
                const parseId = JSON.stringify(getId)
                const jsonParse = JSON.parse(parseId);
                const detail = await getSavings(user.uid, parseFloat(jsonParse.getId))
                const edit = await editSavingsMoney(
                        detail.id, 
                        savingsName, 
                        amount, 
                        targetDate, 
                        detail.data.currentDate, 
                        user.uid
                )
                if (edit.success) {
                        Swal.fire({
                          icon: 'success',
                          title: 'Edit Saving Plan Success',
                          showConfirmButton: false,
                          timer: 1000
                        })
                        navigate('/saving-planner');
                } else {
                        Swal.fire({
                          icon: 'error',
                          title: edit.message,
                          showConfirmButton: false,
                          timer: 1000
                        })
                }
                
        }

        return (
                <form className="my-5" onSubmit={onSubmit}>
                        <input type="text" className="form-control my-4" placeholder="Name" aria-label="Name" value={savingsName || selectedSaving.name} onChange={setSavingsName} />
                        <input type="text" className="form-control my-4" placeholder="Amount target" aria-label="Amount target" value={amount || selectedSaving.amount} onChange={setAmount} />
                        <input className="form-control my-4" type="date" value={targetDate || selectedSaving.targetDate} onChange={setTargetDate} />
                        <button type="submit" className="btn btn-primary btn-lg form-control btn-color">{locale === "en" ? "Edit your Savings" : "Edit Tabungan Anda"}</button>
                </form>
        );

}

export default EditSavingsForm;