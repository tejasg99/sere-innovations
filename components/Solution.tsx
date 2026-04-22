const points = [
  "Designed for everyday use",
  "No technical expertise required",
  "Built with real farmer needs in mind",
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="section-spacing"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Visual — organic shape illustration */}
          <div className="flex-1 w-full max-w-md">
            <div
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: "var(--color-surface-container-low)" }}
            >
              <svg
                viewBox="0 0 360 270"
                className="w-full h-full p-8"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Farmhouse */}
                <rect
                  x="100"
                  y="110"
                  width="160"
                  height="100"
                  rx="4"
                  fill="var(--color-surface-container-highest)"
                  stroke="var(--color-primary)"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <polygon
                  points="80,110 180,50 280,110"
                  fill="var(--color-primary)"
                  opacity="0.15"
                  stroke="var(--color-primary)"
                  strokeWidth="1.5"
                />
                {/* Door */}
                <rect
                  x="155"
                  y="160"
                  width="50"
                  height="50"
                  rx="4"
                  fill="var(--color-primary-fixed-dim)"
                  opacity="0.5"
                />
                {/* Incubator box */}
                <rect
                  x="30"
                  y="170"
                  width="50"
                  height="40"
                  rx="6"
                  fill="var(--color-surface-container-lowest)"
                  stroke="var(--color-primary)"
                  strokeWidth="1.5"
                />
                <circle cx="55" cy="185" r="4" fill="var(--color-primary-fixed-dim)" />
                <circle cx="45" cy="195" r="3" fill="var(--color-primary)" opacity="0.4" />
                {/* Arrow from incubator to farm */}
                <path
                  d="M80 190 Q90 190 100 180"
                  stroke="var(--color-primary)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="4 3"
                  opacity="0.5"
                />
                {/* Ground line */}
                <path
                  d="M20 210 Q180 220 340 210"
                  stroke="var(--color-primary)"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.2"
                />
                {/* Small plants */}
                <line x1="300" y1="210" x2="300" y2="190" stroke="var(--color-primary)" strokeWidth="1.5" opacity="0.3" />
                <circle cx="300" cy="186" r="6" fill="var(--color-primary-fixed-dim)" opacity="0.5" />
                <line x1="320" y1="210" x2="320" y2="195" stroke="var(--color-primary)" strokeWidth="1.5" opacity="0.3" />
                <circle cx="320" cy="191" r="5" fill="var(--color-primary-fixed-dim)" opacity="0.4" />
              </svg>
            </div>
          </div>

          {/* Text column */}
          <div className="flex-1 max-w-xl">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              Our Approach
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              style={{
                color: "var(--color-on-surface)",
                fontFamily: "var(--font-display)",
              }}
            >
              A Simple Way to Take Control
            </h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              Sere Innovations provides a smart incubation system that allows
              farmers to hatch eggs directly on their own farms.
            </p>

            {/* Supporting points */}
            <ul className="space-y-4 mb-8">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary-fixed-dim)" }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 7l3 3 5-5"
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
                </li>
              ))}
            </ul>

            <p
              className="text-base leading-relaxed"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              Now, you can manage your hatching cycle on your own terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
