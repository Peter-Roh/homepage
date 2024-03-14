import Head from "next/head";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

import ShopaholicImg from "@/assets/shopaholic.png";
import ShopaholicItemImg from "@/assets/shopaholic_item.png";
import ShopaholicReportImg from "@/assets/shopaholic_report.png";
import type { TImage } from "@/components/pages/Carousel";
import Carousel from "@/components/pages/Carousel";
import { openInNewTab } from "@/lib/utils";

export default function Shopaholic() {
  const images: TImage[] = [
    {
      imgUrl: ShopaholicImg.src,
      description: "Main Page",
    },
    {
      imgUrl: ShopaholicItemImg.src,
      description: "Item Page ( Mobile )",
    },
    {
      imgUrl: ShopaholicReportImg.src,
      description: "Sales Report Page",
    },
  ];
  const techStack = ["Typescript", "Next.JS", "Tailwind CSS", "Prisma", "tRPC"];
  const features = [
    "Responsive Design",
    "CRUD operations with tRPC and Prisma",
    "Full-stack type safety",
    "Passwordless - login",
    "Rate limiting using upstash",
    "Store and optimize images using Cloudflare Images",
    "Live streaming using Cloudflare Stream",
  ];

  return (
    <>
      <Head>
        <title>Shopaholic | Roh Minchul</title>
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
            Shopaholic
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
            Serverless shopping mall website designed to guarantee full-stack
            type safety using tRPC.
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
          <div className="mt-2 font-medium">1 person, 4 months</div>
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
                  openInNewTab("https://github.com/Peter-Roh/shopaholic")
                }
              >
                https://github.com/Peter-Roh/shopaholic
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
                    "https://drive.google.com/file/d/14fhw_sjWFWYAcepmiQgMAfS4nrmgOXZE/view?usp=drive_link",
                  )
                }
              >
                Passwordless - login
              </li>
              <li
                className="project-li-link"
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/1UWJ15yH-X4MGThfoqn48k0PD1ilNooKH/view?usp=sharing",
                  )
                }
              >
                Demo video
              </li>
              <li
                className="project-li-link"
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/1wibY015qlppihqrbqNCk_BjuiPZ2ebaz/view?usp=sharing",
                  )
                }
              >
                Live streaming
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
