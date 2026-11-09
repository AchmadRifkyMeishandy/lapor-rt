import { useMemo, useState } from "react";
import mockComplaints from "../data/mockComplaints";
import { Link } from "react-router-dom";

import StatCard from "../components/admin/StatCard";
import ComplaintCard from "../components/admin/ComplaintCard";
import ComplaintStatusBadge from "../components/admin/ComplaintStatusBadge";

const URGENCY_CONFIG = {
  NORMAL: {
    label: "Normal",
    className: "text-slate-600",
  },
  HIGH: {
    label: "Tinggi",
    className: "text-orange-600",
  },
  URGENT: {
    label: "Mendesak",
    className: "text-red-600",
  },
};

function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  // Calculate complaint statistics.
  const statistics = {
    total: mockComplaints.length,
    open: mockComplaints.filter((complaint) => complaint.status === "OPEN")
      .length,
    inProgress: mockComplaints.filter(
      (complaint) => complaint.status === "IN_PROGRESS",
    ).length,
    resolved: mockComplaints.filter(
      (complaint) => complaint.status === "RESOLVED",
    ).length,
  };

  // Filter complaints by search term and status.
  const filteredComplaints = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return mockComplaints.filter((complaint) => {
      const searchableText = [
        complaint.ticketNumber,
        complaint.subject,
        complaint.reporterName,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(normalizedSearch);

      const matchesStatus =
        statusFilter === "ALL" || complaint.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const statisticCards = [
    {
      label: "Total Pengaduan",
      value: statistics.total,
      description: "Seluruh laporan masuk",
      accentClass: "border-l-[#174F3B]",
    },
    {
      label: "Menunggu",
      value: statistics.open,
      description: "Belum ditindaklanjuti",
      accentClass: "border-l-amber-500",
    },
    {
      label: "Sedang Diproses",
      value: statistics.inProgress,
      description: "Dalam penanganan",
      accentClass: "border-l-blue-500",
    },
    {
      label: "Selesai",
      value: statistics.resolved,
      description: "Sudah ditangani",
      accentClass: "border-l-green-600",
    },
  ];

  return (
    <main id="dashboard" className="mx-auto max-w-7xl px-5 py-8 md:py-10">
      {/* Page Heading */}
      <section className="mb-8">
        <p className="text-sm font-semibold text-[#347456]">
          PANEL PENGELOLAAN
        </p>

        <h1 className="mt-2 text-2xl font-bold text-[#174F3B] md:text-3xl">
          Dashboard Pengurus RT
        </h1>

        <p className="mt-2 text-sm text-[#64746A]">
          Pantau dan kelola pengaduan yang disampaikan oleh warga.
        </p>
      </section>

      {/* Statistics */}
      <section
        aria-label="Statistik pengaduan"
        className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
      >
        {statisticCards.map((card) => (
          <StatCard
            key={card.label}
            label={card.label}
            value={card.value}
            description={card.description}
            accentClass={card.accentClass}
          />
        ))}
      </section>

      {/* Complaint List */}
      <section
        id="complaints"
        className="mt-8 scroll-mt-24 overflow-hidden rounded-xl border border-[#E1E8DF] bg-white shadow-sm"
      >
        {/* Search and Filter */}
        <div className="border-b border-[#E8EEE7] p-5 sm:p-6">
          <div>
            <h2 className="text-lg font-bold text-[#174F3B]">
              Daftar Pengaduan
            </h2>

            <p className="mt-1 text-sm text-[#64746A]">
              Daftar laporan yang masuk dari warga.
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Cari nomor laporan, judul, atau nama pelapor..."
              aria-label="Cari pengaduan"
              className="min-w-0 flex-1 rounded-lg border border-[#DCE5DB] px-4 py-3 text-sm outline-none focus:border-[#347456] focus:ring-2 focus:ring-[#347456]/10"
            />

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              aria-label="Filter berdasarkan status"
              className="rounded-lg border border-[#DCE5DB] bg-white px-4 py-3 text-sm outline-none focus:border-[#347456]"
            >
              <option value="ALL">Semua Status</option>
              <option value="OPEN">Menunggu</option>
              <option value="IN_PROGRESS">Sedang Diproses</option>
              <option value="RESOLVED">Selesai</option>
            </select>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-[#F5F7F2] text-xs uppercase tracking-wide text-[#64746A]">
              <tr>
                <th className="px-5 py-4">Nomor Laporan</th>
                <th className="px-5 py-4">Pengaduan</th>
                <th className="px-5 py-4">Pelapor</th>
                <th className="px-5 py-4">Urgensi</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Tanggal</th>
                <th className="px-5 py-4">Aksi</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E8EEE7]">
              {filteredComplaints.map((complaint) => {
                const urgency = URGENCY_CONFIG[complaint.urgency];

                return (
                  <tr
                    key={complaint.id}
                    className="transition hover:bg-[#FAFBF9]"
                  >
                    <td className="px-5 py-4 font-semibold text-[#174F3B]">
                      {complaint.ticketNumber}
                    </td>

                    <td className="max-w-56 px-5 py-4">
                      <p className="font-semibold text-[#25352E]">
                        {complaint.subject}
                      </p>

                      <p className="mt-1 text-xs text-[#64746A]">
                        {complaint.category}
                      </p>
                    </td>

                    <td className="px-5 py-4">{complaint.reporterName}</td>

                    <td className="px-5 py-4">
                      <span
                        className={`font-semibold ${urgency?.className ?? "text-slate-600"}`}
                      >
                        {urgency?.label ?? "Tidak diketahui"}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <ComplaintStatusBadge status={complaint.status} />
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-[#64746A]">
                      {complaint.createdAt}
                    </td>

                    <td className="px-5 py-4">
                      <Link
                        to={`/admin/pengaduan/${complaint.id}`}
                        className="font-semibold text-[#347456] hover:text-[#174F3B]"
                      >
                        Detail →
                      </Link>
                    </td>
                  </tr>
                );
              })}

              {filteredComplaints.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-5 py-12 text-center text-sm text-[#64746A]"
                  >
                    Tidak ada pengaduan yang sesuai dengan pencarian.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Complaint Cards */}
        <div className="divide-y divide-[#E8EEE7] lg:hidden">
          {filteredComplaints.map((complaint) => {
            const urgency = URGENCY_CONFIG[complaint.urgency];

            return (
              <ComplaintCard
                key={complaint.id}
                complaint={complaint}
                urgencyLabel={urgency?.label ?? "Tidak diketahui"}
                urgencyClass={urgency?.className ?? "text-slate-600"}
              />
            );
          })}

          {filteredComplaints.length === 0 && (
            <div className="px-5 py-10 text-center text-sm text-[#64746A]">
              Tidak ada pengaduan yang sesuai dengan pencarian.
            </div>
          )}
        </div>

        {/* Result Information */}
        <div className="border-t border-[#E8EEE7] px-5 py-4">
          <p className="text-xs text-[#64746A]">
            Menampilkan {filteredComplaints.length} dari {mockComplaints.length}{" "}
            pengaduan.
          </p>
        </div>
      </section>

      <p className="mt-6 text-center text-xs text-[#8A978D]">
        LaporRT · Panel Administrasi Pengurus RT
      </p>
    </main>
  );
}

export default DashboardPage;
