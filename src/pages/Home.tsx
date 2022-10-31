import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="page-full">
      <Helmet>
        <title>Roh Minchul | Home</title>
      </Helmet>
      <Header />
      <div className="page-responsive">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum
        perferendis placeat voluptatem, eos sapiente assumenda officia expedita
        est eaque provident. Consectetur fugiat magni accusamus exercitationem
        inventore mollitia facilis dolorem.
      </div>
      <Footer />
    </div>
  );
}

export default Home;
