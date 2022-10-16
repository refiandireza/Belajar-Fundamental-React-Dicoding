import React from 'react';
import PropTypes, { object } from 'prop-types';
import Empty from './Empty';
import NoteItemBody from './NoteItemBody';

function NoteList({ notes }) {
  if (!notes.length) {
    return <Empty />;
  }
  return (
    <div className="mt-2">
      <NoteItemBody notes={notes} />
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(object).isRequired,
};

export default NoteList;
