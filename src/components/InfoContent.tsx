import React from 'react';
import { useTranslation } from 'react-i18next';
import { IInfoContent } from '../types/types';

function InfoContent({ title, content, imgUrl }: IInfoContent) {
  const { t } = useTranslation();

  return (
    <div className="mb-20">
      <p className="text-sky-500 font-semibold font-sans text-xl">{t(title)}</p>
      <div className="mt-2 flex">
        {imgUrl ? (
          <img src={imgUrl} alt="info" className="mr-4 md:mr-8" />
        ) : null}
        <div className="w-full">
          {content.map((elt) => {
            return (
              <div key={elt.itemName} className="mb-16">
                <div className="flex flex-col md:flex-row items-start justify-between">
                  <div>
                    <div className="min-h-8 font-bold text-xl">
                      {t(elt.itemName)}
                    </div>
                    <div className="text-sm">
                      {elt.subTitles.map((subTitle) => {
                        return <div key={subTitle}>{t(subTitle)}</div>;
                      })}
                    </div>
                  </div>
                  <div className="mt-0.5 md:mt-0 text-left md:text-right text-sm italic">
                    <div className="md:min-h-8 flex md:justify-end items-center">
                      {elt.place ? t(elt.place) : null}
                    </div>
                    <div key={elt.subInfo} className="mt-auto">
                      {t(elt.subInfo)}
                    </div>
                  </div>
                </div>
                {elt.details ? (
                  <ul className="mt-2 font-sans">
                    {elt.details.map((detail) => {
                      return (
                        <li
                          key={detail}
                          className="list-disc list-inside md:list-outside"
                        >
                          {t(detail)}
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InfoContent;
