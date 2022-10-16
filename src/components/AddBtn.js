import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';

function AddBtn() {
  return (
    <div className="w-14 h-14 bg-rose-400 border-2 border-rose-600 flex justify-center items-center fixed bottom-12 right-5 dark:bg-zinc-400 dark:border-zinc-800">
      <Link to="/notes/add"><BsPlusLg className="text-slate-50 text-3xl" /></Link>
    </div>
  );
}

export default AddBtn;
