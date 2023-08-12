import { Helmet } from "react-helmet-async";

function Home() {
  console.log("i am home");
  return (
    <>
      <Helmet>
        <title>Roh Minchul | Home</title>
      </Helmet>
      <div>home</div>
    </>
  );
}

export default Home;
