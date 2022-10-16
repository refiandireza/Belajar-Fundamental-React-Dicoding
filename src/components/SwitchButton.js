import React from 'react';

import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';
import { DataConsumer } from '../context/DataContext';

function SwitchButton() {
  return (
    <DataConsumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme} className="flex flex-row items-center">
          {theme === 'dark' ? <FaMoon className="text-slate-50 text-xl" /> : <BsSunFill className="text-rose-500 text-2xl" />}
        </button>
      )}
    </DataConsumer>

  );
}

export default SwitchButton;
