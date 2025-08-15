export default function Appointments() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-2xl p-4 md:p-5 bg-hc.deep text-black shadow-soft">
        <p className="text-sm">Dentist</p>
        <p className="text-xs opacity-80">09:00–11:00</p>
        <p className="text-xs mt-2 opacity-80">Dr. Cameron Williamson</p>
        <div className="mt-2 text-2xl">🦷</div>
      </div>

      <div className="rounded-2xl p-4 md:p-5 bg-hc.soft text-hc.slate shadow-soft">
        <p className="text-sm">Physiotherapy Appointment</p>
        <p className="text-xs opacity-70">11:00–12:00</p>
        <p className="text-xs mt-2 opacity-70">Dr. Kevin Djones</p>
        <div className="mt-2 text-2xl">🧘</div>
      </div>
    </div>
  );
}
