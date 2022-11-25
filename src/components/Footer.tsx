import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import FooterIcon from './FooterIcon';

function Footer() {
  const GITHUB_URL = 'https://github.com/Peter-Roh';
  const BLOG_URL = 'https://velog.io/@rmc2';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/minchulroh/';

  return (
    <div className="footer gap-y-4 items-center py-4 bg-primary text-info-content mt-auto page-responsive">
      <div>
        <p>© 2022. All rights reserved by Roh Minchul</p>
      </div>
      <div className="flex-x-center ml-auto">
        <FooterIcon url={GITHUB_URL} icon={faGithub} />
        <FooterIcon url={BLOG_URL} icon={faBlog} />
        <FooterIcon url={LINKEDIN_URL} icon={faLinkedin} />
      </div>
    </div>
  );
}

export default Footer;
