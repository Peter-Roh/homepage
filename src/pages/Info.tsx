import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { themeChange } from 'theme-change';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { IInfoContent } from '../types/types';
import InfoContent from '../components/InfoContent';
import SchoolSymbol from '../assets/korea_university_symbol.png';

function Info() {
  const infoContents: IInfoContent[] = [
    {
      title: 'INFO_EXPERIENCE_TITLE',
      content: [
        {
          itemName: 'INFO_EXPERIENCE_ITEMNAME1',
          subTitles: ['INFO_EXPERIENCE_SUBTITLE1'],
          place: 'INFO_EXPERIENCE_PLACE1',
          subInfo: 'INFO_EXPERIENCE_PERIOD1',
          details: ['INFO_EXPERIENCE_DETAIL1']
        },
        {
          itemName: 'INFO_EXPERIENCE_ITEMNAME2',
          subTitles: ['INFO_EXPERIENCE_SUBTITLE2'],
          place: 'INFO_EXPERIENCE_PLACE2',
          subInfo: 'INFO_EXPERIENCE_PERIOD2'
        },
        {
          itemName: 'INFO_EXPERIENCE_ITEMNAME3',
          subTitles: ['INFO_EXPERIENCE_SUBTITLE3'],
          place: 'INFO_EXPERIENCE_PLACE3',
          subInfo: 'INFO_EXPERIENCE_PERIOD3',
          details: ['INFO_EXPERIENCE_DETAIL3']
        }
      ]
    },
    {
      title: 'INFO_PROJECT_TITLE',
      content: [
        {
          itemName: '',
          subTitles: [''],
          subInfo: ''
        }
      ]
    },
    {
      title: 'INFO_EDUCATION_TITLE',
      imgUrl: SchoolSymbol,
      content: [
        {
          itemName: 'INFO_EDUCATION_ITEMNAME',
          subTitles: ['INFO_EDUCATION_SUBTITLE1', 'INFO_EDUCATION_SUBTITLE2'],
          subInfo: 'INFO_EDUCATION_PERIOD'
        }
      ]
    },
    {
      title: 'INFO_AWARD_TITLE',
      content: [
        {
          itemName: 'INFO_AWARD_ITEMNAME',
          subTitles: ['INFO_AWARD_SUBTITLE'],
          place: 'INFO_AWARD_ORG',
          subInfo: 'INFO_AWARD_PERIOD'
        }
      ]
    },
    {
      title: 'INFO_LANGUAGE_TITLE',
      content: [
        {
          itemName: 'INFO_LANGUAGE_ITEMNAME',
          subTitles: ['INFO_LANGUAGE_SUBTITLE'],
          subInfo: 'INFO_LANGUAGE_PERIOD'
        }
      ]
    },
    {
      title: 'INFO_MILITARY_TITLE',
      content: [
        {
          itemName: 'INFO_MILITARY_ITEMNAME',
          subTitles: ['INFO_MILITARY_SUBTITLE'],
          subInfo: 'INFO_MILITARY_PERIOD'
        }
      ]
    }
  ];

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
        <div className="mt-14">
          {infoContents.map((elt: IInfoContent) => {
            return (
              <InfoContent
                key={elt.title}
                title={elt.title}
                content={elt.content}
                imgUrl={elt.imgUrl}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Info;
