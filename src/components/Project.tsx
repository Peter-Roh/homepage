type ProjectProps = {
  date: string;
  title: string;
  img: string;
  description: string;
};

function Project({ date, title, img, description }: ProjectProps) {
  return (
    <>
      <div className="font-mono text-sm mb-2 ml-auto">{date}</div>
      <div>
        <img src={img} alt="project" className="object-contain max-h-52" />
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
