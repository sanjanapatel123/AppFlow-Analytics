export default function ErrorState() {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
      <h3 className="font-semibold text-red-600">Failed to load dashboard</h3>

      <p className="mt-2 text-sm text-red-500">Please try again later.</p>
    </div>
  );
}
