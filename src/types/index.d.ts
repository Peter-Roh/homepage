/**
 * project의 image를 보여주기 위해 사용되는 타입
 */
export type TImage = {
  imgUrl: string;
  title: string;
};

/**
 * project에 대한 정보를 보여주기 위해 사용되는 타입
 */
export type TProject = {
  link: string;
  date: string;
  title: string;
  img: string;
  description: string;
};
