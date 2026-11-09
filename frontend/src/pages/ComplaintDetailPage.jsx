import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import mockComplaints from "../data/mockComplaints";
import ComplaintStatusBadge from "../components/admin/ComplaintStatusBadge";

const URGENCY_CONFIG = {
  NORMAL: "Normal",
  HIGH: "Tinggi",
  URGENT: "Mendesak",
};

function ComplaintDetailPage() {
  const { id } = useParams();

  const complaint = mockComplaints.find((item) => item.id === Number(id));

  const [status, setStatus] = useState(complaint?.status ?? "OPEN");
  const [publicMessage, setPublicMessage] = useState("");
  const [savedMessage, setSavedMessage] = useState("");
  const [notification, setNotification] = useState("");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    setNotification("");
  };

  const handleMessageChange = (event) => {
    setPublicMessage(event.target.value);
    setNotification("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!complaint) return;

    if (publicMessage.trim()) {
      setSavedMessage(publicMessage.trim());
      setPublicMessage("");
    }

    setNotification(
      "Perubahan berhasil disimpan dalam simulasi. Data belum diperbarui di database.",
    );
  };

  if (!complaint) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-5 py-12">
        <div className="w-full max-w-md rounded-2xl border border-[#E1E8DF] bg-white p-8 text-center shadow-sm">
          <h1 className="text-xl font-bold text-[#174F3B]">
            Pengaduan Tidak Ditemukan
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-[#64746A]">
            Data pengaduan yang kamu cari tidak tersedia. Periksa kembali nomor
            pengaduan tersebut.
          </p>

          <Link
            to="/admin/dashboard"
            className="mt-6 inline-flex rounded-lg bg-[#174F3B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#216449]"
          >
            Kembali ke Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-8 md:py-10">
      {/* Page Heading */}
      <section className="mb-7">
        <Link
          to="/admin/dashboard"
          className="text-sm font-medium text-[#64746A] transition hover:text-[#174F3B]"
        >
          ← Daftar Pengaduan
        </Link>

        <h1 className="mt-5 text-2xl font-bold text-[#174F3B] md:text-3xl">
          Detail Pengaduan
        </h1>

        <p className="mt-2 text-sm text-[#64746A]">
          Periksa informasi laporan dan lakukan tindak lanjut.
        </p>
      </section>

      {/* Complaint Information */}
      <section className="rounded-xl border border-[#E1E8DF] bg-white p-5 shadow-sm sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#E8EEE7] pb-5">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#64746A]">
              NOMOR LAPORAN
            </p>

            <h2 className="mt-2 break-all text-xl font-bold text-[#174F3B]">
              {complaint.ticketNumber}
            </h2>
          </div>

          <ComplaintStatusBadge status={status} />
        </div>

        <div className="py-6">
          <h3 className="text-lg font-bold text-[#174F3B]">
            {complaint.subject}
          </h3>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-xs text-[#64746A]">Nama Pelapor</p>
              <p className="mt-1 font-semibold">{complaint.reporterName}</p>
            </div>

            <div>
              <p className="text-xs text-[#64746A]">Kategori</p>
              <p className="mt-1 font-semibold">{complaint.category}</p>
            </div>

            <div>
              <p className="text-xs text-[#64746A]">Lokasi Kejadian</p>
              <p className="mt-1 font-semibold">{complaint.location}</p>
            </div>

            <div>
              <p className="text-xs text-[#64746A]">Tingkat Urgensi</p>
              <p className="mt-1 font-semibold">
                {URGENCY_CONFIG[complaint.urgency] ?? "Tidak diketahui"}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#64746A]">Tanggal Laporan</p>
              <p className="mt-1 font-semibold">{complaint.createdAt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Complaint Follow-up */}
      <section className="mt-6 rounded-xl border border-[#E1E8DF] bg-white p-5 shadow-sm sm:p-7">
        <div>
          <h2 className="text-lg font-bold text-[#174F3B]">
            Tindak Lanjut Pengaduan
          </h2>

          <p className="mt-2 text-sm text-[#64746A]">
            Perbarui status dan berikan informasi kepada warga.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Status Selection */}
          <div>
            <label
              htmlFor="complaintStatus"
              className="text-sm font-semibold text-[#25352E]"
            >
              Status Pengaduan
            </label>

            <select
              id="complaintStatus"
              value={status}
              onChange={handleStatusChange}
              className="mt-2 w-full rounded-lg border border-[#DCE5DB] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#347456] focus:ring-2 focus:ring-[#347456]/10"
            >
              <option value="OPEN">Menunggu</option>
              <option value="IN_PROGRESS">Sedang Diproses</option>
              <option value="RESOLVED">Selesai</option>
            </select>
          </div>

          {/* Public Message */}
          <div>
            <label
              htmlFor="publicMessage"
              className="text-sm font-semibold text-[#25352E]"
            >
              Pesan untuk Warga
              <span className="ml-2 text-xs font-normal text-[#64746A]">
                (Opsional)
              </span>
            </label>

            <textarea
              id="publicMessage"
              value={publicMessage}
              onChange={handleMessageChange}
              rows={4}
              maxLength={1000}
              placeholder="Contoh: Pengurus RT sudah berkoordinasi dengan petugas terkait."
              className="mt-2 w-full rounded-lg border border-[#DCE5DB] px-4 py-3 text-sm outline-none transition placeholder:text-[#A0AAA2] focus:border-[#347456] focus:ring-2 focus:ring-[#347456]/10"
            />

            <p className="mt-1 text-right text-xs text-[#64746A]">
              {publicMessage.length}/1000 karakter
            </p>
          </div>

          {/* Notification */}
          {notification && (
            <div
              role="status"
              className="rounded-lg border border-[#D5E4D5] bg-[#EAF0E8] p-3 text-sm leading-relaxed text-[#174F3B]"
            >
              {notification}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-[#174F3B] px-6 py-3 font-semibold text-white transition hover:bg-[#216449] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174F3B] sm:w-auto"
          >
            Simpan Perubahan
          </button>
        </form>

        {/* Latest Public Message */}
        {savedMessage && (
          <div className="mt-6 border-t border-[#E8EEE7] pt-5">
            <h3 className="text-sm font-bold text-[#174F3B]">
              Pesan Tindak Lanjut Terakhir
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#64746A]">
              {savedMessage}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default ComplaintDetailPage;

