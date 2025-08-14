const data = [
  { day: "Mon", a: 30, b: 18 },
  { day: "Tues", a: 50, b: 30 },
  { day: "Wed", a: 28, b: 24 },
  { day: "Thurs", a: 52, b: 35 },
  { day: "Fri", a: 38, b: 20 },
  { day: "Sat", a: 60, b: 42 },
  { day: "Sun", a: 34, b: 22 },
];

export default function ActivityChart() {
  return (
    <div className="grid grid-cols-7 gap-3">
      {data.map((d) => (
        <div key={d.day} className="flex flex-col items-center justify-end h-40">
          <div className="flex items-end gap-1 w-8">
            <div className="w-3 bg-hc.primary/80 rounded-md" style={{ height: `${d.a}%` }} />
            <div className="w-3 bg-hc.violet/70 rounded-md" style={{ height: `${d.b}%` }} />
          </div>
          <span className="muted mt-2">{d.day}</span>
        </div>
      ))}
    </div>
  );
}
