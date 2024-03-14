import Head from "next/head";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Carousel, { type TImage } from "@/components/pages/Carousel";
import SubwayKiosk from "@/assets/kiosk.png";

export default function Subway() {
  const images: TImage[] = [
    {
      imgUrl: SubwayKiosk.src,
      description: "Subway KIOSK",
    },
  ];
  const features = [
    "Interactive UX",
    "i18n multi-language support",
    "Receipt Printing",
    "Admin Page",
  ];
  const techStack = ["Typescript", "React", "Sass", "Redux"];

  return (
    <>
      <Head>
        <title>Subway KIOSK | Roh Minchul</title>
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
            Subway KIOSK
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
            Developed and maintained Subway KIOSK program which is a program for
            customers to order foods without a shop assistant as a frontend
            developer.
          </div>
        </div>
        {
          // * Features
        }
        <div className="project-section">
          <p className="project-title">Features</p>
          <div className="mt-2 font-medium">
            <ul className="project-ul">
              {features.map((elt) => {
                return <li key={elt}>{elt}</li>;
              })}
            </ul>
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
          // * Development personnel & Duration
        }
        <div className="project-section">
          <p className="project-title">Development personnel & Duration</p>
          <div className="mt-2 font-medium">3 people, 10 months</div>
        </div>
      </div>
    </>
  );
}
