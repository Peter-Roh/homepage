import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Projects() {
  return (
    <div className="page-full">
      <Helmet>
        <title>Roh Minchul | Projects</title>
      </Helmet>
      <Header />
      <div className="md:mx-auto md:w-3/5">Preparing...</div>
      <Footer />
    </div>
  );
}

export default Projects;
