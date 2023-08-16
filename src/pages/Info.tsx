import { Helmet } from "react-helmet-async";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { resetModal } from "../redux/modal";

function Info() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetModal());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Roh Minchul | Info</title>
      </Helmet>
      <div>info</div>
    </>
  );
}

export default Info;
