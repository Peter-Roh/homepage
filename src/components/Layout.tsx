import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="page-full">
        <div className="flex-y min-h-screen shadow-lg shadow-slate-400 lg:mx-10 lg:my-5 lg:border-4 lg:border-double lg:border-black">
          <Header />
          <div>
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
