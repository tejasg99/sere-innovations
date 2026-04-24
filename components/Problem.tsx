const problems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3.5v21M7 10.5l7-7 7 7" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.25 21h17.5" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: "High and recurring costs",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="10" stroke="var(--color-primary)" strokeWidth="2" />
        <path d="M14 8v6l4 2" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Delays in getting chicks when needed",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="var(--color-primary)" strokeWidth="2" />
        <path d="M4 12h20" stroke="var(--color-primary)" strokeWidth="2" />
        <circle cx="9" cy="18" r="1.5" fill="var(--color-primary)" />
      </svg>
    ),
    title: "Lack of control over the hatching process",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 14l7 7 7-7M7 7l7 7 7-7" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
    title: "Reduced independence at the farm level",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="section-spacing"
      style={{ backgroundColor: "var(--color-surface-container-low)" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-body)",
            }}
          >
            The Challenge
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{
              color: "var(--color-on-surface)",
              fontFamily: "var(--font-display)",
            }}
          >
            The Problem Farmers Face Today
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{
              color: "var(--color-on-surface-variant)",
              fontFamily: "var(--font-body)",
            }}
          >
            Many small poultry farmers depend on external hatcheries to get
            chicks. This creates several challenges:
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {problems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-(--radius-lg) transition-all duration-200"
              style={{
                backgroundColor: "var(--color-surface-container-lowest)",
              }}
            >
              <div
                className="shrink-0 w-12 h-12 rounded-md flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-primary-fixed-dim)",
                  opacity: 0.35,
                }}
              >
                {item.icon}
              </div>
              <p
                className="text-base font-medium leading-relaxed pt-2.5"
                style={{
                  color: "var(--color-on-surface)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p
          className="text-base leading-relaxed max-w-2xl"
          style={{
            color: "var(--color-on-surface-variant)",
            fontFamily: "var(--font-body)",
          }}
        >
          This dependency makes it harder for farmers to grow and manage their
          business efficiently.
        </p>
      </div>
    </section>
  );
}
