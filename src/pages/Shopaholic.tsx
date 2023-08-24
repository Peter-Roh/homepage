import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import ImageBox from "../components/ImageBox";
import type { TImage } from "../types";
import ShopaholicMain from "../assets/shopaholic.png";
import ShopaholicItem from "../assets/shopaholic_item.png";
import ShopaholicReport from "../assets/shopaholic_report.png";
import { openInNewTab } from "../utils/common";

function Shopaholic() {
  const features = useMemo(() => {
    return [
      "Responsive Design",
      "CRUD operations with tRPC and Prisma",
      "Full-stack typesafety",
      "Passwordless - login",
      "Rate limiting using upstash",
      "Store and optimize images using Cloudflare Images",
      "Live streaming using Cloudflare Stream",
    ];
  }, []);

  const techStack = useMemo(() => {
    return ["Typescript", "NextJS", "TailwindCSS", "Prisma", "tRPC"];
  }, []);

  const images: TImage[] = useMemo(() => {
    return [
      {
        imgUrl: ShopaholicMain,
        title: "Main Page",
      },
      {
        imgUrl: ShopaholicItem,
        title: "Item Page ( Mobile )",
      },
      {
        imgUrl: ShopaholicReport,
        title: "Sales Report Page",
      },
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Roh Minchul | Shopaholic</title>
      </Helmet>
      <div className="mx-auto my-8 px-4 lg:w-3/5">
        <div className="mb-4 font-newsreader text-3xl font-bold">
          <p>Shopaholic</p>
        </div>
        <ImageBox images={images} />
        {
          //* Description
        }
        <div className="project-description-margin">
          <p className="project-sm-title">Description</p>
          <div className="mt-2 font-newsreader">
            Serverless shopping mall website designed to guarantee full-stack
            typesafety using tRPC.
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
          <div className="mt-2 font-newsreader">1 person, 4 month</div>
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
                  openInNewTab("https://github.com/Peter-Roh/shopaholic")
                }
              >
                https://github.com/Peter-Roh/shopaholic
              </li>
            </ul>
          </div>
        </div>
        {
          //* Demonstration Videos
        }
        <div className="project-description-margin">
          <p className="project-sm-title">Demonstration Videos</p>
          <div className="mt-2 font-newsreader">
            <ul>
              <li
                className="description-li cursor-pointer hover:underline"
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/14fhw_sjWFWYAcepmiQgMAfS4nrmgOXZE/view?usp=drive_link",
                  )
                }
              >
                Passwordless - login
              </li>
              <li
                className="description-li cursor-pointer hover:underline"
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/1UWJ15yH-X4MGThfoqn48k0PD1ilNooKH/view?usp=sharing",
                  )
                }
              >
                Demo video
              </li>
              <li
                className="description-li cursor-pointer hover:underline"
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

export default Shopaholic;
