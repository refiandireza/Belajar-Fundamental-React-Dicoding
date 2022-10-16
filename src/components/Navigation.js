import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFolder, AiFillHome } from 'react-icons/ai';
import { DataConsumer } from '../context/DataContext';

function Navigation() {
  return (
    <DataConsumer>
      {
        ({ locale }) => (
          <nav className="h-10 flex mt-4 items-center justify-center">
            <ul className="flex flex-row gap-x-4 md:gap-x-8">
              <li className="flex flex-row items-center gap-x-1">
                <AiFillHome className="text-rose-500 text-xl md:text-3xl dark:text-slate-50" />
                <Link to="/" className="text-2xl md:text-4xl font-bold text-rose-500 dark:text-slate-50">{locale === 'id' ? 'Beranda' : 'Home'}</Link>
              </li>
              <li className="flex flex-row items-center gap-x-1">
                <AiFillFolder className="text-rose-500 text-2xl md:text-4xl dark:text-slate-50" />
                <Link to="/archives" className="text-2xl font-bold text-rose-500 dark:text-slate-50 md:text-4xl">{locale === 'id' ? 'Arsip' : 'Archive'}</Link>
              </li>
            </ul>
          </nav>
        )
      }
    </DataConsumer>

  );
}

export default Navigation;
