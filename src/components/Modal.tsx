import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetModal } from "../redux/modal";
import type { RootState } from "../redux/store";

type ModalProps = {
  buttonRef: React.RefObject<HTMLButtonElement>;
};

function Modal({ buttonRef }: ModalProps) {
  const location = useLocation();
  const isOpen = useAppSelector((state: RootState) => state.modal).isOpen;
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleClickOutside(e: React.BaseSyntheticEvent | MouseEvent) {
      if (modalRef && modalRef.current && buttonRef && buttonRef.current) {
        const target = e.target as HTMLElement;
        const isOutside =
          !buttonRef.current.contains(target) &&
          !modalRef.current.contains(target);

        if (isOpen && isOutside) {
          dispatch(resetModal());
        }
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalRef, buttonRef, isOpen]);

  useEffect(() => {
    if (isOpen) {
      dispatch(resetModal());
    }
  }, [location]);

  return (
    <>
      <div
        className={`dropdown-content absolute right-0 top-[3.55rem] z-10 w-full lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        ref={modalRef}
      >
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
