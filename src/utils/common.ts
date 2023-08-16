/**
 * 새 창에서 page를 여는 함수
 * @param url 열고 싶은 page의 url
 */
export const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
