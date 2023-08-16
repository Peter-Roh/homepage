import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openInNewTab } from "../utils/common";

type FooterIconProps = {
  url: string;
  icon: IconDefinition;
};

/**
 * footer 좌측의 icon을 담당하는 component
 * @param url 해당 icon을 클릭하면 열고 싶은 page의 url
 * @param icon 원하는 font awesome icon
 */
function FooterIcon({ url, icon }: FooterIconProps) {
  return (
    <div className="cursor-pointer" onClick={() => openInNewTab(url)}>
      <FontAwesomeIcon icon={icon} size="xl" />
    </div>
  );
}

export default FooterIcon;
