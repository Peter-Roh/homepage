import { Link, useLocation } from "react-router-dom";

function Header() {
  console.log("i am header");
  const location = useLocation();
  return (
    <>
      <header className="flex items-center border-x-0 border-y-0 border-b-[1px] border-b-black lg:border-b-0">
        <div className="py-3 flex-grow lg:border-b-[1px] lg:border-b-black">
          <div className="w-fit font-lobster text-2xl lg:text-3xl ml-8 hover:animate-custom-bounce">
            <Link
              to="/"
              className="rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600"
            >
              Roh Minchul
            </Link>
          </div>
        </div>
        <button className="lg:hidden border-x-0 border-y-0 border-l-[1px] border-l-black h-14 w-14 flex-x-center focus:outline-none focus:ring-2  focus:ring-rose-600">
          <svg
            fill="none"
            className="icon"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <nav className="hidden lg:block">
          <ul className="flex">
            <Link
              className={`header-nav-li ${
                location.pathname === "/info"
                  ? "rounded-tl-lg"
                  : "!border-b-[1px] border-b-black"
              }`}
              to="/info"
            >
              <li>Info</li>
            </Link>
            <Link
              className={`header-nav-li ${
                location.pathname.startsWith("/projects")
                  ? "rounded-tl-lg"
                  : "!border-b-[1px] border-b-black"
              }`}
              to="/projects"
            >
              <li>Projects</li>
            </Link>
            <Link
              className={`header-nav-li ${
                location.pathname === "/contact"
                  ? "rounded-tl-lg"
                  : "!border-b-[1px] border-b-black"
              }`}
              to="/contact"
            >
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
