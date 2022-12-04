import React from 'react';
import { useTranslation } from 'react-i18next';
import { IContactInfo } from '../types/types';

function ContactInfo({ method, detail, doTranslate }: IContactInfo) {
  const { t } = useTranslation();

  return (
    <div className="mb-2">
      <p className="text-sky-500 font-semibold">{t(method)}</p>
      {detail.map((elt: string) => {
        return (
          <p className="mt-1 text-base font-medium" key={elt}>
            {doTranslate ? t(elt) : elt}
          </p>
        );
      })}
    </div>
  );
}

export default ContactInfo;
