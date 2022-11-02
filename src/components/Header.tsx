import React from 'react';
import { Link } from 'react-router-dom';
import i18n from 'i18next';
import DarkModeToggleButton from './DarkModeToggleButton';

function Header() {
  const menuList: string[][] = [
    ['Home', '/'],
    ['Resume', '/resume'],
    ['Contact', '/contact']
  ];

  return (
    <div className="bg-primary h-24 flex items-center justify-between page-responsive">
      <div className="flex-x-center font-sans font-normal">
        {menuList.map((elt: string[]) => {
          return (
            <div key={elt[1]}>
              <Link to={elt[1]}>{elt[0]}</Link>
            </div>
          );
        })}
      </div>
      <div className="flex-x-center">
        <div
          className="flex-x-center"
          role="presentation"
          onClick={() => {
            if (localStorage.getItem('i18nextLng') === 'en-US') {
              i18n.changeLanguage('ko-KR');
            } else if (localStorage.getItem('i18nextLng') === 'ko-KR') {
              i18n.changeLanguage('en-US');
            }
          }}
        >
          <svg
            className="fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z" />
            <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z" />
          </svg>
          <svg
            className="fill-current h-3 w-3 opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
          </svg>
        </div>
        <DarkModeToggleButton />
      </div>
    </div>
  );
}

export default Header;
