import React from 'react';
import useInput from '../hooks/UseInput';
import { savingsMoney } from '../utils/authentication-user';


function AddSavingForm() {
        const [savingsName, setSavingsName] = useInput('');
	const [amount, setAmount] = useInput('');
        const [targetDate, setTargetDate] = useInput('');
        

        const onSubmit = async (event) => {
		event.preventDefault()
                savingsMoney(savingsName, amount, targetDate);
	}

	return (
                <form className="my-5" onSubmit={onSubmit}>
                        <input type="text" className="form-control my-4" placeholder="Name" aria-label="Name" value={savingsName} onChange={setSavingsName}/> 
                        <input type="text" className="form-control my-4" placeholder="Amount target" aria-label="Amount target" value={amount} onChange={setAmount}/>
                        <input className="form-control my-4" type="date" value={targetDate} onChange={setTargetDate}/>
                        <button type="submit" className="btn btn-primary btn-lg form-control btn-color">Add New Savings / Save</button>
                </form>
	);

}

export default AddSavingForm;