import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IMenu } from '../types/types';
import MenuButton from './MenuButton';

function Menu() {
  const menuList: IMenu[] = useMemo(
    () => [
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'Info',
        url: '/info'
      },
      {
        name: 'Contact',
        url: '/contact'
      }
    ],
    []
  );

  return (
    <div>
      <div className="md:hidden dropdown text-info-content">
        {/* hamburger button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          tabIndex={0}
          className="inline-block w-8 h-8 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44"
        >
          {menuList.map((menu: IMenu) => {
            return (
              <li key={menu.name} className="font-medium text-sm">
                <Link to={menu.url}>{menu.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-x-center font-mono font-semibold antialiased hidden md:flex">
        {menuList.map((menu: IMenu) => {
          return <MenuButton key={menu.name} name={menu.name} url={menu.url} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
