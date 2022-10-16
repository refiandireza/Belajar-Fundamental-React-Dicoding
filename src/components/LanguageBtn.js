import React from 'react';
import { MdGTranslate } from 'react-icons/md';
import { DataConsumer } from '../context/DataContext';

function LanguageBtn() {
  return (
    <DataConsumer>
      {
            ({ locale, toggleLocale }) => (
              <button className="mr-5 flex gap-x-2" onClick={toggleLocale}>
                <span className="text-xl font-bold text-rose-500 dark:text-slate-50">{locale === 'en' ? 'EN' : 'ID'}</span>
                <MdGTranslate className="text-rose-500 text-2xl dark:text-slate-50" />
              </button>

            )
        }
    </DataConsumer>
  );
}

export default LanguageBtn;
