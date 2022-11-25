export const openInNewTab = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const getCurrentLang = () => localStorage.getItem('i18nextLng') || '';
