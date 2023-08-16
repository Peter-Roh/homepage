import { Link } from "react-router-dom";

function Modal() {
  return (
    <>
      <div className="dropdown-content absolute right-0 top-[3.55rem] z-10 w-full lg:hidden">
        <Link to="/info">
          <div className="flex w-full items-center justify-start border border-b-[1px] border-b-black bg-white py-3 pl-6 font-newsreader text-xl font-semibold lowercase">
            Info
          </div>
        </Link>
        <Link to="/projects">
          <div className="flex w-full items-center justify-start border border-b-[1px] border-b-black bg-white py-3 pl-6 font-newsreader text-xl font-semibold lowercase">
            Projects
          </div>
        </Link>
        <Link to="/contact">
          <div className="flex w-full items-center justify-start border border-b-[1px] border-b-black bg-white py-3 pl-6 font-newsreader text-xl font-semibold lowercase">
            Contact
          </div>
        </Link>
      </div>
    </>
  );
}

export default Modal;
