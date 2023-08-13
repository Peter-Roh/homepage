import FooterIcon from "./FooterIcon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  console.log("i am footer");
  const GITHUB_URL = "https://github.com/Peter-Roh";

  return (
    <>
      <footer className="mt-auto grid grid-rows-2 gap-y-4 lg:flex lg:items-center lg:justify-between border border-b-0 border-t-black px-8 py-10">
        <nav>
          <ul className="flex">
            <li>
              <FooterIcon url={GITHUB_URL} icon={faGithub} />
            </li>
          </ul>
        </nav>
        <p className="font-newsreader text-slate-900 flex items-center justify-end lg:justify-center">
          © 2023. All rights reserved by Roh Minchul
        </p>
      </footer>
    </>
  );
}

export default Footer;
