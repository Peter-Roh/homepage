import React from 'react';
import { Link } from 'react-router-dom';

interface MenuProps {
  menuList: string[][];
}

function Menu({ menuList }: MenuProps) {
  return (
    <div>
      <div className="md:hidden dropdown">
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
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menuList.map((elt: string[]) => {
            return (
              <li key={elt[1]}>
                <Link to={elt[1]}>{elt[0]}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-x-center font-sans font-semibold antialiased hover:subpixel-antialiased hidden md:flex">
        {menuList.map((elt: string[]) => {
          return (
            <div
              key={elt[1]}
              className="mr-8 underline-offset-2 hover:underline"
            >
              <Link to={elt[1]}>{elt[0]}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
