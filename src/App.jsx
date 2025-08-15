import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import BodyPanel from "./components/BodyPanel";
import HealthCards from "./components/HealthCards";
import ActivityChart from "./components/ActivityChart";
import CalendarPanel from "./components/CalendarPanel";
import Appointments from "./components/Appointments";
import ScheduleList from "./components/ScheduleList";

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 md:py-6">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-2">
            <div className="md:sticky md:top-6">
              <Sidebar />
            </div>
          </aside>

          {/* Main */}
          <main className="col-span-12 md:col-span-10">
            <Header />

            <div className="grid grid-cols-12 gap-4 md:gap-6 mt-4 md:mt-6">
              {/* Left */}
              <section className="col-span-12 lg:col-span-7 space-y-4 md:space-y-6">
                <div className="card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-hc.slate">Dashboard</h2>
                  <div className="grid grid-cols-12 gap-4 md:gap-6 mt-4 md:mt-6">
                    <div className="col-span-12 sm:col-span-7">
                      <BodyPanel />
                    </div>
                    <div className="col-span-12 sm:col-span-5">
                      <HealthCards />
                    </div>
                  </div>
                </div>

                <div className="card p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="section-title">Activity</h3>
                    <p className="muted">3 appointment on this week</p>
                  </div>
                  <div className="mt-4">
                    <ActivityChart />
                  </div>
                </div>
              </section>

              {/* Right */}
              <section className="col-span-12 lg:col-span-5 space-y-4 md:space-y-6">
                <CalendarPanel />
                <Appointments />
                <div className="card p-4 md:p-6">
                  <h3 className="section-title">The Upcoming Schedule</h3>
                  <div className="mt-4 space-y-4">
                    <ScheduleList />
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
