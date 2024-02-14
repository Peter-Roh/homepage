import { Helmet } from "react-helmet-async";
import ImageBox from "../components/ImageBox";
import { useMemo } from "react";
import type { TImage } from "../types";
import SubwayKiosk from "../assets/kiosk.png";

function Subway() {
  const features = useMemo(() => {
    return [
      "Interactive UX",
      "i18n multi-language support",
      "Receipt Printing",
      "Admin Page",
    ];
  }, []);

  const techStack = useMemo(() => {
    return ["Typescript", "React", "Sass", "Redux"];
  }, []);

  const images: TImage[] = useMemo(() => {
    return [
      {
        imgUrl: SubwayKiosk,
        title: "Subway KIOSK",
      },
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Roh Minchul | Subway KIOSK</title>
      </Helmet>
      <div className="mx-auto my-8 px-4 lg:w-3/5">
        <div className="mb-4 font-newsreader text-3xl font-bold">
          <p>Subway KIOSK program</p>
        </div>
        <ImageBox images={images} />
        {
          //* Description
        }
        <div className="project-description-margin">
          <p className="project-sm-title">Description</p>
          <div className="mt-2 font-newsreader">
            Developed and maintained Subway KIOSK program which is a program for
            customers to order foods without a shop assistant as a frontend
            developer.
          </div>
        </div>
        {
          //* Features
        }
        <div className="project-description-margin">
          <p className="project-sm-title">Features</p>
          <div className="mt-2 font-newsreader">
            <ul>
              {features.map((elt) => {
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
          //* Development personnel & Duration
        }
        <div className="project-description-margin">
          <p className="project-sm-title">Development personnel & Duration</p>
          <div className="mt-2 font-newsreader">3 people, 10 month</div>
        </div>
      </div>
    </>
  );
}

export default Subway;
