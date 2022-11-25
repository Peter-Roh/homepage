import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { openInNewTab } from '../utils/common';

interface FooterIconProps {
  url: string;
  icon: IconDefinition;
}

function FooterIcon({ url, icon }: FooterIconProps) {
  return (
    <div
      className="ml-1.5 cursor-pointer"
      role="presentation"
      onClick={() => openInNewTab(url)}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </div>
  );
}

export default FooterIcon;
