import React from 'react';
import { useTranslation } from 'react-i18next';
import { IInfoContent } from '../types/types';

function InfoContent({ title, content, imgUrl }: IInfoContent) {
  const { t } = useTranslation();

  return (
    <div className="mb-8">
      <p className="text-sky-500 font-semibold font-sans text-xl">{t(title)}</p>
      <div className="mt-2 flex">
        {imgUrl ? (
          <img src={imgUrl} alt="info" className="mr-4 md:mr-8" />
        ) : null}
        <div className="w-full">
          {content.map((elt) => {
            return (
              <div key={elt.itemName} className="mb-1">
                <div>
                  <div className="font-bold text-xl">{t(elt.itemName)}</div>
                </div>
                <div className="mt-1 flex flex-col md:flex-row items-start md:items-center justify-center">
                  <div className="flex flex-col text-sm">
                    {elt.subTitles.map((subTitle) => {
                      return (
                        <div key={subTitle} className="mb-1">
                          {t(subTitle)}
                        </div>
                      );
                    })}
                  </div>
                  <div className="md:ml-auto text-sm italic">
                    {elt.subInfos.map((subInfo) => {
                      return (
                        <div key={subInfo} className="mb-0.5 md:text-right">
                          {t(subInfo)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InfoContent;
