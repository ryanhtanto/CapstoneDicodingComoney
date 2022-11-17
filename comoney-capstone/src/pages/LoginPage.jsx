/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import images from '../assets/images/login.jpeg'
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
                                        <form>
                                                <div className="form-group">
                                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Email'/>
                                                </div>
                                                <div className="form-group mt-4">  
                                                        <input type="password" className="form-control" id="password" placeholder='Password'/>
                                                </div>
                                                <div className="form-group mt-4">  
                                                        <button type="button" className="btn btn-color col-12 text-white">Login</button>
                                                </div>
                                                <div className="form-group mt-4">  
                                                        <p className='text-center font-color'>Don't have an account?   <a href="/register" className='linkedAuth fw-bold'>Sign Up</a></p>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </section>
        );
}

export default LoginPage;