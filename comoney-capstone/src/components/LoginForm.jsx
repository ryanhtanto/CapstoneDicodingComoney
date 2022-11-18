import React from 'react';
import userIdb from '../data/user-idb';
import useInput from '../hooks/UseInput';
import userContext from '../context/UserContext';
import activeUser from '../data/active-user';

function LoginForm() {
	const [email, setEmail] = useInput('');
	const [password, setPassword] = useInput('');
	const { setUser } = React.useContext(userContext);

	const onSubmit = async (event) => {
		event.preventDefault()
		const test = await userIdb.getUser(email, password);
		setUser(test);
	}

	return (
		<form onSubmit={onSubmit}>
			<div className="form-group">
				<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Email' value={email} onChange={setEmail} />
			</div>
			<div className="form-group mt-4">
				<input type="password" className="form-control" id="password" placeholder='Password' value={password} onChange={setPassword} />
			</div>
			<div className="form-group mt-4">
				<button type="submit" className="btn btn-primary btn-color col-12 text-white">Login</button>
			</div>
			<div className="form-group mt-4">
				<p className='text-center font-color'>Don't have an account?   <a href="/register" className='linkedAuth fw-bold'>Sign Up</a></p>
			</div>
		</form>
	);

}

export default LoginForm;