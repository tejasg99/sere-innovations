const points = [
  "Designed based on practical, on-ground needs",
  "Focused on simplicity and reliability",
  "No unnecessary complexity or technical barriers",
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="section-spacing"
      style={{ backgroundColor: "var(--color-surface-container-low)" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Our Promise
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
            style={{
              color: "var(--color-on-surface)",
              fontFamily: "var(--font-display)",
            }}
          >
            Built with Farmers in Mind
          </h2>
          <p
            className="text-lg leading-relaxed mb-10"
            style={{
              color: "var(--color-on-surface-variant)",
              fontFamily: "var(--font-body)",
            }}
          >
            Sere Innovations is not just a product — it is built from real
            challenges faced by small poultry farmers.
          </p>

          {/* Supporting points */}
          <div className="inline-flex flex-col gap-4 text-left">
            {points.map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-primary-fixed-dim)" }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2.5 6l2.5 2.5 4.5-4.5"
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span
                  className="text-base font-medium"
                  style={{
                    color: "var(--color-on-surface)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Closing line */}
          <p
            className="text-base leading-relaxed mt-10 italic"
            style={{
              color: "var(--color-on-surface-variant)",
              fontFamily: "var(--font-body)",
            }}
          >
            We believe technology should make farming easier — not harder.
          </p>
        </div>
      </div>
    </section>
  );
}
