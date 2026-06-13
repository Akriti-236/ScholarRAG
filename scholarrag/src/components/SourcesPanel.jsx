export default function SourcesPanel() {
  return (
    <div className="w-96 border-l border-slate-800 p-5">
      <h2 className="text-xl font-bold mb-5">
        Sources
      </h2>

      <div className="space-y-4">
        <div className="bg-slate-900 p-4 rounded-lg">
          <h3 className="font-semibold">
            RAG Research Paper
          </h3>

          <p className="text-slate-400">
            Similarity: 94%
          </p>
        </div>

        <div className="bg-slate-900 p-4 rounded-lg">
          <h3 className="font-semibold">
            Vector Database Guide
          </h3>

          <p className="text-slate-400">
            Similarity: 91%
          </p>
        </div>

        <div className="bg-slate-900 p-4 rounded-lg">
          <h3 className="font-semibold">
            Attention Is All You Need
          </h3>

          <p className="text-slate-400">
            Similarity: 89%
          </p>
        </div>
      </div>
    </div>
  );
}