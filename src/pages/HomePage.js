import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/network-data';
import AddBtn from '../components/AddBtn';
import InnerLoading from '../components/InnerLoading';
import { DataConsumer } from '../context/DataContext';

function HomePage({ keyword, keywordChange }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNote = async () => {
      const { data } = await getActiveNotes();
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
    <DataConsumer>
      {
                ({ locale }) => (
                  <div className="home-page">
                    <SearchBar keyword={keyword} keywordChange={keywordChange} />
                    <AddBtn />
                    <h2 className="font-bold text-2xl text-rose-500 dark:text-zinc-50 mt-5 md:text-4xl">{locale === 'id' ? 'Catatan Aktif Kamu' : 'Your Active Notes'}</h2>
                    <NoteList notes={notesFilter} />
                  </div>
                )
            }
    </DataConsumer>

  );
}

HomePage.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePage;
