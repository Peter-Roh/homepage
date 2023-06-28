import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowTrendUp,
  faBook,
  faBrain,
  faBriefcase,
  faCode,
  faDumbbell,
  faLanguage,
  faMugHot,
  faSeedling,
  faShoePrints
} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Me from '../assets/me.jpeg';
import { openInNewTab } from '../utils/common';

function Home() {
  const { t } = useTranslation();
  const CV_URL =
    'https://drive.google.com/file/d/1wJPwvu4yPII_sE9ZcI_v6-ESK089ifSO/view?usp=sharing';

  return (
    <div className="page-full">
      <Helmet>
        <title>Roh Minchul | Home</title>
      </Helmet>
      <Header />
      <div className="md:mx-auto md:w-3/5">
        <div className="flex flex-col-reverse px-5 md:px-0 mt-12 mb-14 md:flex-row md:items-start md:justify-start md:shadow-md md:rounded-md">
          <div className="avatar">
            <div className="md:w-60 rounded">
              <img src={Me} alt="me" />
            </div>
          </div>
          <div className="md:p-6">
            <div className="flex flex-col">
              <p className="mb-4 md:mt-2">{t('HOME_JOB')}</p>
              <p className="text-6xl font-extrabold font-sans">
                {t('HOME_NAME')}
              </p>
              {/* <p>company</p> */}
              <div className="my-6 md:mb-0">
                <button
                  type="button"
                  className="btn btn-outline btn-success"
                  onClick={() => openInNewTab(CV_URL)}
                >
                  Check my CV
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="font-sans font-medium break-all leading-loose mb-7 md:mb-6 px-5 md:p-4 md:shadow-md md:rounded-md">
          <p>
            {t('HOME_GREETING1')}
            <b className="font-extrabold">{t('HOME_GREETING2')}</b>
            {t('HOME_GREETING3')}
          </p>
          <p>{t('HOME_GREETING4')}</p>
          <p>{t('HOME_GREETING5')}</p>
          <p>
            {t('HOME_GREETING6')}
            <b className="font-extrabold">{t('HOME_GREETING7')}</b>
            {t('HOME_GREETING8')}
          </p>
        </div>
        <div className="px-5 mb-7 md:mb-6 md:p-4 md:shadow-md md:rounded-md">
          <div>
            <p className="font-mono font-bold text-lg underline underline-offset-4 mb-4">
              Skills and Tools
            </p>
          </div>
          <div className="leading-loose">
            <div className="inline-block">
              <img
                alt="HTML5"
                src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="CSS3"
                src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="JavaScript"
                src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              />
            </div>
            <div className="inline-block">
              <img
                alt="TypeScript"
                src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="C++"
                src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="React"
                src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"
              />
            </div>
            <div className="inline-block">
              <img
                alt="NextJS"
                src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="TailwindCSS"
                src="https://img.shields.io/badge/tailwindcss%20-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="Sass"
                src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="Prisma"
                src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="tRPC"
                src="https://img.shields.io/badge/tRPC-2596BE.svg?style=for-the-badge&logo=tRPC&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="Visual Studio Code"
                src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white"
              />
            </div>
          </div>
        </div>
        <div className="px-5 mb-12 md:p-4 md:shadow-md md:rounded-md">
          <div>
            <p className="font-mono font-bold text-lg underline underline-offset-4 mb-4">
              Hobbies and Interests
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-6">
              <div className="flex-y-center">
                <FontAwesomeIcon icon={faCode} size="3x" />
                <p className="font-mono font-semibold text-sm mt-1 text-center">
                  {t('HOME_HOBBY1')}
                </p>
              </div>
              <div className="flex-y-center">
                <FontAwesomeIcon icon={faBriefcase} size="3x" />
                <p className="font-mono font-semibold text-sm mt-1 text-center">
                  {t('HOME_HOBBY2')}
                </p>
              </div>
              <div className="flex-y-center">
                <FontAwesomeIcon icon={faArrowTrendUp} size="3x" />
                <p className="font-mono font-semibold text-sm mt-1 text-center">
                  {t('HOME_HOBBY3')}
                </p>
              </div>
              <div className="flex-y-center">
                <FontAwesomeIcon icon={faBrain} size="3x" />
                <p className="font-mono font-semibold text-sm mt-1 text-center">
                  {t('HOME_HOBBY4')}
                </p>
              </div>
              <div className="flex-y-center">
                <FontAwesomeIcon icon={faBook} size="3x" />
                <p className="font-mono font-semibold text-sm mt-1 text-center">
                  {t('HOME_HOBBY5')}
                </p>
              </div>
              <div className="flex-y-center">
                <FontAwesomeIcon icon={faMugHot} size="3x" />
                <p className="font-mono font-semibold text-sm mt-1 text-center">
                  {t('HOME_HOBBY6')}
                </p>
              </div>
              <div className="flex-y-center">
                <FontAwesomeIcon icon={faDumbbell} size="3x" />
                <p className="font-mono font-semibold text-sm mt-1 text-center">
                  {t('HOME_HOBBY7')}
                </p>
              </div>
              <div className="flex-y-center">
                <FontAwesomeIcon icon={faSeedling} size="3x" />
                <p className="font-mono font-semibold text-sm mt-1 text-center">
                  {t('HOME_HOBBY8')}
                </p>
              </div>
              <div className="flex-y-center">
                <FontAwesomeIcon icon={faLanguage} size="3x" />
                <p className="font-mono font-semibold text-sm mt-1 text-center">
                  {t('HOME_HOBBY9')}
                </p>
              </div>
              <div className="flex-y-center">
                <FontAwesomeIcon icon={faShoePrints} size="3x" />
                <p className="font-mono font-semibold text-sm mt-1 text-center">
                  {t('HOME_HOBBY11')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
