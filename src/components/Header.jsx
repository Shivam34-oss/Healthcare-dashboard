import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <div className="card p-3 md:p-4 flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-3 bg-hc.soft rounded-xl px-3 py-2 w-full max-w-xl">
        <Search size={18} className="text-hc.subtle" />
        <input
          placeholder="Search"
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      <button className="ml-3 md:ml-4 relative rounded-full p-2 bg-hc.soft hover:shadow-pill">
        <Bell size={18} />
        <span className="absolute -top-1 -right-1 bg-hc.primary text-white text-[10px] px-1.5 py-0.5 rounded-full">2</span>
      </button>
    </div>
  );
}
