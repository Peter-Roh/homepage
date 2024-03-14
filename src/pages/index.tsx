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
            <div>
              <h1 className="flex items-center">
                <span className="inline-block h-2 w-2 rounded-full bg-lime-500" />
                <span className="ml-2 text-lg font-semibold">Roh Minchul</span>
              </h1>
              <div className="text-sub">Software Engineer</div>
              <div className="mt-4 text-base">
                A developer profoundly committed to entrepreneurship. Passionate
                about enhancing user experience and fostering sustainable coding
                practices, striving to create intuitive and impactful digital
                solutions. Interested in many things including philosophy and
                investment. Eager to explore collaborative opportunities where
                we can push boundaries together.
              </div>
            </div>
            <div className="mt-8">
              <h1 className="text-title">Currently</h1>
              <div className="mt-4">
                Working with startup{" "}
                <span className="bg-lime-600 text-gray-100">tenacities</span>.
                Interested in learning Rust.
              </div>
            </div>
            <div className="mt-8">
              <h1 className="text-title">Tech Stacks</h1>
              <div className="mt-4">
                <ul className="mb-4 list-inside list-disc font-sans marker:text-lime-500">
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
            <div className="mt-4">
              <button
                onClick={() => router.push("/projects")}
                className="animate-shimmer inline-flex items-center justify-center rounded-md border border-lime-500 bg-[linear-gradient(110deg,#a3e635,45%,#d9f99d,55%,#a3e635)] bg-[length:200%_100%] px-3 py-2 text-sm font-medium text-gray-500 transition-colors focus:outline-none focus:ring-1 focus:ring-lime-500"
              >
                <ArchiveIcon className="mr-1" />
                Projects
              </button>
            </div>
          </div>
          <Sides />
        </div>
      </div>
    </>
  );
}
