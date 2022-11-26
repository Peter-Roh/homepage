import React, { useMemo } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { IFooterIcon } from '../types/types';
import FooterIcon from './FooterIcon';

function Footer() {
  const GITHUB_URL = 'https://github.com/Peter-Roh';
  const BLOG_URL = 'https://velog.io/@rmc2';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/minchulroh/';

  const footerIconList: IFooterIcon[] = useMemo(
    () => [
      {
        url: GITHUB_URL,
        icon: faGithub
      },
      {
        url: BLOG_URL,
        icon: faBlog
      },
      {
        url: LINKEDIN_URL,
        icon: faLinkedin
      }
    ],
    []
  );

  return (
    <div className="footer gap-y-4 items-center py-4 bg-primary text-info-content mt-auto page-responsive">
      <div>
        <p>© 2022. All rights reserved by Roh Minchul</p>
      </div>
      <div className="flex-x-center ml-auto">
        {footerIconList.map((footerIcon: IFooterIcon) => {
          return (
            <FooterIcon
              key={footerIcon.url}
              url={footerIcon.url}
              icon={footerIcon.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
