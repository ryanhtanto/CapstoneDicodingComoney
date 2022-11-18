import React from 'react';

class RegisterForm extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        name: '',
                        email: '',
                        password: '',
                }
              
                this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
                this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
                this.onPasswordChangeEventHandler = this.onPasswordChangeEventHandler.bind(this);
                this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        }
        onNameChangeEventHandler(event) {
                this.setState(() => {
                        return {
                                name: event.target.value,
                        }
                });
        }
              
        onEmailChangeEventHandler(event) {
                this.setState(() => {
                        return {
                                email: event.target.value,
                        }
                });
        }
        onPasswordChangeEventHandler(event) {
                this.setState(() => {
                        return {
                                password: event.target.value,
                        }
                });
        }
              
        onSubmitEventHandler(event) {
                event.preventDefault();
                this.props.addUser(this.state);
        }

        render() {
                return (
                        
                        <form onSubmit={this.onSubmitEventHandler}>
                                <div className="form-group">
                                        <input type="text" className="form-control" id="name" placeholder='Name' value={this.state.name} onChange={this.onNameChangeEventHandler}/>
                                </div>
                                <div className="form-group mt-4">
                                        <input type="email" className="form-control" id="email" placeholder='Email' value={this.state.email} onChange={this.onEmailChangeEventHandler}/>
                                </div>
                                <div className="form-group mt-4">  
                                        <input type="password" className="form-control" id="password" placeholder='Password' value={this.state.password} onChange={this.onPasswordChangeEventHandler}/>
                                </div>
                                <div className="form-group mt-4">  
                                        <input type="password" className="form-control" id="confirmPassword" placeholder='Confirm Password'/>
                                </div>
                                <div className="form-group mt-4">  
                                        <button type="submit" className="btn btn-primary btn-color col-12 text-white">Sign Up</button>
                                </div>
                                <div className="form-group mt-4">  
                                        <p className='text-center font-color'>Already have an account?   <a href="/" className='linkedAuth fw-bold'>Log In</a></p>
                                </div>
                        </form>
                );
        }
}

export default RegisterForm;