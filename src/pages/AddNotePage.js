import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NoteInput from '../components/NoteInput';
import DataContext from '../context/DataContext';

function AddNotePage({ addNote }) {
  const { locale } = useContext(DataContext);
  return (
    <div className="add-page mt-3">
      <h3 className="text-rose-400 font-bold text-2xl mb-4 dark:text-slate-50">{locale === 'id' ? 'Tambahkan Catatan Baru' : 'Add New Note'}</h3>
      <NoteInput addNote={addNote} />
    </div>
  );
}

AddNotePage.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default AddNotePage;
