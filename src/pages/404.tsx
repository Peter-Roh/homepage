import { Helmet } from "react-helmet-async";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { resetModal } from "../redux/modal";

function NotFound() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetModal());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Roh Minchul | Not Found</title>
      </Helmet>
      <div className="page-full flex-x-center">
        <p className="mt-6 font-mono text-xl">OOPS! PAGE NOT FOUND</p>
        <p className="font-mono text-9xl font-bold text-rose-500">404</p>
      </div>
    </>
  );
}

export default NotFound;
