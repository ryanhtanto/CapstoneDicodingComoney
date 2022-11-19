import React from 'react';
import images from '../assets/books.png'
import savings from '../assets/images/saving-item.png'
import { Link } from 'react-router-dom';
import { FiCalendar, FiCheckSquare, FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import savingMoneyIdb from '../data/saving-money-idb';

function SavingPlanner() {
        const savingAllList = savingMoneyIdb.FavoriteRestaurantIdb();
        return (
                <section>
                        <div className='container'> 
                                <div className='row bg-saving-color p-4 mt-5 mb-5 w-75 mx-auto'>
                                        <div className='col-sm-6 px-4'>
                                                <div className='d-flex'>
                                                        <img src={images} alt="icon-savings" className='saving-image' srcset="" />
                                                        <div className='mx-4 my-auto'>
                                                                <p className='fw-bold mb-0'>You have 2 savings target!</p>
                                                                <p>Total Rp 350.000.000</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='col-sm-6 px-4 my-auto'>
                                                <p className='text-center mx-auto'> “ Some daily quoute to booost your motivation to reach target ” bisa pake quotes API</p>
                                        </div>
                                </div>
                                <div className='row mt-5 mb-5 w-75 mx-auto'>
                                        <div className='col-sm-6'>
                                                <div className="card">
                                                        <div className='d-flex'>
                                                                <div className='my-auto'>
                                                                        <img src={savings} alt="icon-saving-item" className='saving-image-item' srcset="" />
                                                                </div>
                                                                <div className="card-body">
                                                                        <h6 className="card-title fw-bold">House at Kota Baru Parahyangan</h6>
                                                                        <span className="savings-planning p-2">Rp 300.000.000</span>
                                                                        <h6 className='mt-2'><FiCalendar /><span className='mx-2'>Target 20 November 2022</span></h6>
                                                                        <h6 className='mt-2'><FiCheckSquare /><span className='mx-2'>Spend Rp 1.000.000 / month</span></h6>
                                                                        <button type="button" class="btn btn-warning"><FiEdit /></button>
                                                                        <button type="button" class="btn btn-danger mx-2"><FiTrash2 /></button>
                                                                </div>
                                                        </div>   
                                                </div>
                                        </div>
                                </div>
                                <Link to={`/add-saving-plan`}>
                                        <button aria-label="add savings" id="addButton" class="addButton">
                                                <FiPlus />
                                        </button>
                                </Link>
                        </div>
                </section>
        );
}

export default SavingPlanner;