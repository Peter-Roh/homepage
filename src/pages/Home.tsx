import { Helmet } from "react-helmet-async";

function Home() {
  console.log("i am home");
  return (
    <>
      <Helmet>
        <title>Roh Minchul | Home</title>
      </Helmet>
      <div className="h-80 border-dotted border-b-[1px] border-b-black flex-x-center">
        <p className="lg:w-1/3 text-center font-newsreader font-medium text-3xl leading-10">
          Hello, I am Roh Minchul, a freelancer developer and mathematics
          teacher.
        </p>
      </div>
      <div className="h-60 border-b-[1px] border-b-black flex-x-center">
        <p className="lg:w-4/5 text-center font-newsreader font-medium text-xl leading-8">
          I code, read, think, and write. I teach mathematics and do
          programming. I am into philosophy and investment.
        </p>
      </div>
      <div className="h-60 px-12 flex-y-center">
        <div className="flex flex-col justify-center items-start">
          <div className="mb-4">
            <p className="font-mono font-bold underline underline-offset-2">
              Skills and Tools
            </p>
          </div>
          <div>
            <div className="inline-block">
              <img
                alt="HTML5"
                src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="CSS3"
                src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="JavaScript"
                src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              />
            </div>
            <div className="inline-block">
              <img
                alt="TypeScript"
                src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="React"
                src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"
              />
            </div>
            <div className="inline-block">
              <img
                alt="NextJS"
                src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="TailwindCSS"
                src="https://img.shields.io/badge/tailwindcss%20-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="Sass"
                src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="Prisma"
                src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="tRPC"
                src="https://img.shields.io/badge/tRPC-2596BE.svg?style=for-the-badge&logo=tRPC&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="LaTeX"
                src="https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white"
              />
            </div>
            <div className="inline-block">
              <img
                alt="Visual Studio Code"
                src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
