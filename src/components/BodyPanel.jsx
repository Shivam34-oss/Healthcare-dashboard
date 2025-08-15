import Body from "../assets/body.jpg"
 export default function BodyPanel() {
  return (
    <div className="relative card overflow-hidden">
      <div className="p-4 md:p-6">
        <div className="relative mx-auto max-w-[320px]">
          <div className="absolute right-2 top-2 bg-white/80 rounded-full p-2 shadow-pill text-hc.slate text-xs">🔍</div>

          <svg viewBox="0 0 200 480" className="w-full drop-shadow">
            <defs>
              <linearGradient id="skin" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#f9c6af"/>
                <stop offset="100%" stopColor="#e3a590"/>
              </linearGradient>
            </defs>
            <img src={Body} alt="body" />
          </svg>

          <div className="absolute left-1/2 -translate-x-1/2 top-[90px]">
            <div className="bg-white shadow-pill rounded-xl px-3 py-1.5 text-sm flex items-center gap-2">
              <span className="text-red-500">❤️</span>
              <span>Healthy Heart</span>
            </div>
          </div>

          <div className="absolute left-[10%] top-[240px]">
            <div className="rounded-full px-3 py-1.5 text-sm flex items-center gap-2 bg-teal-400 text-white shadow-pill">
              <span>▶</span>
              <span>Healthy Leg</span>
            </div>
          </div>

          <div className="mt-2 flex justify-center">
            <div className="h-1.5 w-28 bg-hc.soft rounded-full relative">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-4 w-4 bg-hc.primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
