import { Helmet } from "react-helmet-async";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { resetModal } from "../redux/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
        <meta property="og:title" content="Roh Minchul | Contact" />
        <meta property="og:url" content="https://peter-roh.github.io/contact" />
      </Helmet>
      <div>
        <div className="flex-x-center mt-32">
          <p className="text-center font-newsreader text-7xl">
            Let&apos;s talk
          </p>
        </div>
        <div className="flex-x-center mt-16 px-4">
          <p className="text-center font-newsreader">
            Thank you for visiting my website. Please contact me via email for
            any reasons.
          </p>
        </div>
        <div className="flex-y-center mx-auto mb-32 mt-16 w-fit lg:w-1/3">
          <div>
            <div className="flex items-center justify-start break-all px-1">
              <span role="img" aria-label="email" className="w-16 text-center">
                <p className="text-4xl">📧</p>
              </span>
              <span className="font-newsreader text-lg">
                minchul.roh.peter@gmail.com
              </span>
            </div>
            <div className="flex items-center justify-start break-all px-1">
              <span className="w-16 text-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="xl"
                  color="#dc2626"
                />
              </span>
              <span className="font-newsreader text-lg">
                Gunpo-si, Gyeonggi-do, Republic of Korea
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
