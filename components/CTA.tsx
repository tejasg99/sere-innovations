export default function CTA() {
  return (
    <section
      id="cta"
      className="section-spacing relative overflow-hidden"
      style={{ backgroundColor: "var(--color-surface-container-low)" }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "var(--color-primary-fixed-dim)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--color-primary)" }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div
          className="rounded-4xl px-6 py-16 md:px-16 md:py-20 text-center"
          style={{ backgroundColor: "#bedfaeff" }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Get Started
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 max-w-2xl mx-auto"
            style={{
              color: "var(--color-on-surface)",
              fontFamily: "var(--font-display)",
            }}
          >
            Start Building Your Own Hatchery Today
          </h2>
          <p
            className="text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{
              color: "var(--color-on-surface-variant)",
              fontFamily: "var(--font-body)",
            }}
          >
            Take the next step towards a more independent and profitable poultry
            business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#"
              className="gradient-cta text-on-primary font-semibold px-8 py-4 rounded-(--radius-xl) hover:shadow-(--shadow-hover) transition-all duration-200 text-base"
            >
              Request a Demo
            </a>
            <a
              href="#"
              className="font-semibold px-8 py-4 rounded-(--radius-xl) transition-all duration-200 text-base"
              style={{
                backgroundColor: "var(--color-on-primary)",
                color: "var(--color-on-secondary-container)",
              }}
            >
              Enquire Now
            </a>
          </div>

          <p
            className="text-sm leading-relaxed"
            style={{
              color: "var(--color-on-surface-variant)",
              fontFamily: "var(--font-body)",
            }}
          >
            Our team will guide you through everything you need to get started.
          </p>
        </div>
      </div>
    </section>
  );
}
