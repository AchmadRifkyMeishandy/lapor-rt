import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(
      "Formulir berhasil divalidasi. Autentikasi belum terhubung ke backend.",
    );
  };

  return (
    <main className="flex min-h-[70vh] w-full items-center justify-center px-5 py-12 md:py-16">
      <div className="w-full max-w-md">
        <div className="mb-7 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#174F3B] text-2xl font-bold text-white shadow-sm">
            L
          </div>

          <p className="mt-5 text-sm font-bold tracking-[0.15em] text-[#347456]">
            AREA PENGURUS RT
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#174F3B]">
            Login Admin
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-[#64746A]">
            Silakan masuk menggunakan akun pengurus untuk mengelola pengaduan
            warga.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-[#E1E8DF] bg-white p-6 shadow-sm sm:p-8"
        >
          <div>
            <label
              htmlFor="email"
              className="text-sm font-semibold text-[#25352E]"
            >
              Email <span className="text-red-600">*</span>
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              autoComplete="username"
              required
              className="mt-2 w-full rounded-lg border border-[#DCE5DB] px-4 py-3 text-sm outline-none transition placeholder:text-[#A0AAA2] focus:border-[#347456] focus:ring-2 focus:ring-[#347456]/10"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-semibold text-[#25352E]"
            >
              Password <span className="text-red-600">*</span>
            </label>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Masukkan password"
                autoComplete="current-password"
                required
                className="w-full rounded-lg border border-[#DCE5DB] px-4 py-3 pr-20 text-sm outline-none transition placeholder:text-[#A0AAA2] focus:border-[#347456] focus:ring-2 focus:ring-[#347456]/10"
              />

              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                className="absolute inset-y-0 right-3 text-xs font-semibold text-[#347456] hover:text-[#174F3B]"
              >
                {showPassword ? "Sembunyikan" : "Lihat"}
              </button>
            </div>
          </div>

          {message && (
            <div
              role="status"
              className="rounded-lg border border-[#D5E4D5] bg-[#EAF0E8] p-3 text-sm leading-relaxed text-[#174F3B]"
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-[#174F3B] px-6 py-3 font-semibold text-white transition hover:bg-[#216449] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174F3B]"
          >
            Masuk
          </button>

          <div className="border-t border-[#E8EEE7] pt-5 text-center">
            <Link
              to="/"
              className="text-sm font-medium text-[#64746A] transition hover:text-[#174F3B]"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </form>

        <p className="mt-6 text-center text-xs leading-relaxed text-[#64746A]">
          Halaman ini hanya dapat digunakan oleh pengurus RT yang memiliki akun.
        </p>
      </div>
    </main>
  );
}

export default LoginPage;
