import Head from "next/head";

import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";

type TProject = {
  title: string;
  date: string;
  description: string;
  link: string;
};

export default function Projects() {
  const projects: TProject[] = [
    {
      title: "Game of Life",
      date: "August, 2023",
      description: "Conway's game of life simulator",
      link: "/projects/game-of-life",
    },
    {
      title: "Shopaholic",
      date: "July, 2023",
      description:
        "Serverless shopping mall website designed to guarantee full-stack type safety using tRPC.",
      link: "/projects/shopaholic",
    },
    {
      title: "Subway KIOSK",
      date: "July, 2022",
      description: "Subway KIOSK program",
      link: "/projects/subway",
    },
  ];

  return (
    <>
      <Head>
        <title>Projects | Roh Minchul</title>
      </Head>
      <div className="page">
        <div className="grid grid-cols-3">
          <Link href="/">
            <div className="text-sub flex cursor-pointer items-center">
              <ChevronLeftIcon />
              <span className="ml-1">Go back</span>
            </div>
          </Link>
          <div className="mx-auto text-lg font-semibold">Projects</div>
          <div />
        </div>
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
