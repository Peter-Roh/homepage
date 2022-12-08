import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMenu } from '../types/types';

function MenuButton({ name, url }: IMenu) {
  const currentUrl = useLocation().pathname;

  return (
    <div
      className={`mr-8 underline-offset-2 text-info-content hover:underline hover:decoration-secondary hover:subpixel-antialiased ${
        currentUrl === url ? 'text-base-100' : ''
      }`}
    >
      <Link to={url}>{name}</Link>
    </div>
  );
}

export default MenuButton;
