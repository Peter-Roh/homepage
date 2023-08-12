import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Home() {
  console.log("i am home");
  return (
    <>
      <Helmet>
        <title>Roh Minchul | Home</title>
      </Helmet>
      <div className="underline">home</div>
      <Link to="/test">link</Link>
    </>
  );
}

export default Home;
