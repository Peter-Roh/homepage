import Head from "next/head";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Carousel, { type TImage } from "@/components/pages/Carousel";
import GOL from "@/assets/game-of-life.png";
import { openInNewTab } from "@/lib/utils";

export default function GoL() {
  const images: TImage[] = [
    {
      imgUrl: GOL.src,
      description: "Game of Life simulator - Pulsar pattern",
    },
  ];
  const techStack = ["Typescript", "React", "Tailwind CSS"];

  return (
    <>
      <Head>
        <title>Game of Life | Roh Minchul</title>
      </Head>
      <div className="page">
        <div className="grid grid-cols-3">
          <Link href="/projects">
            <div className="text-sub flex cursor-pointer items-center">
              <ChevronLeftIcon />
              <span className="ml-1">See other projects</span>
            </div>
          </Link>
          <div className="mx-auto text-center text-lg font-semibold">
            Game of Life
          </div>
          <div />
        </div>
        <div className="w-full">
          <div className="flex-x-center mt-6">
            <Carousel images={images} />
          </div>
        </div>
        {
          // * Description
        }
        <div className="project-section">
          <p className="project-title">Description</p>
          <div className="mt-2 font-medium">
            Conway&apos;s game of life simulator
          </div>
        </div>
        {
          // * Tech Stack
        }
        <div className="project-section">
          <p className="project-title">Tech Stack</p>
          <div className="mt-2 font-medium">
            <ul className="project-ul">
              {techStack.map((elt) => {
                return <li key={elt}>{elt}</li>;
              })}
            </ul>
          </div>
        </div>
        {
          // * Website Link
        }
        <div className="project-section">
          <p className="project-title">Website Link</p>
          <div className="mt-2 font-medium">
            <ul className="project-ul">
              <li
                className="project-li-link"
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
          // * Github Repository
        }
        <div className="project-section">
          <p className="project-title">Github Repository</p>
          <div className="mt-2 font-medium">
            <ul className="project-ul">
              <li
                className="project-li-link"
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
          // * Reference
        }
        <div className="project-section">
          <p className="project-title">Reference</p>
          <div className="mt-2 font-medium">
            <ul className="project-ul">
              <li
                className="project-li-link"
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
