import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface IFooterIcon {
  url: string;
  icon: IconDefinition;
}

export interface IMenu {
  name: string;
  url: string;
}

export interface IContactInfo {
  method: string;
  detail: string[];
  doTranslate?: boolean;
}