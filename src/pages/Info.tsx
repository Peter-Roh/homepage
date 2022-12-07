import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { themeChange } from 'theme-change';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Info() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="page-full">
      <Helmet>
        <title>Roh Minchul | Info</title>
      </Helmet>
      <Header />
      <div className="page-responsive">
        <div className="mt-14">info</div>
      </div>
      <Footer />
    </div>
  );
}

export default Info;
