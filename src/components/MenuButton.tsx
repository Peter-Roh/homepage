import React from 'react';
import { Link } from 'react-router-dom';
import { IMenu } from '../types/types';

function MenuButton({ name, url }: IMenu) {
  return (
    <div className="mr-8 underline-offset-2 text-info-content hover:underline hover:decoration-secondary hover:subpixel-antialiased">
      <Link to={url}>{name}</Link>
    </div>
  );
}

export default MenuButton;
