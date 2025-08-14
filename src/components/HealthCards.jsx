const Line = ({ value=60, color="bg-hc.primary" }) => (
  <div className="h-2 bg-hc.soft rounded-full">
    <div className={`h-2 ${color} rounded-full`} style={{ width: `${value}%` }} />
  </div>
);

const Card = ({ title, date="Date: 26 Okt 2021", value, color, icon }) => (
  <div className="card p-4 md:p-5">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-2xl bg-hc.soft flex items-center justify-center text-lg">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-hc.slate">{title}</p>
        <p className="muted">{date}</p>
      </div>
    </div>
    <div className="mt-4">
      <Line value={value} color={color} />
    </div>
  </div>
);

export default function HealthCards() {
  return (
    <div className="space-y-4">
      <Card title="Lungs" value={35} color="bg-hc.danger" icon={<span>🫁</span>} />
      <Card title="Teeth" value={78} color="bg-hc.success" icon={<span>🦷</span>} />
      <Card title="Bone" value={45} color="bg-hc.warning" icon={<span>🦴</span>} />
    </div>
  );
}
