import React from 'react';
import userIdb from '../data/user-idb';
import useInput from '../hooks/UseInput';

function RegisterForm() {
	const [name, setName] = useInput('');
	const [email, setEmail] = useInput('');
	const [password, setPassword] = useInput('');
	const [repeatPassword, setRepeatPassword] = useInput('');

	const onSubmit = (event) => {
		event.preventDefault()
		if (password === repeatPassword) {
			userIdb.addUser({
				email,
				password,
				data: {
					name,
					accessToken: +new Date(),
				}
			});
		}
	}

	return (
		<form onSubmit={onSubmit}>
			<div className="form-group">
				<input type="text" className="form-control" id="name" placeholder='Name' value={name} onChange={setName} />
			</div>
			<div className="form-group mt-4">
				<input type="email" className="form-control" id="email" placeholder='Email' value={email} onChange={setEmail} />
			</div>
			<div className="form-group mt-4">
				<input type="password" className="form-control" id="password" placeholder='Password' value={password} onChange={setPassword} />
			</div>
			<div className="form-group mt-4">
				<input type="password" className="form-control" id="confirmPassword" placeholder='Confirm Password' value={repeatPassword} onChange={setRepeatPassword} />
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

export default RegisterForm;