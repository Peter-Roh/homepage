import type { TProject } from "../types";

/**
 * projects page에서 project 하나를 보여주는 component
 * @param date project 종료 날짜
 * @param title project 제목
 * @param img project 대표 이미지
 * @param description project에 대한 짧은 설명
 */
function Project({ date, title, img, description }: TProject) {
  return (
    <>
      <div className="mb-2 ml-auto font-mono text-sm">{date}</div>
      <div>
        <img src={img} alt="project" className="max-h-52 object-contain" />
      </div>
      <div className="mt-4 text-center">
        <p className="font-newsreader text-sm">{description}</p>
      </div>
      <div className="button mt-2">
        <span className="group-hover:hidden">{title}</span>
      </div>
    </>
  );
}

export default Project;
