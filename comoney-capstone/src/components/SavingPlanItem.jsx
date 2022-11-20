import React from "react";
import { FiCalendar, FiCheckSquare, FiEdit } from 'react-icons/fi';
import { Link } from "react-router-dom";
import savings from '../assets/images/saving-item.png'
import DeleteSavings from "./DeleteSavings";
import EditSavingButton from "./EditSavingButton";

function SavingPlanItem({saving, onDelete, onEdit }) {
        const nowDate = new Date(saving.data.currentDate);
        const targetDate = new Date(saving.data.targetDate);
        const Difference_In_Time = targetDate.getTime() - nowDate.getTime();
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 *24);
        const Difference_In_Month = Difference_In_Days / 30

        const goalsDate = new Date(saving.data.targetDate)
        const date = goalsDate.toDateString()
        
        const spend = saving.data.amount / Difference_In_Month
        const rounded = Math.round(spend)

        return(
                <div className="card">
                        <div className='d-flex'>
                                <div className='my-auto'>
                                        <img src={savings} alt="icon-saving-item" className='saving-image-item' srcset="" />
                                </div>
                                <div className="card-body">
                                        <h6 className="card-title fw-bold">{saving.data.savingsName}</h6>
                                        <span className="savings-planning p-2">Rp {saving.data.amount}</span>
                                        <h6 className='mt-2'><FiCalendar /><span className='mx-2'>Target: {date}</span></h6>
                                        <h6 className='mt-2'><FiCheckSquare /><span className='mx-2'>Spend Rp {rounded} / month</span></h6>
                                        <Link to={`/edit-saving-plan`}>
                                                <EditSavingButton id={saving.id} onEdit={onEdit}/>
                                        </Link>
                                        <DeleteSavings id={saving.id} onDelete={onDelete} />
                                </div>
                        </div>   
                </div>
        )
}

export default SavingPlanItem;