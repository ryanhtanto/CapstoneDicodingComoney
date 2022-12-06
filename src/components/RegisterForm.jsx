import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import LocaleContext from '../context/LocaleContext';
import UserContext from '../context/UserContext';
import useInput from '../hooks/useInput';
import { register } from '../utils/authentication-user';

function RegisterForm() {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [repeatPassword, setRepeatPassword] = useInput('');
  const { locale } = React.useContext(LocaleContext);
  const { setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    const element = document.querySelector('nav');
    element.classList.add('d-none');
  }, []);

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
          title: `${locale === 'en' ? 'Register Failed' : 'Pendaftaran Gagal'}`,
          text: `${data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: `${locale === 'en' ? 'Password and Repeat Password Different' : 'Kata Kunci dan Konfirmasi Kata Kunci Berbeda'}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input type="text" className="form-control input__height" id="name" placeholder={locale === 'en' ? 'Name' : 'Nama'} value={name} onChange={setName} />
      </div>
      <div className="form-group mt-4">
        <input type="email" className="form-control input__height" id="email" placeholder="Email" value={email} onChange={setEmail} />
      </div>
      <div className="form-group mt-4">
        <input type="password" className="form-control input__height" id="password" placeholder={locale === 'en' ? 'Password' : 'Kata Kunci'} value={password} onChange={setPassword} />
      </div>
      <div className="form-group mt-4">
        <input type="password" className="form-control input__height" id="confirmPassword" placeholder={locale === 'en' ? 'Confirm Password' : 'Konfirmasi Kata Kunci'} value={repeatPassword} onChange={setRepeatPassword} />
      </div>
      <div className="form-group mt-4">
        <button type="submit" className="btn btn-primary btn-color col-12 text-white input__height">
          {locale === 'en' ? 'Sign Up' : 'Daftar'}
        </button>
      </div>
      <div className="form-group mt-4">
        <p className="text-center font-color">
          {locale === 'en' ? 'Already have an account?' : 'Sudah mempunyai akun?'}
          {' '}
          <a href="/" className="linkedAuth fw-bold peding">
            {locale === 'en' ? 'Log In' : 'Masuk'}
          </a>
        </p>
      </div>
    </form>
  );
}

export default RegisterForm;
