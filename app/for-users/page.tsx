import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function IntroSection() {
  return (
    <section className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
        For Users
      </h1>
      <p className="text-base leading-relaxed sm:text-lg">
        Explore how the Hi-Ball Switch Heater keeps your operation running
        smoothly in all conditions. Below you will find quick-start guidance
        and best practices to help crews stay prepared.
      </p>
    </section>
  );
}

function GettingStartedSection() {
  return (
    <section className="mt-16 space-y-6 border-t border-black pt-10 md:mt-20 md:pt-12">
      <h2 className="text-2xl font-semibold sm:text-3xl">Getting Started</h2>
      <ol className="space-y-4 text-base leading-relaxed sm:text-lg md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
        <li className="border-l border-black pl-4">
          Inspect each heater prior to use for secure caps, clean chimneys, and
          debris-free fuel reservoirs.
        </li>
        <li className="border-l border-black pl-4">
          Stage heaters along the track per installation distances to ensure
          even heat coverage before ignition.
        </li>
        <li className="border-l border-black pl-4">
          Prime the wicks by raising them slightly and allowing kerosene to
          saturate before lighting.
        </li>
        <li className="border-l border-black pl-4">
          Use a wind-shielded torch for quick lighting and adjust wicks for a
          steady blue flame.
        </li>
      </ol>
    </section>
  );
}

function InstallationSection() {
  return (
    <section className="mt-16 space-y-6 border-t border-black pt-10 md:mt-20 md:pt-12">
      <h2 className="text-2xl font-semibold sm:text-3xl">Installation</h2>
      <ol className="space-y-4 text-base leading-relaxed sm:text-lg">
        <li className="border-l border-black pl-4">
          After establishing number of heaters required (see chart below) set
          out at beginning of winter season. SET HEATERS from OUTSIDE of the
          TRACK SO THAT BURNER IS UNDER THE BASE OF RUNNING RAIL. TOP OF BURNER
          STACK SHOULD BE 1 1/2&quot; BELOW BASE OF RAIL.
        </li>
        <li className="border-l border-black pl-4">
          IGNITE and ADJUST WICKS WHEN INSTALLING SO HEATERS WILL BE READY FOR
          INSTANT SERVICE. Approximately 1/2&quot; of wick should be exposed
          above wick tube.
        </li>
      </ol>

      <h3 className="font-semibold text-lg">
        Number of HI-BALL Switch Heaters Recommended for Switch Points
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-lg border border-black text-left text-sm sm:text-base">
          <thead className="bg-black text-white">
            <tr>
              <th className="border border-black px-4 py-3 font-semibold">
                Length of Switch Points
              </th>
              <th className="border border-black px-4 py-3 font-semibold">
                Number of Heaters
              </th>
              <th className="border border-black px-4 py-3 font-semibold">
                Heaters on Each Side
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 py-3">15ft</td>
              <td className="border border-black px-4 py-3">14</td>
              <td className="border border-black px-4 py-3">7</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-3">16ft, 6in.</td>
              <td className="border border-black px-4 py-3">16</td>
              <td className="border border-black px-4 py-3">8</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-3">19ft, 6in.</td>
              <td className="border border-black px-4 py-3">18</td>
              <td className="border border-black px-4 py-3">9</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-3">24ft</td>
              <td className="border border-black px-4 py-3">24</td>
              <td className="border border-black px-4 py-3">12</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-3">30ft</td>
              <td className="border border-black px-4 py-3">30</td>
              <td className="border border-black px-4 py-3">15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function MaintenanceSection() {
  return (
    <section className="mt-16 space-y-6 border-t border-black pt-10 md:mt-20 md:pt-12">
      <h2 className="text-2xl font-semibold sm:text-3xl">Maintenance</h2>
      <ol className="space-y-4 text-base leading-relaxed sm:text-lg">
        <li className="border-l border-black pl-4">
          SERVICE and re-fill DURING DAYLIGHT HOURS. Scrape carbon from wick,
          adjust height and re-fill. The HI-BALL will burn for 75 to 100 hours
          giving full WEEK-END PROTECTION.
        </li>
        <li className="border-l border-black pl-4">
          Any torch similar to engineer&apos;s torch can be used for lighting
          the burner. When ground under the heaters has softened or water has
          accumulated around them, heaters should be removed until ground has
          frozen to prevent them from freezing in. TO EXTINGUISH, SIMPLY PLACE
          COVER ON BURNER STACK.
        </li>
      </ol>
    </section>
  );
}

function DailyChecklistSection() {
  return (
    <section className="mt-16 space-y-6 border-t border-black pt-10 md:mt-20 md:pt-12">
      <h2 className="text-2xl font-semibold sm:text-3xl">Daily Checklist</h2>
      <ul className="grid grid-cols-1 gap-4 text-base leading-relaxed sm:text-lg sm:grid-cols-2">
        <li className="border border-black px-4 py-3">
          Monitor flame height and trim wicks to maintain consistent output.
        </li>
        <li className="border border-black px-4 py-3">
          Verify fuel levels and refill during daylight hours for safety.
        </li>
        <li className="border border-black px-4 py-3">
          Clear snow, ice, or ballast buildup around the heater base.
        </li>
        <li className="border border-black px-4 py-3">
          Check that vents remain open for optimal combustion airflow.
        </li>
      </ul>
    </section>
  );
}

function SupportSection() {
  return (
    <section className="mt-16 space-y-6 border-t border-black pt-10 text-base leading-relaxed sm:text-lg md:mt-20 md:pt-12">
      <h2 className="text-2xl font-semibold sm:text-3xl">Support</h2>
      <p>
        Need replacement parts or additional training resources? Reach out to
        the Mississippi Supply Company team and we will get you what you need to
        keep switches clear and crews confident.
      </p>
      <p className="font-semibold">Call: (314) 270-3184</p>
    </section>
  );
}

export default function ForUsersPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 md:max-w-6xl lg:max-w-6xl lg:px-8 lg:py-20 xl:max-w-7xl 2xl:max-w-7xl 2xl:py-24">
        <IntroSection />
        <GettingStartedSection />
        <InstallationSection />
        <MaintenanceSection />
        <DailyChecklistSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}
