export default function Navbar() {
  return (
    <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6">
      <input
        type="text"
        placeholder="Search papers..."
        className="bg-slate-900 px-4 py-2 rounded-lg w-96 outline-none"
      />

      <div className="flex items-center gap-4">
        <button>🔔</button>

        <button className="bg-indigo-600 px-4 py-2 rounded-lg">
          Profile
        </button>
      </div>
    </div>
  );
}