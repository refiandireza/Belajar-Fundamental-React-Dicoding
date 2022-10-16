import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getNote } from '../utils/network-data';
import NoteDetail from '../components/NoteDetail';
import NotFoundPage from './NotFoundPage';
import InnerLoading from '../components/InnerLoading';

function DetailPage({ onDelete, onArchive, onUnarchive }) {
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getDetail = async (id) => {
      const { data } = await getNote(id);
      setNote(data);
      setLoading(false);
    };

    getDetail(id);
  }, [id]);

  if (note === null) {
    return (
      <NotFoundPage />
    );
  }

  if (loading) {
    return (
      <InnerLoading />
    );
  }

  return (
    <NoteDetail {...note} onDelete={onDelete} onArchive={onArchive} onUnarchive={onUnarchive} />
  );
}

DetailPage.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default DetailPage;
