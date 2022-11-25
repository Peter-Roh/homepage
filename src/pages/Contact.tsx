import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { themeChange } from 'theme-change';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';

function Contact() {
  const contactInfos: string[][] = [
    ['Email', 'minchul.roh.peter@gmail.com'],
    ['Phone Number', '+82 - 10 - 8222 - 9249']
  ];

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="page-full">
      <Helmet>
        <title>Roh Minchul | Contact</title>
      </Helmet>
      <Header />
      <div className="page-responsive">
        <div className="mt-14">
          {contactInfos.map((contactInfo) => {
            return (
              <ContactInfo
                key={contactInfo[0]}
                title={contactInfo[0]}
                detail={contactInfo[1]}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
