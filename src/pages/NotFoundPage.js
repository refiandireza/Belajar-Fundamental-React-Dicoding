import React, { useContext } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import DataContext from '../context/DataContext';

function NotFoundPage() {
  const { locale } = useContext(DataContext);
  return (
    <div className="flex items-center justify-center flex-col mt-[100px]">
      <RiErrorWarningLine className="text-rose-400 text-[64px] dark:text-slate-50" />
      <h2 className="text-rose-400 text-3xl font-bold dark:text-slate-50 mt-4">{locale === 'id' ? 'Halaman Tidak Ditemukan' : 'Page Not Found!'}</h2>
    </div>
  );
}

export default NotFoundPage;
