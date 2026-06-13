import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import ChatArea from "./components/ChatArea";
import ChatInput from "./components/ChatInput";
import SourcesPanel from "./components/SourcesPanel";

export default function App() {
  return (
    <div className="flex h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-6 flex-1 flex flex-col">
          <DashboardCards />

          <ChatArea />

          <ChatInput />
        </div>
      </div>

      <SourcesPanel />
    </div>
  );
}