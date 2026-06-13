export default function ChatArea() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="mb-8">
        <p className="font-bold mb-2">
          You
        </p>

        <div className="bg-slate-800 p-4 rounded-lg inline-block">
          Explain Retrieval Augmented Generation
        </div>
      </div>

      <div>
        <p className="font-bold text-indigo-400 mb-2">
          ScholarRAG
        </p>

        <div className="bg-slate-900 p-4 rounded-lg">
          Retrieval-Augmented Generation combines
          retrieval systems with LLMs to generate
          grounded responses using external
          knowledge sources.
        </div>
      </div>
    </div>
  );
}