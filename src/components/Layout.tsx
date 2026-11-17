import { Outlet } from "react-router";
import Sidebar from "./sidebar";
import Topbar from "./Topbar";

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
}
