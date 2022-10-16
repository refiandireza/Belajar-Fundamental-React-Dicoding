import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';
import DeleteBtn from './DeleteBtn';
import ArchiveBtn from './ArchiveBtn';

function NoteDetail({
  id, title, body, createdAt, archived, onDelete, onArchive, onUnarchive,
}) {
  return (
    <div className="mt-5">
      <h3 className="text-rose-400 font-bold text-5xl dark:text-slate-50">{title}</h3>
      <p className="text-rose-400 dark:text-slate-50 mt-2">{showFormattedDate(createdAt)}</p>
      <p className="text-rose-400 text-xl mt-4 dark:text-slate-50">{body}</p>
      <div className="flex justify-start gap-x-4 mt-5">
        <ArchiveBtn id={id} archived={archived} onArchive={onArchive} onUnarchive={onUnarchive} />

        <DeleteBtn id={id} onDelete={onDelete} archived={archived} />
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default NoteDetail;
