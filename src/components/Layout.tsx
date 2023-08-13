import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  console.log("i am layout");
  return (
    <>
      <div className="page-full">
        <div className="flex-y min-h-screen lg:border-double lg:border-4 lg:border-black lg:mx-10 lg:my-5">
          <Header />
          <div className="overflow-scroll">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
