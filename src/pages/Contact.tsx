import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { themeChange } from 'theme-change';

function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="page-full">
      <Helmet>
        <title>Roh Minchul | Contact</title>
      </Helmet>
      <p>{t('contact')}</p>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default Contact;
