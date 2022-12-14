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
  icon: IconDefinition;
  detail: string[];
  doTranslate?: boolean;
}

export interface IInfoContent {
  title: string;
  imgUrl?: string;
  content: {
    itemName: string;
    subTitles?: string[];
    place?: string;
    subInfo?: string;
    details?: string[];
  }[];
}
