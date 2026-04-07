'use client';

const brands = ['NEXTA', 'Kabilife', 'Smart Healthy', 'BrandWave', 'Mediatico'];
const metrics = [
  { value: '30+', label: 'Projects' },
  { value: '3×', label: 'Avg. Growth' },
  { value: '100%', label: 'On-Time Delivery' },
];

export default function SocialProofBar() {
  return (
    <section className="bg-[#F5F5F7] py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
          {/* Left */}
          <div className="md:w-1/4 text-center md:text-left">
            <p className="text-sm font-bold text-dark">Trusted by growing brands.</p>
          </div>

          {/* Center — Brand Pills */}
          <div className="md:w-1/2 px-0 md:px-8">
            <div className="flex gap-2 overflow-x-auto hide-scrollbar justify-center md:justify-start">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="flex-shrink-0 text-[13px] text-[#777] bg-white border border-[#EEEEEE] px-5 py-2 rounded-full whitespace-nowrap"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Metrics */}
          <div className="md:w-1/4 flex items-center gap-0 justify-center md:justify-end">
            {metrics.map((m, i) => (
              <div key={m.label} className="flex items-center">
                {i > 0 && <div className="w-px h-8 bg-[#DDDDDD] mx-4" />}
                <div className="text-center">
                  <div className="text-[22px] font-bold text-dark leading-none">{m.value}</div>
                  <div className="text-[11px] uppercase tracking-wide text-muted mt-0.5">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
