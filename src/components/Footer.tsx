import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const GITHUB_URL = 'https://github.com/Peter-Roh';
  const BLOG_URL = 'https://velog.io/@rmc2';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/minchulroh/';

  const openInNewTab = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div className="footer gap-y-4 items-center py-4 bg-primary text-info-content mt-auto page-responsive">
      <div>
        <p>© 2022. All rights reserved by Roh Minchul</p>
      </div>
      <div className="flex-x-center ml-auto">
        <div
          className="ml-1.5 cursor-pointer"
          role="presentation"
          onClick={() => openInNewTab(GITHUB_URL)}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </div>
        <div
          className="ml-1.5 cursor-pointer"
          role="presentation"
          onClick={() => openInNewTab(BLOG_URL)}
        >
          <FontAwesomeIcon icon={faBlog} size="2x" />
        </div>
        <div
          className="ml-1.5 cursor-pointer"
          role="presentation"
          onClick={() => openInNewTab(LINKEDIN_URL)}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
