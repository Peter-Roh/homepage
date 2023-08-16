import { Helmet } from "react-helmet-async";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { resetModal } from "../redux/modal";

function Contact() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetModal());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Roh Minchul | Contact</title>
      </Helmet>
      <div>contact</div>
    </>
  );
}

export default Contact;
