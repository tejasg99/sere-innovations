const features = [
  {
    title: "Easy to Use",
    description:
      "Designed for farmers with no technical background. Simple setup and operation.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" stroke="var(--color-primary)" strokeWidth="2" />
        <path d="M11 16l3 3 7-7" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Temperature Control",
    description:
      "Maintains the right temperature for healthy egg development.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="13" y="4" width="6" height="20" rx="3" stroke="var(--color-primary)" strokeWidth="2" />
        <circle cx="16" cy="24" r="4" stroke="var(--color-primary)" strokeWidth="2" />
        <line x1="16" y1="20" x2="16" y2="14" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Humidity Control",
    description:
      "Ensures the correct moisture level throughout the incubation process.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4s-8 10-8 16a8 8 0 1016 0c0-6-8-16-8-16z" stroke="var(--color-primary)" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Automatic Egg Turning",
    description:
      "Reduces manual effort and improves hatching success.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 16a12 12 0 0121.6-7.2" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 16a12 12 0 01-21.6 7.2" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
        <path d="M25.6 5l0 4-4 0" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.4 27l0-4 4 0" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Affordable Setup",
    description:
      "Priced to be accessible for small and growing farms.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="var(--color-primary)" strokeWidth="2" />
        <path d="M16 9v14M12 12.5c0-1.933 1.79-3.5 4-3.5s4 1.567 4 3.5-1.79 3.5-4 3.5-4 1.567-4 3.5 1.79 3.5 4 3.5 4-1.567 4-3.5" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Farmer-Friendly Design",
    description:
      "Built for real conditions, not complex lab environments.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 28c-4 0-12-2-12-8V10l12-6 12 6v10c0 6-8 8-12 8z" stroke="var(--color-primary)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 16v6" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="13" r="2" fill="var(--color-primary)" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="section-spacing"
      style={{ backgroundColor: "var(--color-surface-container-low)" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Key Features
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{
              color: "var(--color-on-surface)",
              fontFamily: "var(--font-display)",
            }}
          >
            Everything You Need in One System
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div
              key={i}
              className="card-ambient p-7 rounded-(--radius-lg) flex flex-col gap-4"
              style={{
                backgroundColor: "var(--color-surface-container-lowest)",
              }}
            >
              <div
                className="w-14 h-14 rounded-md flex items-center justify-center"
                style={{ backgroundColor: "var(--color-primary-fixed-dim)", opacity: 0.4 }}
              >
                {feat.icon}
              </div>
              <h3
                className="text-lg font-semibold"
                style={{
                  color: "var(--color-on-surface)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {feat.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--color-on-surface-variant)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
