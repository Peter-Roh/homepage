import { Outlet } from "react-router-dom";

function Layout() {
  console.log("i am layout");
  return (
    <>
      <div>
        <div>i am layout</div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
