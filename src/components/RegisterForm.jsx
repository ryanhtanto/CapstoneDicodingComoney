import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../context/UserContext';
import useInput from '../hooks/UseInput';
import { register } from '../utils/authentication-user';

function RegisterForm() {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [repeatPassword, setRepeatPassword] = useInput('');
  const { setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password === repeatPassword) {
      Swal.showLoading();
      const data = await register(email, password, name);
      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Register Success',
          showConfirmButton: false,
          timer: 1000,
        });
        setUser(data.user);
        navigate('/');
      } else {
        Swal.fire({
          icon: 'error',
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      alert('Password dan Repeat Password Tidak Sama');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input type="text" className="form-control input__height" id="name" placeholder="Name" value={name} onChange={setName} />
      </div>
      <div className="form-group mt-4">
        <input type="email" className="form-control input__height" id="email" placeholder="Email" value={email} onChange={setEmail} />
      </div>
      <div className="form-group mt-4">
        <input type="password" className="form-control input__height" id="password" placeholder="Password" value={password} onChange={setPassword} />
      </div>
      <div className="form-group mt-4">
        <input type="password" className="form-control input__height" id="confirmPassword" placeholder="Confirm Password" value={repeatPassword} onChange={setRepeatPassword} />
      </div>
      <div className="form-group mt-4">
        <button type="submit" className="btn btn-primary btn-color col-12 text-white input__height">
          Sign Up
        </button>
      </div>
      <div className="form-group mt-4">
        <p className="text-center font-color">
          Already have an account?
          {' '}
          <a href="/" className="linkedAuth fw-bold peding">
            Log In
          </a>
        </p>
      </div>
    </form>
  );
}

export default RegisterForm;
