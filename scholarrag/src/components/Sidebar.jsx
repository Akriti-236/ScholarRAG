import {
  Search,
  FileText,
  FolderOpen,
  Pin,
  History,
  Star,
  PlusSquare,
} from "lucide-react";

import { FaBookOpen } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-72 bg-slate-950 border-r border-slate-800 p-5 flex flex-col">

      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
          <FaBookOpen className="text-2xl text-white" />
        </div>

        <div>
          <h1 className="text-2xl font-extrabold text-white">
            ScholarRAG
          </h1>

          <p className="text-xs text-slate-400">
            Research Intelligence Platform
          </p>
        </div>
      </div>
      <p className="text-xs uppercase tracking-widest text-slate-500 mb-3 mt-2">
  Workspace
</p>

      {/* New Navigation Chat Button */}
      
        <div className="space-y-1 mt-2">

  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900 cursor-pointer transition-all">
    <PlusSquare size={18} />
    <span>New Chat</span>
  </div>

  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900 cursor-pointer transition-all">
    <Search size={18} />
    <span>Search Papers</span>
  </div>

  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900 cursor-pointer transition-all">
    <FileText size={18} />
    <span>Documents</span>
  </div>

  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900 cursor-pointer transition-all">
    <FolderOpen size={18} />
    <span>Collections</span>
  </div>

  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900 cursor-pointer transition-all">
    <Pin size={18} />
    <span>Pinned</span>
  </div>

  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900 cursor-pointer transition-all">
    <History size={18} />
    <span>Recent Activity</span>
  </div>

  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900 cursor-pointer transition-all">
    <Star size={18} />
    <span>Favorites</span>
  </div>

</div>

      {/* Profile Section */}
      <div className="mt-auto">
        <div className="bg-slate-900 p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-slate-800 transition">

          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold">
            S
          </div>

          <div>
            <p className="font-medium">
              Shruti
            </p>

            <p className="text-xs text-slate-400">
              Researcher
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}