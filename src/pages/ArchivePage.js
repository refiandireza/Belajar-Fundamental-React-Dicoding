import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/network-data';
import InnerLoading from '../components/InnerLoading';
import DataContext from '../context/DataContext';

function ArchivePage({ keyword, keywordChange }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { locale } = useContext(DataContext);

  useEffect(() => {
    const getNote = async () => {
      const { data } = await getArchivedNotes();
      setNotes(data);
      setLoading(false);
    };

    getNote();
  }, []);

  const notesFilter = notes.filter((note) => note.title.toLowerCase().includes(
    keyword.toLowerCase(),
  ));

  if (loading) {
    return <InnerLoading />;
  }

  return (
    <div className="home-page">
      <SearchBar keyword={keyword} keywordChange={keywordChange} />
      <h2 className="font-bold text-2xl text-rose-500 dark:text-zinc-50 mt- md:text-4xl mt-5">{locale === 'id' ? 'Arsip Catatan Kamu' : 'Your Archive Note\'s'}</h2>
      <NoteList notes={notesFilter} />
    </div>
  );
}

ArchivePage.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePage;
