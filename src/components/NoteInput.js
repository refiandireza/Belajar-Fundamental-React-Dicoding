import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from '../context/DataContext';

function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { locale } = useContext(DataContext);

  const ontitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChange = (event) => {
    setBody(event.target.innerHTML);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addNote(title, body);
  };

  return (
    <form onSubmit={onSubmit}>
      <input className="bg-slate-50 w-full p-2 mb-5 text-rose-400 font-bold placeholder:text-rose-400 placeholder:font-bold focus:font-bold focus:text-rose-400 dark:placeholder:text-zinc-500 dark:focus:text-zinc-600 dark:text-zinc-600" type="text" placeholder={locale === 'id' ? 'Masukkan Judul' : 'Input Title'} value={title} onChange={ontitleChange} />

      <div className="bg-slate-50 h-48 p-2 font-bold text-rose-400 focus:text-rose-400 dark:placeholder:text-zinc-500 dark:focus:text-zinc-600 dark:text-zinc-600" contentEditable data-placeholder={locale === 'id' ? 'Masukkan Catatan' : 'Input Your Note'} onInput={onBodyChange} />

      <button type="submit" className="p-3 bg-rose-400 font-bold text-slate-50 mt-4 dark:bg-zinc-500">Submit</button>
    </form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
