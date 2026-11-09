import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function AdminLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle navigation scrolling after the page renders.
  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const targetId = decodeURIComponent(location.hash.slice(1));

        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return;
      }

      window.scrollTo({ top: 0, behavior: "auto" });
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-[#F5F7F2] text-[#25352E]">
      <header className="sticky top-0 z-50 border-b border-[#E1E8DF] bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-5 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/admin/dashboard"
              onClick={closeMobileMenu}
              className="flex flex-col"
            >
              <span className="text-xl font-bold text-[#174F3B]">LaporRT</span>

              <span className="text-xs text-[#64746A]">ADMINISTRATOR</span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Navigasi admin"
              className="hidden items-center gap-5 text-sm font-medium lg:flex"
            >
              <Link
                to="/admin/dashboard"
                onClick={closeMobileMenu}
                className="text-[#64746A] transition hover:text-[#174F3B]"
              >
                Dashboard
              </Link>

              <Link
                to="/admin/dashboard#complaints"
                onClick={closeMobileMenu}
                className="text-[#64746A] transition hover:text-[#174F3B]"
              >
                Pengaduan
              </Link>

              <Link
                to="/admin/login"
                className="rounded-lg border border-[#DCE5DB] px-4 py-2 text-[#174F3B] transition hover:bg-[#F5F7F2]"
              >
                Keluar
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((previous) => !previous)}
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-admin-navigation"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#DCE5DB] transition hover:bg-[#F5F7F2] lg:hidden"
            >
              <span className="h-0.5 w-5 rounded-full bg-[#174F3B]" />
              <span className="h-0.5 w-5 rounded-full bg-[#174F3B]" />
              <span className="h-0.5 w-5 rounded-full bg-[#174F3B]" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav
              id="mobile-admin-navigation"
              aria-label="Navigasi admin mobile"
              className="mt-4 space-y-1 border-t border-[#E8EEE7] pt-3 lg:hidden"
            >
              <Link
                to="/admin/dashboard"
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-[#64746A] transition hover:bg-[#F5F7F2] hover:text-[#174F3B]"
              >
                Dashboard
              </Link>

              <Link
                to="/admin/dashboard#complaints"
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-[#64746A] transition hover:bg-[#F5F7F2] hover:text-[#174F3B]"
              >
                Pengaduan
              </Link>

              <Link
                to="/admin/login"
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-[#64746A] transition hover:bg-[#F5F7F2] hover:text-[#174F3B]"
              >
                Keluar
              </Link>
            </nav>
          )}
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default AdminLayout;
