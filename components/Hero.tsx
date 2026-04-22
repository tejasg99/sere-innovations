export default function Hero() {
  return (
    <section
      id="hero"
      className="relative section-spacing pt-28 md:pt-36 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Subtle decorative blobs */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "var(--color-primary-fixed-dim)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "var(--color-secondary-container)" }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text column */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Field chip */}
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
              style={{
                backgroundColor: "var(--color-primary-fixed-dim)",
                color: "var(--color-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              Smart Poultry Incubation
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{
                color: "var(--color-on-surface)",
                fontFamily: "var(--font-display)",
              }}
            >
              Hatch Your Own Chicks,{" "}
              <span style={{ color: "var(--color-primary)" }}>
                Right on Your Farm
              </span>
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              Take control of your poultry business with an easy-to-use,
              affordable incubation system designed for small farmers.
            </p>

            <p
              className="text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
                opacity: 0.8,
              }}
            >
              No dependence on outside hatcheries. No complicated setup. Just
              simple, reliable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#cta"
                className="gradient-cta text-on-primary font-semibold px-8 py-3.5 rounded-[var(--radius-xl)] hover:shadow-[var(--shadow-hover)] transition-all duration-200 text-center"
              >
                Request a Demo
              </a>
              <a
                href="#features"
                className="font-semibold px-8 py-3.5 rounded-[var(--radius-xl)] transition-all duration-200 text-center"
                style={{
                  backgroundColor: "var(--color-secondary-container)",
                  color: "var(--color-on-secondary-container)",
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Visual column — organic illustration area */}
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-lg">
            <div
              className="relative w-full aspect-square rounded-[2rem] overflow-hidden"
              style={{
                backgroundColor: "var(--color-surface-container-low)",
              }}
            >
              {/* Abstract concentric arcs to convey growth/incubation */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Base circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="var(--color-primary-fixed-dim)"
                  strokeWidth="1.5"
                  opacity="0.4"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="100"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="1"
                  opacity="0.25"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="60"
                  fill="var(--color-primary)"
                  opacity="0.08"
                />
                {/* Egg shape */}
                <ellipse
                  cx="200"
                  cy="190"
                  rx="50"
                  ry="65"
                  fill="var(--color-surface-container-lowest)"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  opacity="0.7"
                />
                {/* Small chick dots */}
                <circle cx="200" cy="185" r="8" fill="var(--color-primary-fixed-dim)" opacity="0.9" />
                <circle cx="190" cy="200" r="4" fill="var(--color-primary)" opacity="0.5" />
                <circle cx="210" cy="200" r="4" fill="var(--color-primary)" opacity="0.5" />
                {/* Growth sprout */}
                <path
                  d="M200 160 Q205 140 215 130 Q200 140 200 160Z"
                  fill="var(--color-primary)"
                  opacity="0.4"
                />
                <path
                  d="M200 160 Q195 140 185 130 Q200 140 200 160Z"
                  fill="var(--color-primary-fixed-dim)"
                  opacity="0.5"
                />
                {/* Stats badge */}
                <rect
                  x="280"
                  y="80"
                  width="100"
                  height="48"
                  rx="12"
                  fill="var(--color-surface-container-lowest)"
                  stroke="var(--color-outline-variant)"
                  strokeWidth="0.5"
                  opacity="0.9"
                />
                <text
                  x="330"
                  y="100"
                  textAnchor="middle"
                  fill="var(--color-primary)"
                  fontSize="11"
                  fontWeight="700"
                  fontFamily="var(--font-display)"
                >
                  95%+
                </text>
                <text
                  x="330"
                  y="118"
                  textAnchor="middle"
                  fill="var(--color-on-surface-variant)"
                  fontSize="8"
                  fontFamily="var(--font-body)"
                >
                  Hatch Rate
                </text>
                {/* Temperature badge */}
                <rect
                  x="20"
                  y="260"
                  width="100"
                  height="48"
                  rx="12"
                  fill="var(--color-surface-container-lowest)"
                  stroke="var(--color-outline-variant)"
                  strokeWidth="0.5"
                  opacity="0.9"
                />
                <text
                  x="70"
                  y="280"
                  textAnchor="middle"
                  fill="var(--color-primary)"
                  fontSize="11"
                  fontWeight="700"
                  fontFamily="var(--font-display)"
                >
                  37.5°C
                </text>
                <text
                  x="70"
                  y="298"
                  textAnchor="middle"
                  fill="var(--color-on-surface-variant)"
                  fontSize="8"
                  fontFamily="var(--font-body)"
                >
                  Optimal Temp
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
