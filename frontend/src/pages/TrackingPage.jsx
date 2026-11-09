import { useState } from "react";
import { Link } from "react-router-dom";

const DEMO_TICKET_NUMBER = "LPR-DEMO-0001";
const DEMO_SECRET_CODE = "DEMO-123456";

function TrackingPage() {
  const [formData, setFormData] = useState({
    ticketNumber: "",
    secretCode: "",
  });

  const [complaint, setComplaint] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setComplaint(null);
    setErrorMessage("");

    const ticketNumber = formData.ticketNumber.trim().toUpperCase();
    const secretCode = formData.secretCode.trim();

    if (
      ticketNumber === DEMO_TICKET_NUMBER &&
      secretCode === DEMO_SECRET_CODE
    ) {
      setComplaint({
        subject: "Perbaikan lampu jalan lingkungan",
        category: "Infrastruktur dan Jalan",
        location: "Jalan Melati, dekat pos ronda",
        status: "IN_PROGRESS",
        createdAt: "7 November 2026",
        updatedAt: "7 November 2026",
        publicMessage:
          "Laporan telah diterima dan sedang ditindaklanjuti oleh pengurus RT.",
      });

      return;
    }

    setErrorMessage(
      "Nomor Laporan atau Kode Rahasia tidak sesuai. Silakan periksa kembali.",
    );
  };

  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-3xl px-5 py-12 md:py-16">
      <div className="mb-8">
        <Link
          to="/"
          className="text-sm font-medium text-[#64746A] hover:text-[#174F3B]"
        >
          ← Kembali ke Beranda
        </Link>

        <p className="mt-7 text-sm font-bold tracking-[0.15em] text-[#347456]">
          PANTAU PERKEMBANGAN LAPORAN
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#174F3B] md:text-4xl">
          Lacak Pengaduan
        </h1>

        <p className="mt-4 leading-relaxed text-[#64746A]">
          Masukkan Nomor Laporan dan Kode Rahasia yang kamu terima setelah
          mengirim pengaduan untuk melihat perkembangan penanganannya.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-[#E1E8DF] bg-white p-5 shadow-sm sm:p-8"
      >
        <div>
          <label
            htmlFor="ticketNumber"
            className="text-sm font-semibold text-[#25352E]"
          >
            Nomor Laporan <span className="text-red-600">*</span>
          </label>

          <input
            type="text"
            id="ticketNumber"
            name="ticketNumber"
            value={formData.ticketNumber}
            onChange={handleChange}
            placeholder="Contoh: LPR-2026-0001"
            required
            className="mt-2 w-full rounded-lg border border-[#DCE5DB] px-4 py-3 text-sm outline-none transition placeholder:text-[#A0AAA2] focus:border-[#347456] focus:ring-2 focus:ring-[#347456]/10"
          />
        </div>

        <div>
          <label
            htmlFor="secretCode"
            className="text-sm font-semibold text-[#25352E]"
          >
            Kode Rahasia <span className="text-red-600">*</span>
          </label>

          <input
            type="password"
            id="secretCode"
            name="secretCode"
            value={formData.secretCode}
            onChange={handleChange}
            placeholder="Masukkan kode rahasia"
            required
            className="mt-2 w-full rounded-lg border border-[#DCE5DB] px-4 py-3 text-sm outline-none transition placeholder:text-[#A0AAA2] focus:border-[#347456] focus:ring-2 focus:ring-[#347456]/10"
          />

          <p className="mt-2 text-xs text-[#64746A]">
            Kode Rahasia digunakan untuk menjaga agar informasi laporan hanya
            dapat diakses oleh pemilik kode.
          </p>
        </div>

        {errorMessage && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
          >
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-[#174F3B] px-6 py-3 font-semibold text-white transition hover:bg-[#216449] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174F3B]"
        >
          Lacak Laporan
        </button>
      </form>

      {complaint && (
        <section
          aria-live="polite"
          className="mt-8 space-y-6 rounded-2xl border border-[#DCE5DB] bg-white p-5 shadow-sm sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#64746A]">
                HASIL PELACAKAN
              </p>
              <h2 className="mt-1 text-xl font-bold text-[#174F3B]">
                {complaint.subject}
              </h2>
            </div>

            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
              Sedang Diproses
            </span>
          </div>

          <div className="grid gap-4 border-y border-[#E8EEE7] py-5 sm:grid-cols-2">
            <div>
              <p className="text-xs text-[#64746A]">Kategori</p>
              <p className="mt-1 text-sm font-semibold">{complaint.category}</p>
            </div>

            <div>
              <p className="text-xs text-[#64746A]">Lokasi Kejadian</p>
              <p className="mt-1 text-sm font-semibold">{complaint.location}</p>
            </div>

            <div>
              <p className="text-xs text-[#64746A]">Tanggal Laporan</p>
              <p className="mt-1 text-sm font-semibold">
                {complaint.createdAt}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#64746A]">Pembaruan Terakhir</p>
              <p className="mt-1 text-sm font-semibold">
                {complaint.updatedAt}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#174F3B]">Informasi Penanganan</h3>

            <div className="mt-3 rounded-lg bg-[#F5F7F2] p-4">
              <p className="text-sm leading-relaxed text-[#64746A]">
                {complaint.publicMessage}
              </p>
            </div>
          </div>
        </section>
      )}

      <div className="mt-6 rounded-xl border border-[#D5E4D5] bg-[#EAF0E8] p-4">
        <p className="text-sm font-semibold text-[#174F3B]">
          Informasi pengujian
        </p>

        <p className="mt-2 text-xs leading-relaxed text-[#64746A]">
          Halaman ini masih menggunakan data simulasi. Untuk mencoba, gunakan:
        </p>

        <p className="mt-2 text-xs text-[#174F3B]">
          Nomor Laporan: <strong>{DEMO_TICKET_NUMBER}</strong>
        </p>

        <p className="mt-1 text-xs text-[#174F3B]">
          Kode Rahasia: <strong>{DEMO_SECRET_CODE}</strong>
        </p>
      </div>
    </main>
  );
}

export default TrackingPage;
