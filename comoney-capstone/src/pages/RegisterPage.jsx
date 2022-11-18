import React from 'react';
import images from '../assets/images/register.png'
import RegisterForm from '../components/RegisterForm';
import { openDB } from 'idb';
import CONFIG from '../global/config';

function RegisterPage() {
        const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
 
        const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
                upgrade(database) {
                        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'email' });
                },
        });
        async function addUser(user) {
                return (await dbPromise).add(OBJECT_STORE_NAME, user);
        }

        return (
                <section id="register" className='overflow-hidden'>
                        <div className='row'>
                                <article className='col-lg-6 bg-auth'>
                                        <div className='container d-flex flex-column min-vh-100 justify-content-center'>
                                                <h3 className='text-center fw-bold text-white'>On the go!</h3>
                                                <p className='text-center text-white'>Do incredible things anywhere in the world</p>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                        <img src={images} alt="register-image" className='auth-image'/>
                                                </div>
                                        </div>
                                </article>
                                <div className='col-lg-6 d-flex flex-column min-vh-100 justify-content-center px-5 container'>
                                        <h4 className='fw-bold'>Register your account</h4>
                                        <p className='font-color'>Hey, Nice to see you! Please fill your identity</p>
                                        <RegisterForm addUser={addUser}/>
                                </div>
                        </div>
                </section>
        );
}

export default RegisterPage;