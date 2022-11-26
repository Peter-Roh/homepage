import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { themeChange } from 'theme-change';
import { IContactInfo } from '../types/types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';

function Contact() {
  const contactInfos: IContactInfo[] = useMemo(
    () => [
      {
        method: 'Email',
        detail: ['minchul.roh.peter@gmail.com', 'rmc2@naver.com']
      },
      {
        method: 'Phone Number',
        detail: ['+82 - 10 - 8222 - 9249']
      },
      {
        method: 'Location',
        detail: ['CONTACT_LOCATION'],
        doTranslate: true
      }
    ],
    []
  );

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
          {contactInfos.map((contactInfo: IContactInfo) => {
            return (
              <ContactInfo
                key={contactInfo.method}
                method={contactInfo.method}
                detail={contactInfo.detail}
                doTranslate={contactInfo.doTranslate}
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
