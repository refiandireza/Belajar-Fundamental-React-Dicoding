import React from 'react';
import PropTypes from 'prop-types';
import { DataConsumer } from '../context/DataContext';

function SearchBar({ keyword, keywordChange }) {
  return (
    <DataConsumer>
      {
        ({ locale }) => (
          <input
            className="h-12 pl-2 mt-4 w-full dark:bg-slate-50 placeholder:text-rose-300 shadow-md rounded-md font-bold dark:placeholder:text-zinc-400 focus:text-rose-300 dark:focus:text-zinc-400"
            type="text"
            placeholder={locale === 'id' ? 'Cari Berdasarkan Judul ...' : 'Search By Title ...'}
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}
          />
        )
      }
    </DataConsumer>

  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
