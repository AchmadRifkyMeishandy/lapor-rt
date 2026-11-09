const STATUS_CONFIG = {
  OPEN: {
    label: "Menunggu",
    className: "bg-amber-50 text-amber-700",
  },
  IN_PROGRESS: {
    label: "Sedang Diproses",
    className: "bg-blue-50 text-blue-700",
  },
  RESOLVED: {
    label: "Selesai",
    className: "bg-green-50 text-green-700",
  },
};

function ComplaintStatusBadge({ status }) {
  const statusConfig = STATUS_CONFIG[status];

  if (!statusConfig) {
    return (
      <span className="inline-flex rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
        Status Tidak Dikenal
      </span>
    );
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${statusConfig.className}`}
    >
      {statusConfig.label}
    </span>
  );
}

export default ComplaintStatusBadge;
