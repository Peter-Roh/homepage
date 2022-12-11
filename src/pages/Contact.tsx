import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { themeChange } from 'theme-change';
import { useTranslation } from 'react-i18next';
import { IContactInfo } from '../types/types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';
import Selfie from '../assets/me2.jpeg';

function Contact() {
  const { t } = useTranslation();
  const contactInfos: IContactInfo[] = useMemo(
    () => [
      {
        method: 'CONTACT_EMAIL',
        detail: ['minchul.roh.peter@gmail.com']
      },
      {
        method: 'CONTACT_PHONE',
        detail: ['+82 - 10 - 7772 - 9249']
      },
      {
        method: 'CONTACT_LOCATION',
        detail: ['CONTACT_LOCATION_CONTENT'],
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
          <div className="font-sans font-bold text-2xl">CONTACT ME!</div>
          <div className="mt-1 mb-12">{t('CONTACT_MESSAGE')}</div>
          <div className="flex md:flex-row flex-col-reverse items-start md:items-center justify-between">
            <div className="mb-8 md:mb-0">
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
            <div className="avatar mx-auto mb-12 md:mx-0 md:mb-0">
              <div className="w-56 mask mask-squircle">
                <img src={Selfie} alt="selfie" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
