import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import HomePage from "./pages/HomePage";
import ComplaintPage from "./pages/ComplaintPage";
import TrackingPage from "./pages/TrackingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ComplaintDetailPage from "./pages/ComplaintDetailPage";

import PlaceholderPage from "./components/common/PlaceholderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public and Guest Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pengaduan" element={<ComplaintPage />} />
          <Route path="/lacak" element={<TrackingPage />} />
          <Route path="/admin/login" element={<LoginPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="pengaduan/:id" element={<ComplaintDetailPage />} />
        </Route>

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <PlaceholderPage
              title="Halaman tidak ditemukan"
              description="Halaman yang kamu cari tidak tersedia."
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
