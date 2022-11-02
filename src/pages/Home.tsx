import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="page-full">
      <Helmet>
        <title>Roh Minchul | Home</title>
      </Helmet>
      <Header />
      <div className="page-responsive">{t('test')}</div>
      <Footer />
    </div>
  );
}

export default Home;
