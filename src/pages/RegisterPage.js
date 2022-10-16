import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import DataContext from '../context/DataContext';
import { register } from '../utils/network-data';

function RegisterPage() {
  const navigate = useNavigate();
  const { locale } = useContext(DataContext);
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-xl mt-10 border-2 border-rose-300 p-10 rounded-md dark:border-slate-50">
        <h2 className="text-center font-bold text-4xl mb-6 text-rose-500 dark:text-slate-50">{locale === 'id' ? 'Daftarkan Akun Kamu' : 'Register your account'}</h2>
        <RegisterInput register={onRegisterHandler} />
        <p className="font-bold text-rose-500 mt-6 dark:text-slate-50">
          {locale === 'id' ? 'Sudah punya akun? ' : 'Already have an account? '}
          <Link className="underline underline-offset-4" to="/">{locale === 'id' ? 'Login Disini' : 'Login here'}</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
