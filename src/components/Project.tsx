import { Link } from "react-router-dom";

type ProjectProps = {
  date: string;
  title: string;
  img: string;
  link: string;
};

function Project({ date, title, img, link }: ProjectProps) {
  return (
    <>
      <div className="font-mono text-sm mb-2 ml-auto">{date}</div>
      <div>
        <img src={img} alt="project" className="object-contain max-h-52" />
      </div>
      <Link to={link} className="mt-6 focus:outline-none">
        <span className="button">
          <span className="group-hover:hidden">{title}</span>
        </span>
      </Link>
    </>
  );
}

export default Project;
