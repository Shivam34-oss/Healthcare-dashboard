import { 
  LayoutDashboard, History, CalendarDays, Stethoscope, BarChart3,
  MessageSquare, LifeBuoy, Settings
} from "lucide-react";

const NavItem = ({ icon: Icon, label, active=false }) => (
  <div className={`flex items-center gap-3 rounded-xl px-3 py-2 cursor-pointer
    ${active ? "bg-hc.soft text-hc.slate font-semibold" : "hover:bg-hc.soft text-hc.slate/80"}`}>
    <Icon size={18} />
    <span className="hidden md:inline text-sm">{label}</span>
  </div>
);

export default function Sidebar() {
  return (
    <div className="card px-3 py-4 md:py-6">
      <div className="px-2 md:px-3 pb-4 border-b">
        <span className="text-xl font-bold text-hc.slate">
           <span className="text-[#07c4e6]">Health</span>
    <span className="text-black">care.</span>
        </span>
      </div>

      <div className="mt-4 md:mt-6">
        <p className="uppercase muted px-2 text-xs">General</p>
        <div className="mt-2 space-y-1">
          <NavItem icon={LayoutDashboard} label="Dashboard" active />
          <NavItem icon={History} label="History" />
          <NavItem icon={CalendarDays} label="Calendar" />
          <NavItem icon={Stethoscope} label="Appointments" />
          <NavItem icon={BarChart3} label="Statistics" />
        </div>

        <p className="uppercase muted px-2 mt-4 md:mt-6 text-xs">Tools</p>
        <div className="mt-2 space-y-1">
          <NavItem icon={MessageSquare} label="Chat" />
          <NavItem icon={LifeBuoy} label="Support" />
        </div>
      </div>

      <div className="mt-4 md:mt-8 border-t pt-3">
        <NavItem icon={Settings} label="Setting" />
      </div>
    </div>
  );
}
