// /src/components/StatCard.jsx
export default function StatCard({ label, value, hint }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm border">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-3xl font-semibold mt-1">{value}</div>
      {hint && <div className="text-xs text-gray-400 mt-1">{hint}</div>}
    </div>
  );
}
