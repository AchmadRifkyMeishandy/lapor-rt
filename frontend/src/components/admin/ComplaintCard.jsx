import { Link } from "react-router-dom";
import ComplaintStatusBadge from "./ComplaintStatusBadge";

function ComplaintCard({ complaint, urgencyLabel, urgencyClass }) {
  return (
    <article className="p-4">
      {/* Complaint Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="break-words text-xs font-semibold text-[#347456]">
            {complaint.ticketNumber}
          </p>

          <h3 className="mt-2 break-words text-sm font-bold text-[#174F3B]">
            {complaint.subject}
          </h3>

          <p className="mt-1 text-xs text-[#64746A]">{complaint.category}</p>
        </div>

        <div className="shrink-0">
          <ComplaintStatusBadge status={complaint.status} />
        </div>
      </div>

      {/* Complaint Information */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="min-w-0">
          <p className="text-[11px] text-[#8A978D]">Nama Pelapor</p>

          <p className="mt-1 break-words text-xs font-semibold">
            {complaint.reporterName}
          </p>
        </div>

        <div>
          <p className="text-[11px] text-[#8A978D]">Urgensi</p>

          <p className={`mt-1 text-xs font-semibold ${urgencyClass}`}>
            {urgencyLabel}
          </p>
        </div>

        <div className="min-w-0">
          <p className="text-[11px] text-[#8A978D]">Lokasi</p>

          <p className="mt-1 break-words text-xs font-semibold">
            {complaint.location}
          </p>
        </div>

        <div>
          <p className="text-[11px] text-[#8A978D]">Tanggal</p>

          <p className="mt-1 text-xs font-semibold">{complaint.createdAt}</p>
        </div>
      </div>

      {/* Detail Action */}
      <div className="mt-4 flex justify-end border-t border-[#E8EEE7] pt-3">
        <Link
          to={`/admin/pengaduan/${complaint.id}`}
          className="text-xs font-bold text-[#347456] transition hover:text-[#174F3B]"
        >
          Lihat Detail →
        </Link>
      </div>
    </article>
  );
}

export default ComplaintCard;
