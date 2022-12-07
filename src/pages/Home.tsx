import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Me from '../assets/me.jpeg';
import { openInNewTab } from '../utils/common';

function Home() {
  const { t } = useTranslation();
  const CV_URL =
    'https://drive.google.com/file/d/1grYY7ydYvBnM5OCALmjvv3fvT20QXpii/view?usp=sharing';

  return (
    <div className="page-full">
      <Helmet>
        <title>Roh Minchul | Home</title>
      </Helmet>
      <Header />
      <div className="page-responsive">
        <div className="mx-auto flex flex-col md:flex-row md:items-start md:justify-between mt-14 mb-14">
          <div className="flex flex-col items-start md:items-start justify-between h-60">
            <div className="flex flex-col h-full">
              <p className="mb-4">{t('HOME_JOB')}</p>
              <p className="text-6xl font-extrabold font-sans">
                {t('HOME_NAME')}
              </p>
              {/* <p className="mt-4 ml-auto font-serif">company</p> */}
              <div className="mt-auto">
                <button
                  type="button"
                  className="btn btn-outline btn-success"
                  onClick={() => openInNewTab(CV_URL)}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
          <div className="avatar mt-12 md:mt-0 mx-auto md:mx-0">
            <div className="w-full md:w-60 rounded">
              <img src={Me} alt="me" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
