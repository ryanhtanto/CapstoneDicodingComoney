import React from 'react';
import Swal from 'sweetalert2';
import useInput from '../hooks/UseInput';
import userContext from '../context/UserContext';
import { login } from '../utils/authentication-user';
import LocaleContext from '../context/LocaleContext';

function LoginForm() {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const { setUser } = React.useContext(userContext);
  const { locale } = React.useContext(LocaleContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    Swal.showLoading();
    const data = await login(email, password);
    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: `${locale === 'en' ? 'Login Success' : 'Masuk Berhasil'}`,
        showConfirmButton: false,
        timer: 1000,
      });
      setUser(data.user || null);
    } else {
      Swal.fire({
        icon: 'error',
        title: `${locale === 'en' ? 'Login Failed' : 'Masuk Gagal'}`,
        text: data.message,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input type="email" className="form-control input__height" id="email" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={setEmail} />
      </div>
      <div className="form-group mt-4">
        <input type="password" className="form-control input__height" id="password" placeholder={locale === 'en' ? 'Password' : 'Kata Kunci'} value={password} onChange={setPassword} />
      </div>
      <div className="form-group mt-4">
        <button type="submit" className="btn btn-primary btn-color col-12 text-white input__height">
          Login
        </button>
      </div>
      <div className="form-group mt-4">
        <p className="text-center font-color">
          {locale === 'en' ? 'Dont have an account?' : 'Tidak mempunyai akun?'}
          {' '}
          <a href="/register" className="linkedAuth fw-bold peding">
            {locale === 'en' ? 'Sign Up' : 'Daftar'}
          </a>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
