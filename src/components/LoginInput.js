import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <form className="flex flex-col w-full " onSubmit={onSubmitHandler}>
      <label className="text-xl font-bold mb-2 text-rose-500 dark:text-slate-50" htmlFor="email">Email</label>
      <input className="mb-4 h-10 p-2 bg-slate-50 dark:focus:text-zinc-600 dark:text-zinc-600 focus:font-bold focus:text-rose-400 text-rose-400 font-bold" type="email" id="email" value={email} onChange={onEmailChange} />

      <label className="text-xl font-bold mb-2 text-rose-500 dark:text-slate-50" htmlFor="password">Password</label>
      <input className="mb-4 h-10 p-2 bg-slate-50 dark:focus:text-zinc-600 dark:text-zinc-600 focus:font-bold focus:text-rose-400 text-rose-400 font-bold" type="password" id="password" value={password} onChange={onPasswordChange} />

      {/* {error ? (errorMessage) : ''} */}

      <button className="p-3 bg-rose-400 font-bold text-slate-50 mt-4 dark:bg-zinc-500" type="submit">Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
