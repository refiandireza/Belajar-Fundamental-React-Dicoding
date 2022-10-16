import React from 'react';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import PropTypes from 'prop-types';

function ArchiveBtn({
  id, onArchive, onUnarchive, archived,
}) {
  const archiveBtnHandler = (
    <button className="bg-rose-500 rounded-md p-2 text-slate-50 text-3xl dark:bg-zinc-600" onClick={() => onArchive(id)}>
      {' '}
      <BsBookmark />
    </button>
  );

  const unarchiveBtnHandler = (
    <button className="bg-rose-500 rounded-md p-2 text-slate-50 text-3xl dark:bg-zinc-600" onClick={() => onUnarchive(id)}><BsBookmarkFill /></button>
  );

  return (
    <>
      {archived ? unarchiveBtnHandler : archiveBtnHandler}
    </>

  );
}

ArchiveBtn.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default ArchiveBtn;
