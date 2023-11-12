import { Outlet } from "react-router-dom";
import Aside from "../../components/Aside";
import Navbar from "../../components/Navbar";

const LearnLayout = () => {
  return (
    <div className="learn-layout">
      <Aside />

      <div className="ml-72">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default LearnLayout;
