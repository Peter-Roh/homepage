import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import ImageBox from "../components/ImageBox";
import type { Image } from "../types";
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
    return ["NextJS", "TailwindCSS", "Prisma", "tRPC"];
  }, []);
  const images: Image[] = useMemo(() => {
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
      <div className="lg:w-3/5 mx-auto my-8 px-4">
        <div className="font-newsreader font-bold text-3xl mb-4">
          <p>Shopaholic</p>
        </div>
        <ImageBox images={images} />
        <div className="mt-4">
          <p className="font-newsreader font-bold text-xl">Description</p>
          <div className="mt-2 font-newsreader">
            Serverless shopping mall website designed to guarantee full-stack
            typesafety using tRPC.
          </div>
        </div>
        {
          //* Features
        }
        <div className="mt-4">
          <p className="font-newsreader font-bold text-xl">Features</p>
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
        <div className="mt-4">
          <p className="font-newsreader font-bold text-xl">Tech Stack</p>
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
        <div className="mt-4">
          <p className="font-newsreader font-bold text-xl">
            Development personnel & Duration
          </p>
          <div className="mt-2 font-newsreader">1 person, 4 month</div>
        </div>
        <div className="mt-4">
          <p className="font-newsreader font-bold text-xl">Github Repository</p>
          <div className="mt-2">
            <ul className="font-newsreader">
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
        <div className="mt-4">
          <p className="font-newsreader font-bold text-xl">
            Demonstration Videos
          </p>
          <div className="mt-2 font-newsreader">
            <ul>
              <li
                className="description-li cursor-pointer hover:underline"
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/14fhw_sjWFWYAcepmiQgMAfS4nrmgOXZE/view?usp=drive_link"
                  )
                }
              >
                Passwordless - login
              </li>
              <li
                className="description-li cursor-pointer hover:underline"
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/1UWJ15yH-X4MGThfoqn48k0PD1ilNooKH/view?usp=sharing"
                  )
                }
              >
                Demo video
              </li>
              <li
                className="description-li cursor-pointer hover:underline"
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/1wibY015qlppihqrbqNCk_BjuiPZ2ebaz/view?usp=sharing"
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
