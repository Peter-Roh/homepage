import Project from "../components/Project";
import Shopaholic from "../assets/shopaholic.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import type { TProject } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { resetModal } from "../redux/modal";

function Projects() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetModal());
    };
  }, []);

  const projects: TProject[] = [
    {
      date: "July, 2023",
      img: Shopaholic,
      title: "Shopaholic",
      description:
        "Serverless shopping mall website designed to guarantee full-stack typesafety using tRPC.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Roh Minchul | Projects</title>
      </Helmet>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <Link
                key={project.title}
                to="/projects/shopaholic"
                className="focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                <div className="grid-cell group">
                  <Project
                    date={project.date}
                    img={project.img}
                    title={project.title}
                    description={project.description}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
