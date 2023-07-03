import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { openInNewTab } from '../utils/common';
import ImgUrl from '../assets/shopaholic.png';
import ImageBox from '../components/ImageBox';
import { IImageArray } from '../types/types';

function Shopaholic() {
  const { t } = useTranslation();
  const features = useMemo(() => {
    return [
      'SHOPAHOLIC_FEATURES1',
      'SHOPAHOLIC_FEATURES2',
      'SHOPAHOLIC_FEATURES3',
      'SHOPAHOLIC_FEATURES4',
      'SHOPAHOLIC_FEATURES5',
      'SHOPAHOLIC_FEATURES6',
      'SHOPAHOLIC_FEATURES7'
    ];
  }, []);
  const techStack = useMemo(() => {
    return ['NextJS', 'TailwindCSS', 'Prisma', 'tRPC'];
  }, []);
  const images: IImageArray[] = useMemo(() => {
    return [
      {
        imgUrl: ImgUrl,
        title: 'a'
      },
      {
        imgUrl: ImgUrl,
        title: 'b'
      }
    ];
  }, []);

  return (
    <div className="page-full">
      <Helmet>
        <title>Roh Minchul | Shopaholic</title>
      </Helmet>
      <Header />
      <div className="page-responsive px-5 md:px-0">
        <div className="my-6 font-bold text-3xl">
          <p>Shopaholic</p>
        </div>
        <ImageBox images={images} />
        <div className="mt-2">
          <p className="font-bold text-xl">{t('SHOPAHOLIC_DESC')}</p>
          <div className="mt-2">{t('SHOPAHOLIC_DESC1')}</div>
        </div>
        {
          //* Features
        }
        <div className="mt-2">
          <p className="font-bold text-xl">{t('SHOPAHOLIC_FEATURES')}</p>
          <div className="mt-2">
            <ul className="font-sans">
              {features.map((elt) => {
                return (
                  <li
                    key={elt}
                    className="list-disc list-inside md:list-outside"
                  >
                    {t(elt)}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {
          //* 기술 스택
        }
        <div className="mt-2">
          <p className="font-bold text-xl">{t('SHOPAHOLIC_TECH')}</p>
          <div className="mt-2">
            <ul className="font-sans">
              {techStack.map((elt) => {
                return (
                  <li
                    key={elt}
                    className="list-disc list-inside md:list-outside"
                  >
                    {elt}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-2">
          <p className="font-bold text-xl">Github Repository</p>
          <div className="mt-2">
            <ul>
              <li
                className="cursor-pointer mt-2 list-disc list-inside md:list-outside hover:underline"
                role="presentation"
                onClick={() =>
                  openInNewTab('https://github.com/Peter-Roh/shopaholic')
                }
              >
                https://github.com/Peter-Roh/shopaholic
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-2 mb-6">
          <p className="font-bold text-xl">{t('SHOPAHOLIC_VIDEO')}</p>
          <div className="mt-2">
            <ul className="font-sans">
              <li className="list-disc list-inside md:list-outside">a</li>
              <li className="list-disc list-inside md:list-outside">a</li>
              <li className="list-disc list-inside md:list-outside">a</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shopaholic;
