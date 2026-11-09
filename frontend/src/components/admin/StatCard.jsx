function StatCard({ label, value, description, accentClass }) {
  return (
    <article
      className={`min-w-0 rounded-xl border border-[#E1E8DF] border-l-4 ${accentClass} bg-white p-3 shadow-sm sm:p-5`}
    >
      <p className="text-xs font-medium text-[#64746A] sm:text-sm">{label}</p>

      <p className="mt-3 text-2xl font-bold text-[#174F3B] sm:text-3xl">
        {value}
      </p>

      <p className="mt-2 text-[11px] text-[#8A978D] sm:text-xs">
        {description}
      </p>
    </article>
  );
}

export default StatCard;
