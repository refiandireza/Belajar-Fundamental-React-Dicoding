import React, { useContext } from 'react';
import { FaFolderPlus } from 'react-icons/fa';
import DataContext from '../context/DataContext';

function Empty() {
  const { locale } = useContext(DataContext);
  return (
    <div className="flex items-center justify-center flex-col mt-[100px]">
      <FaFolderPlus className="text-rose-400 text-[72px] dark:text-slate-50" />
      <p className="text-rose-400 font-bold text-xl mt-2 dark:text-slate-50">{locale === 'id' ? 'Kamu Tidak Memiliki Catatan' : 'You Don\'t Have Any Note Yet'}</p>
    </div>
  );
}

export default Empty;
