const Pill = ({ title, time, icon }) => (
  <div className="w-full rounded-2xl px-4 py-3 bg-hc.soft flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="font-medium text-hc.slate">{title}</p>
        <p className="muted">{time}</p>
      </div>
    </div>
  </div>
);

export default function ScheduleList() {
  return (
    <>
      <div>
        <p className="muted mb-2">On Thursday</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Pill title="Health checkup complete" time="11:00 AM" icon="💉" />
          <Pill title="Ophthalmologist" time="14:00 PM" icon="👁️" />
        </div>
      </div>

      <div>
        <p className="muted mb-2">On Saturday</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Pill title="Cardiologist" time="12:00 AM" icon="❤️" />
          <Pill title="Neurologist" time="16:00 PM" icon="🧑‍⚕️" />
        </div>
      </div>
    </>
  );
}
