import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IFooterIcon } from '../types/types';
import { openInNewTab } from '../utils/common';

function FooterIcon({ url, icon }: IFooterIcon) {
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
