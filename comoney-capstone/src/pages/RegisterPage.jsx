import React from 'react';
import images from '../assets/images/register.png'
function RegisterPage() {
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
                                        <form>
                                                <div className="form-group">
                                                        <input type="text" className="form-control" id="name" placeholder='Name'/>
                                                </div>
                                                <div className="form-group mt-4">
                                                        <input type="email" className="form-control" id="email" placeholder='Email'/>
                                                </div>
                                                <div className="form-group mt-4">  
                                                        <input type="password" className="form-control" id="password" placeholder='Password'/>
                                                </div>
                                                <div className="form-group mt-4">  
                                                        <input type="password" className="form-control" id="confirmPassword" placeholder='Confirm Password'/>
                                                </div>
                                                <div className="form-group mt-4">  
                                                        <button type="button" className="btn btn-primary btn-color col-12 text-white">Login</button>
                                                </div>
                                                
                                                <div className="form-group mt-4">  
                                                        <p className='text-center font-color'>Already have an account?   <a href="/" className='linkedAuth fw-bold'>Log In</a></p>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </section>
        );
}

export default RegisterPage;