import React from 'react';
import PropTypes, { object } from 'prop-types';
import NoteItem from './NoteItem';

function NoteItemBody({ notes }) {
  return (
    <div className="mt-5 grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-4">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>

  );
}

NoteItemBody.propTypes = {
  notes: PropTypes.arrayOf(object).isRequired,
};

export default NoteItemBody;
