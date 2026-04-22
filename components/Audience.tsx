const audiences = [
  {
    label: "Small poultry farmers",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 24c0-4.418 5.373-8 12-8s12 3.582 12 8" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="8" r="6" stroke="var(--color-primary)" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Farm owners looking to reduce costs",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="14" width="22" height="10" rx="2" stroke="var(--color-primary)" strokeWidth="2" />
        <path d="M14 4l10 10H4L14 4z" stroke="var(--color-primary)" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Agri-entrepreneurs starting or expanding poultry operations",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 22V10l8-6 8 6v12" stroke="var(--color-primary)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M6 22h16" stroke="var(--color-primary)" strokeWidth="2" />
        <rect x="11" y="16" width="6" height="6" rx="1" stroke="var(--color-primary)" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Rural youth exploring income opportunities",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="var(--color-primary)" strokeWidth="2" />
        <path d="M14 8v8l5 3" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Audience() {
  return (
    <section
      id="audience"
      className="section-spacing"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Made For You
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{
              color: "var(--color-on-surface)",
              fontFamily: "var(--font-display)",
            }}
          >
            Who This Is For
          </h2>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto"
            style={{
              color: "var(--color-on-surface-variant)",
              fontFamily: "var(--font-body)",
            }}
          >
            This system is ideal for:
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {audiences.map((item, i) => (
            <div
              key={i}
              className="card-ambient flex flex-col items-center text-center gap-4 p-7 rounded-[var(--radius-lg)]"
              style={{
                backgroundColor: "var(--color-surface-container-lowest)",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-primary-fixed-dim)",
                  opacity: 0.4,
                }}
              >
                {item.icon}
              </div>
              <p
                className="text-sm font-medium leading-relaxed"
                style={{
                  color: "var(--color-on-surface)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Closing */}
        <p
          className="text-center text-base font-medium leading-relaxed"
          style={{
            color: "var(--color-on-surface-variant)",
            fontFamily: "var(--font-body)",
          }}
        >
          If you want more control over your farm, this is built for you.
        </p>
      </div>
    </section>
  );
}
