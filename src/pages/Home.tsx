import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { resetModal } from "../redux/modal";
import { useAppDispatch } from "../redux/hooks";

type badge = {
  name: string;
  url: string;
};

function Home() {
  const dispatch = useAppDispatch();
  const badges: badge[] = [
    {
      name: "HTML5",
      url: "https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white",
    },
    {
      name: "CSS3",
      url: "https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white",
    },
    {
      name: "Sass",
      url: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
    },
    {
      name: "TailwindCSS",
      url: "https://img.shields.io/badge/tailwindcss%20-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white",
    },
    {
      name: "JavaScript",
      url: "https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    },
    {
      name: "TypeScript",
      url: "https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white",
    },
    {
      name: "zod",
      url: "https://img.shields.io/badge/Zod-3E67B1?logo=zod&logoColor=fff&style=for-the-badge",
    },
    {
      name: "React",
      url: "https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB",
    },
    {
      name: "Redux",
      url: "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
    },
    {
      name: "React Query",
      url: "https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white",
    },
    {
      name: "React Hook Form",
      url: "https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white",
    },
    {
      name: "NextJS",
      url: "https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
    },
    {
      name: "Prisma",
      url: "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white",
    },
    {
      name: "tRPC",
      url: "https://img.shields.io/badge/tRPC-2596BE.svg?style=for-the-badge&logo=tRPC&logoColor=white",
    },
    {
      name: "git",
      url: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
    },
    {
      name: "Visual Studio Code",
      url: "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white",
    },
    {
      name: "LaTeX",
      url: "https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white",
    },
    {
      name: "MacOS",
      url: "https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0",
    },
  ];

  useEffect(() => {
    return () => {
      dispatch(resetModal());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Roh Minchul | Home</title>
      </Helmet>
      <div className="flex-x-center h-80 border-b-[1px] border-dotted border-b-black">
        <p className="text-center font-newsreader text-3xl font-medium leading-10 lg:w-1/3">
          Hello, I am
          <span className="font-bold text-cyan-500"> Roh Minchul</span>, a
          freelancer developer and mathematics teacher.
        </p>
      </div>
      <div className="flex-x-center h-60 border-b-[1px] border-b-black">
        <p className="text-center font-newsreader text-xl font-medium leading-8 lg:w-3/5">
          I code, read, think, and write. I teach mathematics and do
          programming. I am into philosophy and investment. My dream is to
          become a philosopher.
        </p>
      </div>
      <div className="flex-y-center px-10 py-16 lg:h-60 lg:px-28">
        <div className="flex flex-col items-start justify-center">
          <div className="mb-4">
            <p className="font-mono font-bold underline underline-offset-2">
              Skills and Tools
            </p>
          </div>
          <div className="leading-4">
            {badges.map((badge) => {
              return (
                <div key={badge.name} className="inline-block">
                  <img
                    alt={badge.name}
                    src={badge.url}
                    height="28px"
                    width="100%"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
