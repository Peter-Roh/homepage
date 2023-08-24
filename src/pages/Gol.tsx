import { Helmet } from "react-helmet-async";
import ImageBox from "../components/ImageBox";
import GOL from "../assets/game-of-life.png";
import { openInNewTab } from "../utils/common";
import { useMemo } from "react";
import type { TImage } from "../types";

function Gol() {
  const images: TImage[] = useMemo(() => {
    return [
      {
        imgUrl: GOL,
        title: "Game of Life simulator - Pulsar pattern",
      },
    ];
  }, []);

  const techStack = useMemo(() => {
    return ["Typescript", "Vite", "React", "TailwindCSS"];
  }, []);

  return (
    <>
      <Helmet>
        <title>Roh Minchul | Game of Life</title>
      </Helmet>
      <div className="mx-auto my-8 px-4 lg:w-3/5">
        <div className="mb-4 font-newsreader text-3xl font-bold">
          <p>Game of Life</p>
        </div>
        <ImageBox images={images} />
        {
          //* Description
        }
        <div className="project-description-margin">
          <p className="project-sm-title">Description</p>
          <div className="mt-2 font-newsreader">
            Conway&apos;s game of life simulator
          </div>
        </div>
        {
          //* Tech Stack
        }
        <div className="project-description-margin">
          <p className="project-sm-title">Tech Stack</p>
          <div className="mt-2 font-newsreader">
            <ul>
              {techStack.map((elt) => {
                return (
                  <li key={elt} className="description-li">
                    {elt}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {
          //* Website Link
        }
        <div className="project-description-margin">
          <p className="project-sm-title">Website Link</p>
          <div className="mt-2 font-newsreader">
            <ul>
              <li
                className="description-li cursor-pointer hover:underline"
                onClick={() =>
                  openInNewTab("https://peter-roh.github.io/game-of-life/")
                }
              >
                https://peter-roh.github.io/game-of-life/
              </li>
            </ul>
          </div>
        </div>
        {
          //* Github Repository
        }
        <div className="project-description-margin">
          <p className="project-sm-title">Github Repository</p>
          <div className="mt-2 font-newsreader">
            <ul>
              <li
                className="description-li cursor-pointer hover:underline"
                onClick={() =>
                  openInNewTab("https://github.com/Peter-Roh/game-of-life")
                }
              >
                https://github.com/Peter-Roh/game-of-life
              </li>
            </ul>
          </div>
        </div>
        {
          //* References
        }
        <div className="project-description-margin">
          <p className="project-sm-title">References</p>
          <div className="mt-2 font-newsreader">
            <ul>
              <li
                className="description-li cursor-pointer hover:underline"
                onClick={() =>
                  openInNewTab(
                    "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",
                  )
                }
              >
                https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gol;
