import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import FooterIcon from './FooterIcon';

function Footer() {
  const GITHUB_URL = 'https://github.com/Peter-Roh';

  return (
    <div className="footer bg-primary py-4 text-info-content mt-auto flex-x-center">
      <div className="page-responsive flex justify-between items-center px-5">
        <div>
          <p>© 2022. All rights reserved by Roh Minchul</p>
        </div>
        <div>
          <FooterIcon url={GITHUB_URL} icon={faGithub} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
