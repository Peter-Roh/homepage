import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div className="prose prose-slate">
        <p>OOPS! PAGE NOT FOUND</p>
      </div>
      <div className="prose prose-stone text-7xl leading-snug font-bold">
        <p>404</p>
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-secondary" type="button">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
