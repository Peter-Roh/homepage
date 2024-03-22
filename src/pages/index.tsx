import Sides from "@/components/pages/sides";
import Head from "next/head";
import { useRouter } from "next/router";

import { ArchiveIcon } from "@radix-ui/react-icons";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Roh Minchul</title>
      </Head>
      <div className="page">
        <div className="flex min-h-full flex-col lg:flex-row">
          <div className="lg:flex-8 mb-5 lg:mb-0 lg:flex-1">
            {
              // * 이름, 직업 및 소개
            }
            <div>
              <h1 className="flex items-center">
                <span className="inline-block h-2 w-2 rounded-full bg-lime-500" />
                <span className="ml-2 text-lg font-semibold">Roh Minchul</span>
              </h1>
              <div className="text-sub">Software Engineer</div>
              <div className="mt-4 text-base">
                A developer profoundly committed to{" "}
                <span className="text-amber-300">entrepreneurship</span>.
                Passionate about enhancing{" "}
                <span className="text-amber-300">user experience</span> and
                fostering{" "}
                <span className="text-amber-300">
                  sustainable coding practices
                </span>
                , striving to create intuitive and impactful digital solutions.
                Interested in many things including{" "}
                <span className="text-orange-500">philosophy</span> and{" "}
                <span className="text-orange-500">investment</span>. Eager to
                explore collaborative opportunities where we can push boundaries
                together.
              </div>
            </div>
            {
              // * 현재 상황
            }
            <div className="mt-8">
              <h1 className="text-title">Currently</h1>
              <div className="mt-2">
                Working with startup{" "}
                <span className="bg-lime-600 text-gray-100">tenacities</span>.
                Interested in learning{" "}
                <span className="font-semibold text-[#EF4902]">Rust</span>.
              </div>
            </div>
            {
              // * Tech Stack
            }
            <div className="mt-8">
              <h1 className="text-title">Tech Stack</h1>
              <div className="mt-2">
                <ul className="list-inside list-disc font-sans marker:text-lime-500">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Zod</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>React Query</li>
                  <li>React Hook Form</li>
                  <li>Next.JS</li>
                  <li>Prisma</li>
                  <li>tRPC</li>
                </ul>
              </div>
            </div>
            {
              // * projects 버튼
            }
            <div className="mt-4">
              <button
                onClick={() => router.push("/projects")}
                className="inline-flex animate-shimmer items-center justify-center rounded-md border border-lime-500 bg-[linear-gradient(110deg,#a3e635,45%,#d9f99d,55%,#a3e635)] bg-[length:200%_100%] px-3 py-2 text-sm font-medium text-gray-500 transition-colors focus:outline-none focus:ring-1 focus:ring-lime-500"
              >
                <ArchiveIcon className="mr-1" />
                Projects
              </button>
            </div>
            {
              // * 장점
            }
            <div className="mt-4">
              <h1 className="text-title">Strengths</h1>
              <div className="mt-2">
                <ul className="list-inside list-disc font-sans marker:text-lime-500">
                  <li>analytical thinking</li>
                  <li>
                    learning from experiences and failures, as well as from
                    those who excel in their fields
                  </li>
                  <li>
                    resilience and adaptability in the face of challenges,
                    drawing from hands-on startup and project experiences that
                    ranged from failures to successes
                  </li>
                  <li>
                    skilled in clear and effective communication, complemented
                    by active listening to truly understand others, enhancing
                    decision-making and ensuring mission objectives are achieved
                    efficiently and effectively
                  </li>
                </ul>
              </div>
            </div>
            {
              // * 언어 능력
            }
            <div className="mt-4">
              <h1 className="text-title">Languages</h1>
              <div className="mt-2">Fluent in English and native in Korean</div>
            </div>
            {
              // * 기타
            }
            <div className="mt-4">
              <h1 className="text-title">Miscellaneous</h1>
              <div className="mt-2">
                <ul className="list-inside list-disc font-sans marker:text-lime-500">
                  <li>
                    Three of my favorite things on the internet are{" "}
                    <a
                      href="https://obsidian.md/"
                      target="_blank"
                      className="font-semibold text-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700"
                    >
                      Obsidian
                    </a>
                    ,{" "}
                    <a
                      href="https://plato.stanford.edu/"
                      target="_blank"
                      className="font-semibold text-[#8B1515] focus:outline-none focus:ring-1 focus:ring-[#8B1515]"
                    >
                      Stanford Encyclopedia of Philosophy
                    </a>
                    , and{" "}
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      className="font-semibold text-[#FF0000] focus:outline-none focus:ring-1 focus:ring-[#FF0000]"
                    >
                      YouTube
                    </a>
                    .
                  </li>
                  <li>One day, I will learn French and German.</li>
                  <li>I love listening to the history of Ancient Egypt.</li>
                  <li>
                    Bitcoin is an astonishing concept and I realized it too
                    late.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Sides />
        </div>
      </div>
    </>
  );
}
