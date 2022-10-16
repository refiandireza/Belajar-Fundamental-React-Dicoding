import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaCalendarDay } from 'react-icons/fa';
import parser from 'html-react-parser';
import { showFormattedDate } from '../utils';

function NoteItem({
  id, title, body, createdAt,
}) {
  return (
    <div id={id} className="bg-rose-50 p-3 shadow-md rounded-md text-rose-500 dark:bg-zinc-50 dark:text-zinc-900 flex flex-col">
      <h3 className="text-xl font-bold">
        <Link className="hover:text-2xl transition-all" to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="my-2 grow">{parser(body)}</p>
      <p className="font-bold text-sm flex flex-row items-center gap-x-2">
        <FaCalendarDay />
        {showFormattedDate(createdAt)}
      </p>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
