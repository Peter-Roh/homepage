import Project from "../components/Project";
import Shopaholic from "../assets/shopaholic.png";

function Projects() {
  console.log("i am project");
  return (
    <>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="grid-cell group">
            <Project
              date="July, 2023"
              img={Shopaholic}
              title="Shopaholic"
              link="/projects/shopaholic"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
