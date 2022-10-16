import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import DataContext from '../context/DataContext';

function LoginPage({ loginSuccess }) {
  const { locale } = useContext(DataContext);
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-xl mt-10 border-2 border-rose-300 p-10 rounded-md dark:border-slate-50">
        <h2 className="text-center font-bold text-4xl mb-6 text-rose-500 dark:text-slate-50">{locale === 'id' ? 'Log In ke akun kamu' : 'Log In Your Account'}</h2>
        <LoginInput login={onLogin} />
        <p className="font-bold text-rose-500 mt-6 dark:text-slate-50">
          {locale === 'id' ? 'Belum Punya Akun ? ' : 'Dont have an account ? '}
          <Link className="underline underline-offset-4" to="/register">{locale === 'id' ? 'Daftar Disini' : 'Register Here'}</Link>
        </p>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
