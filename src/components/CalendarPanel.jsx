import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

export default function CalendarPanel() {
  return (
    <div className="card p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="muted">October 2021</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-hc.soft flex items-center justify-center text-sm">🧑</div>
          <button className="h-8 w-8 rounded-xl bg-hc.primary text-black flex items-center justify-center shadow-pill">
            <Plus size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mt-4">
        {["Mon 25", "Tue 26", "Wed 27", "Thu 28", "Fri 29", "Sat 30", "Sun 31"].map((d, i) => (
          <div key={d} className={`text-center py-2 rounded-xl text-sm ${i === 1 ? "bg-hc.primary text-white" : "bg-hc.soft text-hc.slate"}`}>
            {d}
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map((t, i) => (
          <div key={t} className={`text-center text-sm px-2 py-1 rounded-lg
            ${[1, 5].includes(i) ? "bg-hc.primary text-black" : "bg-hc.soft text-hc.slate"}`}>
            {t}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-2 mt-4">
        <button className="h-8 w-8 rounded-xl bg-hc.soft flex items-center justify-center"><ChevronLeft size={18} /></button>
        <button className="h-8 w-8 rounded-xl bg-hc.soft flex items-center justify-center"><ChevronRight size={18} /></button>
      </div>
    </div>
  );
}
