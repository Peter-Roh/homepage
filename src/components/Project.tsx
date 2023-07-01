import React from 'react';
import { Link } from 'react-router-dom';
import { IProjectProps } from '../types/types';

function Project({ url, title, imgUrl }: IProjectProps) {
  return (
    <Link to={url} className="hover:underline">
      <div>
        <div className="rounded-lg">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="flex-x-center mt-4 font-sans font-semibold text-lg">
          {title}
        </div>
      </div>
    </Link>
  );
}

export default Project;
