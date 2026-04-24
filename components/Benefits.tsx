const benefits = [
  {
    title: "More Control",
    description: "Manage your hatching process without relying on others",
    accent: "var(--color-primary)",
  },
  {
    title: "Lower Costs",
    description: "Reduce expenses spent on external hatcheries",
    accent: "var(--color-primary-container)",
  },
  {
    title: "Better Planning",
    description: "Hatch chicks when your farm needs them",
    accent: "var(--color-primary)",
  },
  {
    title: "Simpler Operations",
    description: "No complicated processes or training required",
    accent: "var(--color-primary-container)",
  },
  {
    title: "Higher Confidence",
    description: "Take ownership of your farm's growth",
    accent: "var(--color-primary)",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="section-spacing"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left heading area */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              Benefits
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              style={{
                color: "var(--color-on-surface)",
                fontFamily: "var(--font-display)",
              }}
            >
              Why It Matters for Your Farm
            </h2>
          </div>

          {/* Right list */}
          <div className="lg:w-3/5">
            <div className="space-y-6">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-5 rounded-(--radius-lg) transition-colors duration-200 group"
                  style={{
                    backgroundColor: "var(--color-surface-container-low)",
                  }}
                >
                  {/* Number pill */}
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: "var(--color-primary-fixed-dim)",
                      color: "var(--color-primary)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold mb-1"
                      style={{
                        color: "var(--color-on-surface)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "var(--color-on-surface-variant)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
