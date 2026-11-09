import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F7F2] text-[#25352E]">
      {/* Public Header */}
      <Header />

      {/* Active Public Page */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Public Footer */}
      <Footer />
    </div>
  );
}

export default PublicLayout;
