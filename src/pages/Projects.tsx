import Project from "../components/Project";
import Shopaholic from "../assets/shopaholic.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Projects() {
  console.log("i am project");
  return (
    <>
      <Helmet>
        <title>Roh Minchul | Projects</title>
      </Helmet>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <Link
            to="/projects/shopaholic"
            className="focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <div className="grid-cell group">
              <Project
                date="July, 2023"
                img={Shopaholic}
                title="Shopaholic"
                description="Serverless shopping mall website designed to guarantee full-stack typesafety using tRPC."
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
