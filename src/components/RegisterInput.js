import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import DataContext from '../context/DataContext';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const [error, setError] = useState(null);
  const { locale } = useContext(DataContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return setError(true);
    }
    register({
      name,
      email,
      password,
    });
    setError(null);
  };

  const errorMessage = (
    <p className="font-bold text-rose-500 dark:text-slate-50">Password Didn't Match</p>
  );

  return (
    <form className="flex flex-col w-full " onSubmit={onSubmitHandler}>
      <label className="text-xl font-bold mb-2 text-rose-500 dark:text-slate-50" htmlFor="name">User Name</label>
      <input className="mb-4 h-10 p-2 bg-slate-50 dark:focus:text-zinc-600 dark:text-zinc-600 focus:font-bold focus:text-rose-400 text-rose-400 font-bold" type="text" id="name" value={name} onChange={onNameChange} />

      <label className="text-xl font-bold mb-2 text-rose-500 dark:text-slate-50" htmlFor="email">Email</label>
      <input className="mb-4 h-10 p-2 bg-slate-50 dark:focus:text-zinc-600 dark:text-zinc-600 focus:font-bold focus:text-rose-400 text-rose-400 font-bold" type="email" id="email" value={email} onChange={onEmailChange} />

      <label className="text-xl font-bold mb-2 text-rose-500 dark:text-slate-50" htmlFor="password">Password</label>
      <input className="mb-4 h-10 p-2 bg-slate-50 dark:focus:text-zinc-600 dark:text-zinc-600 focus:font-bold focus:text-rose-400 text-rose-400 font-bold" type="password" id="password" value={password} onChange={onPasswordChange} />

      <label className="text-xl font-bold mb-2 text-rose-500 dark:text-slate-50" htmlFor="confirmPassword">{locale === 'id' ? 'Konfirmasi Password' : 'Confirm Password'}</label>
      <input className="mb-4 h-10 p-2 bg-slate-50 dark:focus:text-zinc-600 dark:text-zinc-600 focus:font-bold focus:text-rose-400 text-rose-400 font-bold" type="password" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange} />

      {error ? (errorMessage) : ''}

      <button className="p-3 bg-rose-400 font-bold text-slate-50 mt-4 dark:bg-zinc-500" type="submit">{locale === 'id' ? 'Daftar' : 'Register'}</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
