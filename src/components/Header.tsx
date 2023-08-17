import { Link, useLocation } from "react-router-dom";
import type { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetModal, toggleOpen } from "../redux/modal";
import Modal from "./Modal";
import { useEffect, useMemo, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

type menu = {
  url: string;
  name: string;
};

function Header() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const parent = useRef(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isOpen = useAppSelector((state: RootState) => state.modal).isOpen;

  const menus: menu[] = useMemo(
    () => [
      {
        name: "Projects",
        url: "/projects",
      },
      {
        name: "Contact",
        url: "/contact",
      },
    ],
    [],
  );

  useEffect(() => {
    parent.current &&
      autoAnimate(parent.current, {
        duration: 200,
        easing: "ease-out",
        disrespectUserMotionPreference: false,
      });
  }, [parent]);

  useEffect(() => {
    if (isOpen) {
      dispatch(resetModal());
    }
  }, [location]);

  return (
    <>
      <header
        className="z-40 flex items-center border-x-0 border-y-0 border-b-[1px] border-b-black lg:border-b-0"
        ref={parent}
      >
        <div className="flex-grow py-3 lg:border-b-[1px] lg:border-b-black">
          <div className="ml-8 w-fit font-lobster text-2xl hover:animate-custom-bounce lg:text-3xl">
            <Link
              to="/"
              className="rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2"
            >
              Roh Minchul
            </Link>
          </div>
        </div>
        <button
          className="flex-x-center h-14 w-14 border-x-0 border-y-0 border-l-[1px] border-l-black focus:outline-none focus:ring-2 focus:ring-rose-600  lg:hidden"
          aria-label="menu"
          onClick={() => dispatch(toggleOpen())}
          ref={buttonRef}
        >
          {
            // * hamburger
          }
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
        <div className="hidden lg:block">
          <div className="flex">
            {menus.map((menu) => {
              return (
                <Link
                  key={menu.name}
                  className={`header-nav-li ${
                    location.pathname.startsWith(menu.url)
                      ? "rounded-tl-lg"
                      : "!border-b-[1px] border-b-black"
                  }`}
                  to={menu.url}
                >
                  <div>{menu.name}</div>
                </Link>
              );
            })}
          </div>
        </div>
        {useAppSelector((state: RootState) => state.modal).isOpen && (
          <Modal buttonRef={buttonRef} />
        )}
      </header>
    </>
  );
}

export default Header;
