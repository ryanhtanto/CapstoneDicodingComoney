import React from 'react';
import useInput from '../hooks/UseInput';
import { addSavingsMoney } from '../utils/savings';
import LocaleContext from '../context/LocaleContext';
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Swal from "sweetalert2";

function AddSavingForm() {
        const [savingsName, setSavingsName] = useInput('');
        const [amount, setAmount] = useInput('');
        const [targetDate, setTargetDate] = useInput('');
        const { locale } = React.useContext(LocaleContext);
        const { user } = React.useContext(UserContext);
        const navigate = useNavigate();

        const onSubmit = async (event) => {
                event.preventDefault()
                const getTrueTargetDate = new Date();
                const currentDate = (getTrueTargetDate.toISOString())
                const parseCurrentDate = currentDate.substring(0, 7)
                if(savingsName === '' || amount === '' || savingsName === 0 || amount === 0){
                        Swal.fire({
                                icon: 'warning',
                                title: 'Please fill all your information',
                                showConfirmButton: false,
                                timer: 1000
                        })
                }else{
                        if(parseCurrentDate < targetDate){
                                const savingsDetail = await addSavingsMoney(
                                        savingsName,
                                        amount,
                                        targetDate,
                                        user.uid
                                )
                                if (savingsDetail.success) {
                                        Swal.fire({
                                          icon: 'success',
                                          title: 'Add Saving Plan Success',
                                          showConfirmButton: false,
                                          timer: 1000
                                        })
                                        navigate('/saving-planner');
                                }
                        }else{
                                Swal.fire({
                                        icon: 'error',
                                        title: 'Your target date is before current date',
                                        showConfirmButton: false,
                                        timer: 2000
                                })
                        }
                }
        }

        return (
                <form className="my-5" onSubmit={onSubmit}>
                        <input type="text" className="form-control my-4" placeholder={locale === "en" ? "Savings Name" : "Nama Tabungan"} aria-label={locale === "en" ? "Savings Name" : "Nama Tabungan"} value={savingsName} onChange={setSavingsName} />
                        <input type="number" className="form-control my-4" placeholder={locale === "en" ? "Amount Target" : "Jumlah Target"} aria-label={locale === "en" ? "Amount Target" : "Jumlah Target"} value={amount} onChange={setAmount} />
                        <input type="month" className="form-control my-4" value={targetDate} onChange={setTargetDate} />
                        <button type="submit" className="btn btn-primary btn-lg form-control btn-color">{locale === "en" ? "Add New Savings" : "Tambahkan Tabungan Baru"}</button>
                </form>
        );

}

export default AddSavingForm;