
import { Outlet } from "react-router-dom";
import Navebar from "../Navebar";

const Layout = () => {
  return <>
  <Navebar/>
  <div className="mx-auto my-6 container py-6">
  <Outlet/>
  </div>
  </>
};

export default Layout;