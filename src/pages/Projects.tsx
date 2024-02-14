import Project from "../components/Project";
import SubwayKiosk from "../assets/kiosk.png";
import Shopaholic from "../assets/shopaholic.png";
import GOL from "../assets/game-of-life.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import type { TProject } from "../types";

function Projects() {
  const projects: TProject[] = [
    {
      link: "/projects/game-of-life",
      date: "August, 2023",
      img: GOL,
      title: "Game of Life",
      description: "Conway's game of life simulator",
    },
    {
      link: "/projects/shopaholic",
      date: "July, 2023",
      img: Shopaholic,
      title: "Shopaholic",
      description:
        "Serverless shopping mall website designed to guarantee full-stack type safety using tRPC.",
    },
    {
      link: "/projects/subway",
      date: "July, 2022",
      img: SubwayKiosk,
      title: "Subway KIOSK",
      description: "Subway KIOSK program",
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
                to={project.link}
                className="grid-border focus:outline-none focus:ring-2 focus:ring-rose-500"
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
