import React from 'react';
import Menu from './Menu';
import LanguageModal from './LanguageModal';
import DarkModeToggleButton from './DarkModeToggleButton';

function Header() {
  return (
    <div className="bg-primary flex-x-center h-24 shadow-md">
      <div className="flex items-center justify-between md:mx-auto w-full px-5 md:px-0 md:w-3/5">
        <Menu />
        <div className="flex-x-center text-info-content">
          <LanguageModal />
          <DarkModeToggleButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
