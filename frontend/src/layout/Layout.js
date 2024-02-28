import { Outlet } from "react-router-dom";
import MyNav from "../component/MyNav"

export default function Layout() {
  return (
    <>
    <MyNav/>
      <Outlet />
    </>
  );
}
