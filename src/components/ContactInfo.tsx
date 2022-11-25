import React from 'react';

interface ContactInfoProps {
  title: string;
  detail: string;
}

function ContactInfo({ title, detail }: ContactInfoProps) {
  return (
    <div className="mb-2">
      <p className="text-sky-500 font-semibold">{title}</p>
      <p className="mt-1 text-base font-medium">{detail}</p>
    </div>
  );
}

export default ContactInfo;
