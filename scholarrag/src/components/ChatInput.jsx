export default function ChatInput() {
  return (
    <div className="border-t border-slate-800 p-4 flex gap-3">
      <button className="bg-slate-800 px-4 rounded-lg">
        📎 Upload
      </button>

      <input
        type="text"
        placeholder="Ask about your research..."
        className="flex-1 bg-slate-900 p-3 rounded-lg outline-none"
      />

      <button className="bg-indigo-600 px-6 rounded-lg">
        Send
      </button>
    </div>
  );
}