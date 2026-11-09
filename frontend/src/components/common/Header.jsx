import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle navigation and section scrolling.
  useEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1));

      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, location.hash]);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E1E8DF] bg-[#F5F7F2]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3"
        >
          <img src="/favicon.svg" alt="Logo LaporRT" className="h-10 w-10" />

          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#174F3B]">
              LaporRT
            </h1>

            <p className="text-xs tracking-wide text-[#64746A]">
              LAYANAN ASPIRASI WARGA
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-8 md:flex"
        >
          <Link
            to="/"
            className="text-base font-semibold text-[#174F3B] transition hover:text-[#347456]"
          >
            Beranda
          </Link>

          <Link
            to="/#alur-pengaduan"
            className="text-base font-semibold text-[#174F3B] transition hover:text-[#347456]"
          >
            Cara Kerja
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Tutup navigasi" : "Buka navigasi"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#DCE5DB] px-3 transition hover:bg-[#E8EFE7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174F3B] md:hidden"
        >
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-[#174F3B] transition-transform duration-200 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 rounded-full bg-[#174F3B] transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 rounded-full bg-[#174F3B] transition-transform duration-200 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>

          <span className="text-sm font-semibold text-[#174F3B]">
            {isMenuOpen ? "Tutup" : "Menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigasi mobile"
          className="border-t border-[#E1E8DF] bg-white px-5 py-3 shadow-md md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex min-h-12 items-center rounded-lg px-3 text-base font-semibold text-[#174F3B] hover:bg-[#F5F7F2]"
            >
              Beranda
            </Link>

            <Link
              to="/#alur-pengaduan"
              onClick={closeMobileMenu}
              className="flex min-h-12 items-center rounded-lg px-3 text-base font-semibold text-[#174F3B] hover:bg-[#F5F7F2]"
            >
              Cara Kerja
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
