import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openInNewTab } from "../utils/common";

type FooterIconProps = {
  url: string;
  icon: IconDefinition;
};

function FooterIcon({ url, icon }: FooterIconProps) {
  return (
    <div className="cursor-pointer" onClick={() => openInNewTab(url)}>
      <FontAwesomeIcon icon={icon} size="xl" />
    </div>
  );
}

export default FooterIcon;
