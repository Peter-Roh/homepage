import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change';

function Contact() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="page-full">
      <Helmet>
        <title>Roh Minchul | Contact</title>
      </Helmet>
      Contact
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default Contact;
