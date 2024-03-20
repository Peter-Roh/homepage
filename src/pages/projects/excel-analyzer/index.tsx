import Head from "next/head";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Carousel, { type TImage } from "@/components/pages/Carousel";
import { openInNewTab } from "@/lib/utils";
import ExcelQ from "@/assets/excel-analyzer_question.png";
import ExcelA from "@/assets/excel-analyzer_answer.png";

export default function ExcelAnalyzer() {
  const images: TImage[] = [
    {
      imgUrl: ExcelQ.src,
      description: "Asking a question in excel analyzer",
    },
    {
      imgUrl: ExcelA.src,
      description: "Answer from excel analyzer",
    },
  ];
  const techStack = [
    "Typescript",
    "Next.JS",
    "Tailwind CSS",
    "tRPC",
    "Python",
    "FastAPI",
    "LangChain",
  ];

  return (
    <>
      <Head>
        <title>Excel Analyzer | Roh Minchul</title>
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
            Excel Analyzer
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
            Drag and drop your excel file and ask ai about the data. AI data
            analyst will answer your question.
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
          // * Github Repository
        }
        <div className="project-section">
          <p className="project-title">Github Repository</p>
          <div className="mt-2 font-medium">
            <ul className="project-ul">
              <li
                className="project-li-link"
                onClick={() =>
                  openInNewTab("https://github.com/Peter-Roh/excel-analyzer")
                }
              >
                https://github.com/Peter-Roh/excel-analyzer
              </li>
            </ul>
          </div>
        </div>
        {
          // * Demonstration Videos
        }
        <div className="project-section">
          <p className="project-title">Demonstration Videos</p>
          <div className="mt-2 font-medium">
            <ul className="project-ul">
              <li
                className="project-li-link"
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/1wVhuevswRSXXTEZk_sCsFdEy67BKFwNP/view?usp=drive_link",
                  )
                }
              >
                How to use
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
