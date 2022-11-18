/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import images from '../assets/images/login.jpeg'
import LoginForm from '../components/LoginForm';


function LoginPage() {
        return (
                <section id="login" className='overflow-hidden'>
                        <div className='row'>
                                <article className='col-lg-6 bg-auth'>
                                        <div className='container d-flex flex-column min-vh-100 justify-content-center'>
                                                <h3 className='text-center fw-bold text-white'>Track your money!</h3>
                                                <p className='text-center text-white'>Do all that in just one simple app</p>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                        <img src={images} alt="login-image" className='auth-image'/>
                                                </div>
                                        </div>
                                </article>
                                <div className='col-lg-6 d-flex flex-column min-vh-100 justify-content-center px-5 container'>
                                        <h4 className='fw-bold'>Log In</h4>
                                        <p className='font-color'>Welcome back! Please enter your account</p>
                                        <LoginForm />
                                </div>
                        </div>
                </section>
        );
}

export default LoginPage;