import React from 'react';
import Menu from './Menu';
import LanguageModal from './LanguageModal';
import DarkModeToggleButton from './DarkModeToggleButton';

function Header() {
  const menuList: string[][] = [
    ['Home', '/'],
    ['Resume', '/resume'],
    ['Contact', '/contact']
  ];

  return (
    <div className="bg-primary h-24 flex items-center justify-between page-responsive">
      <Menu menuList={menuList} />
      <div className="flex-x-center">
        <LanguageModal />
        <DarkModeToggleButton />
      </div>
    </div>
  );
}

export default Header;
