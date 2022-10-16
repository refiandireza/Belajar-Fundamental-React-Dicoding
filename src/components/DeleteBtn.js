import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

function DeleteBtn({ id, onDelete, archived }) {
  return (
    <button className="bg-rose-500 dark:bg-zinc-600 rounded-md p-2 text-slate-50 text-3xl" onClick={() => onDelete(id, archived)}><FaTrashAlt /></button>
  );
}

DeleteBtn.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default DeleteBtn;
